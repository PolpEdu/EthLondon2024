// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseHook} from "v4-periphery/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Counter is BaseHook, EIP712, Ownable {
    using PoolIdLibrary for PoolKey;

    address private signer =
        address(0x39e6Db77941463eEA0b323F66509EAdF0bf0bf1b);
    bytes32 private constant _PERMIT_WITHDRAW =
        keccak256("Permit(uint256 blockNumber,uint256 nonce,uint8 trustScore)");

    event SetSigner(address indexed signer);
    mapping(uint256 => bool) private _nonces;
    uint8 private trustScore = 0;

    // NOTE: ---------------------------------------------------------
    // state variables should typically be unique to a pool
    // a single hook contract should be able to service multiple pools
    // ---------------------------------------------------------------

    mapping(PoolId => uint256 count) public beforeSwapCount;
    mapping(PoolId => uint256 count) public afterSwapCount;

    mapping(PoolId => uint256 count) public beforeAddLiquidityCount;
    mapping(PoolId => uint256 count) public beforeRemoveLiquidityCount;

    address public _owner = address(0);

    function name() external pure returns (string memory) {
        return "HookManager";
    }

    constructor(
        IPoolManager _poolManager
    ) BaseHook(_poolManager) EIP712("HookManager", "1") Ownable(_owner) {}

    function getHookPermissions()
        public
        pure
        override
        returns (Hooks.Permissions memory)
    {
        return
            Hooks.Permissions({
                beforeInitialize: false,
                afterInitialize: false,
                beforeAddLiquidity: true,
                afterAddLiquidity: false,
                beforeRemoveLiquidity: true,
                afterRemoveLiquidity: false,
                beforeSwap: true,
                afterSwap: true,
                beforeDonate: false,
                afterDonate: false
            });
    }

    // -----------------------------------------------
    // NOTE: see IHooks.sol for function documentation
    // -----------------------------------------------

    function beforeSwap(
        address sender,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata,
        bytes calldata data
    ) external override returns (bytes4) {
        beforeSwapCount[key.toId()]++;
        /*int256 blockNumber = block.number;
        uint256 nonce = 0;
        uint8 trustScore = 93;
        address signer = vm.addr(signerPrivateKey);

        // sign typed data above
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                keccak256(
                    abi.encode(
                        keccak256(
                            "Permit(address owner,uint256 blockNumber,uint256 nonce,uint8 trustScore)"
                        ),
                        address(0),
                        blockNumber,
                        nonce,
                        trustScore
                    )
                )
            )
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest);

        bytes memory data = abi.encode(blockNumber, nonce, trustScore, v, r, s);*/
        // decode data
        (
            uint256 block_number,
            uint256 nonce,
            uint8 _trustScore,
            uint8 v,
            bytes32 r,
            bytes32 s
        ) = abi.decode(
                data,
                (uint256, uint256, uint8, uint8, bytes32, bytes32)
            );
        permit(block_number, nonce, _trustScore, sender, v, r, s);

        return BaseHook.beforeSwap.selector;
    }

    function afterSwap(
        address,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata,
        BalanceDelta,
        bytes calldata
    ) external override returns (bytes4) {
        afterSwapCount[key.toId()]++;
        return BaseHook.afterSwap.selector;
    }

    function beforeAddLiquidity(
        address,
        PoolKey calldata key,
        IPoolManager.ModifyLiquidityParams calldata,
        bytes calldata
    ) external override returns (bytes4) {
        beforeAddLiquidityCount[key.toId()]++;
        return BaseHook.beforeAddLiquidity.selector;
    }

    function beforeRemoveLiquidity(
        address,
        PoolKey calldata key,
        IPoolManager.ModifyLiquidityParams calldata,
        bytes calldata
    ) external override returns (bytes4) {
        beforeRemoveLiquidityCount[key.toId()]++;
        return BaseHook.beforeRemoveLiquidity.selector;
    }

    function permit(
        uint256 block_number,
        uint256 nonce,
        uint8 _trustScore,
        address sender,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) private {
        require(block.timestamp <= block_number, "Expired deadline");
        require(_trustScore >= trustScore, "Invalid trust score");
        bytes32 structHash = keccak256(
            abi.encode(_PERMIT_WITHDRAW, sender, _useNonce(nonce), block_number)
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address _signer = ECDSA.recover(hash, v, r, s);
        require(_signer == signer, "Invalid signature");
    }

    function setSigner(address _signer) external onlyOwner {
        signer = _signer;
        emit SetSigner(_signer);
    }

    function _useNonce(uint256 nonce) private returns (uint256) {
        require(!_nonces[nonce], "Invalid nonce already used");
        _nonces[nonce] = true;
        return nonce;
    }

    function setTrustScore(uint8 score) external onlyOwner {
        trustScore = score;
    }
}

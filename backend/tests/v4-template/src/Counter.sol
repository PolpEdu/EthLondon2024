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
import "forge-std/console.sol";

contract Counter is BaseHook, EIP712, Ownable {
    using PoolIdLibrary for PoolKey;

    address private signer =
        address(0x39e6Db77941463eEA0b323F66509EAdF0bf0bf1b);
    bytes32 private constant _PERMIT_TYPEHASH =
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
                beforeAddLiquidity: false,
                afterAddLiquidity: false,
                beforeRemoveLiquidity: false,
                afterRemoveLiquidity: false,
                beforeSwap: true,
                afterSwap: false,
                beforeDonate: false,
                afterDonate: false
            });
    }

    // -----------------------------------------------
    // NOTE: see IHooks.sol for function documentation
    // -----------------------------------------------

    function beforeSwap(
        address,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata,
        bytes calldata data
    ) external override returns (bytes4) {
        beforeSwapCount[key.toId()]++;
        // decode data
        /* bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                keccak256(
                    abi.encode(_PERMIT_TYPEHASH, blockNumber, nonce, trustScore)
                )
            )
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest); */
        //  bytes memory data = abi.encode(blockNumber, nonce, trustScore, v, r, s);

        (
            uint256 blockNumber,
            uint256 nonce,
            uint8 _trustScore,
            uint8 v,
            bytes32 r,
            bytes32 s
        ) = abi.decode(
                data,
                (uint256, uint256, uint8, uint8, bytes32, bytes32)
            );

        console.log("blockNumber: %s", blockNumber);
        console.log("nonce: %s", nonce);
        console.log("trustScore: %s", _trustScore);

        permit(blockNumber, nonce, _trustScore, v, r, s);

        return BaseHook.beforeSwap.selector;
    }

    function permit(
        uint256 block_number,
        uint256 nonce,
        uint8 _trustScore,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) private {
        require(block.timestamp <= block_number, "Expired deadline");
        require(_trustScore >= trustScore, "Invalid trust score");
        bytes32 structHash = getStructHash(
            block_number,
            _useNonce(nonce),
            _trustScore
        );

        address _signer = ECDSA.recover(structHash, v, r, s);
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

    function getStructHash(
        uint256 _blockNumber,
        uint256 _nonce,
        uint8 _trustScore
    ) public pure returns (bytes32) {
        return
            keccak256(
                abi.encodePacked(
                    "\x19\x01",
                    keccak256(
                        abi.encode(
                            _PERMIT_TYPEHASH,
                            _blockNumber,
                            _nonce,
                            _trustScore
                        )
                    )
                )
            );
    }
}

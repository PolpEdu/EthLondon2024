// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {BaseHook} from "v4-periphery/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId} from "v4-core/src/types/PoolId.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract VerifySignHook is BaseHook, EIP712, Ownable {
    address public signer;
    bytes32 private constant _PERMIT_WITHDRAW =
        keccak256("Permit(address owner,uint256 nonce,uint256 block_number)");

    event SetSigner(address indexed signer);
    mapping(uint256 => bool) private _nonces;

    constructor(
        IPoolManager _poolManager,
        address _signer,
        address owner
    ) EIP712("HookManager", "1") BaseHook(_poolManager) Ownable(owner) {
        signer = _signer;
    }

    function name() external pure returns (string memory) {
        return "HookManager";
    }

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
        address sender,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata,
        bytes calldata data
    ) external override returns (bytes4) {
        (
            uint256 block_number,
            uint256 nonce,
            uint8 v,
            bytes32 r,
            bytes32 s
        ) = abi.decode(data, (uint256, uint256, uint8, bytes32, bytes32));
        permit(block_number, nonce, sender, v, r, s);
        return BaseHook.beforeSwap.selector;
    }

    /*  function afterSwap(
        address,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata,
        BalanceDelta,
        bytes calldata
    ) external pure override returns (bytes4) {
        return BaseHook.afterSwap.selector;
    } */

    /* function beforeAddLiquidity(
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
    } */

    function permit(
        uint256 block_number,
        uint256 nonce,
        address sender,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) private {
        require(block.timestamp <= block_number, "Expired deadline");

        bytes32 structHash = keccak256(
            abi.encode(_PERMIT_WITHDRAW, sender, _useNonce(nonce), block_number)
        );

        bytes32 hash = _hashTypedDataV4(structHash);

        address _signer = ECDSA.recover(hash, v, r, s);
        require(_signer == signer, "PBTmanager: invalid signature");
    }

    function setSigner(address _signer) external onlyOwner {
        signer = _signer;
        emit SetSigner(_signer);
    }

    function _useNonce(uint256 nonce) private returns (uint256) {
        require(!_nonces[nonce], "PBTmanager: nonce already used");
        _nonces[nonce] = true;
        return nonce;
    }
}

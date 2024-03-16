// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {TickMath} from "v4-core/src/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";
import {Deployers} from "v4-core/test/utils/Deployers.sol";
import {HookVerify} from "../src/HookVerify.sol";
import {HookMiner} from "./utils/HookMiner.sol";

import "forge-std/console.sol";

contract HookVerifyTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    HookVerify hookverify;
    PoolId poolId;
    uint256 internal signerPrivateKey;
    address internal signer;
    bytes32 private constant _PERMIT_TYPEHASH =
        keccak256(
            "Permit(int256 amount,uint256 blockNumber,uint256 nonce,uint8 trustScore)"
        );

    function setUp() public {
        signerPrivateKey = 0xff0f5f3e25717074f4465a5b168a59b8df626165558f006031d9131449350775;
        signer = vm.addr(signerPrivateKey);
        // creates the pool manager, utility routers, and test tokens
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);
        (address hookAddress, bytes32 salt) = HookMiner.find(
            address(this),
            flags,
            type(HookVerify).creationCode,
            abi.encode(address(manager))
        );
        hookverify = new HookVerify{salt: salt}(IPoolManager(address(manager)));
        require(
            address(hookverify) == hookAddress,
            "HookVerifyTest: hook address mismatch"
        );

        // Create the pool
        key = PoolKey(
            currency0,
            currency1,
            3000,
            60,
            IHooks(address(hookverify))
        );
        poolId = key.toId();
        manager.initialize(key, SQRT_RATIO_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(
            key,
            IPoolManager.ModifyLiquidityParams(-60, 60, 10 ether),
            ZERO_BYTES
        );
        modifyLiquidityRouter.modifyLiquidity(
            key,
            IPoolManager.ModifyLiquidityParams(-120, 120, 10 ether),
            ZERO_BYTES
        );
        modifyLiquidityRouter.modifyLiquidity(
            key,
            IPoolManager.ModifyLiquidityParams(
                TickMath.minUsableTick(60),
                TickMath.maxUsableTick(60),
                10 ether
            ),
            ZERO_BYTES
        );
    }

    function testHookVerify() public {
        // positions were created in setup()
        uint256 blockNumber = block.number;
        uint256 nonce = 0;
        uint8 trustScore = 93;
        int256 amountSpecified = -1e18; // negative number indicates exact input swap!

        // sign typed data above
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                keccak256(
                    abi.encode(
                        _PERMIT_TYPEHASH,
                        amountSpecified,
                        blockNumber,
                        nonce,
                        trustScore
                    )
                )
            )
        );
        console.log("signerPrivateKey: %s", signerPrivateKey);

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest);

        require(
            signer == ecrecover(digest, v, r, s),
            "HookVerifyTest: ecrecover failed"
        );

        bytes memory data = abi.encode(
            amountSpecified,
            blockNumber,
            nonce,
            trustScore,
            v,
            r,
            s
        );

        // Perform a test swap //
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(key, zeroForOne, amountSpecified, data);
        // ------------------- //

        assertEq(int256(swapDelta.amount0()), amountSpecified);
    }

    function testHookVerifyFail() public {
        uint256 blockNumber = block.number;
        uint256 nonce = 0;
        uint8 trustScore = 93;
        int256 amountSpecified = -1e18; // negative number indicates exact input swap!

        // sign typed data above
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                keccak256(
                    abi.encode(
                        _PERMIT_TYPEHASH,
                        amountSpecified,
                        blockNumber,
                        nonce,
                        trustScore
                    )
                )
            )
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest);

        require(
            signer == ecrecover(digest, v, r, s),
            "HookVerifyTest: ecrecover failed"
        );

        bytes memory data = abi.encode(
            amountSpecified,
            blockNumber,
            nonce,
            trustScore,
            v,
            r,
            s
        );

        // Perform a test swap //
        bool zeroForOne = true;
        BalanceDelta swapDelta = swap(key, zeroForOne, amountSpecified, data);
        // ------------------- //

        assertEq(int256(swapDelta.amount0()), amountSpecified);

        // now try to use the same nonce again, expect rever swap with "Invalid nonce already used
        vm.expectRevert(bytes("Invalid nonce already used"));
        swapDelta = swap(key, zeroForOne, amountSpecified, data);
    }

    // now with tampered data signe
    function testHookVerifyFail2() public {
        // positions were created in setup()
        uint256 blockNumber = block.number;
        uint256 nonce = 0;
        uint8 trustScore = 93;
        int256 amountSpecified = -1e18; // negative number indicates exact input swap!

        // sign typed data above
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                keccak256(
                    abi.encode(
                        _PERMIT_TYPEHASH,
                        amountSpecified,
                        blockNumber,
                        nonce,
                        trustScore
                    )
                )
            )
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest);

        require(
            signer == ecrecover(digest, v, r, s),
            "HookVerifyTest: ecrecover failed"
        );

        bytes memory data = abi.encode(
            amountSpecified,
            blockNumber,
            nonce,
            100, //fake trust score to be 100
            v,
            r,
            s
        );

        // Perform a test swap //
        bool zeroForOne = true;
        vm.expectRevert(bytes("Invalid signature"));
        BalanceDelta swapDelta = swap(key, zeroForOne, amountSpecified, data);
    }

    function testLiquidityHooks() public {
        // remove liquidity, should be fine as they are unchaged.
        int256 liquidityDelta = -1e18;
        modifyLiquidityRouter.modifyLiquidity(
            key,
            IPoolManager.ModifyLiquidityParams(-60, 60, liquidityDelta),
            ZERO_BYTES
        );
    }
}

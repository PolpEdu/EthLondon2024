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
import {Counter} from "../src/Counter.sol";
import {HookMiner} from "./utils/HookMiner.sol";

import "forge-std/console.sol";

contract CounterTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    Counter counter;
    PoolId poolId;
    uint256 internal signerPrivateKey;

    bytes32 private constant _PERMIT_TYPEHASH =
        keccak256("Permit(uint256 blockNumber,uint256 nonce,uint8 trustScore)");

    function setUp() public {
        signerPrivateKey = 0xabc123;
        // creates the pool manager, utility routers, and test tokens
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(
            Hooks.BEFORE_SWAP_FLAG |
                Hooks.AFTER_SWAP_FLAG |
                Hooks.BEFORE_ADD_LIQUIDITY_FLAG |
                Hooks.BEFORE_REMOVE_LIQUIDITY_FLAG
        );
        (address hookAddress, bytes32 salt) = HookMiner.find(
            address(this),
            flags,
            type(Counter).creationCode,
            abi.encode(address(manager))
        );
        counter = new Counter{salt: salt}(IPoolManager(address(manager)));
        require(
            address(counter) == hookAddress,
            "CounterTest: hook address mismatch"
        );

        // Create the pool
        key = PoolKey(currency0, currency1, 3000, 60, IHooks(address(counter)));
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

    function testCounterHooks() public {
        // positions were created in setup()
        /* assertEq(counter.beforeAddLiquidityCount(poolId), 3);
        assertEq(counter.beforeRemoveLiquidityCount(poolId), 0);

        assertEq(counter.beforeSwapCount(poolId), 0);
        assertEq(counter.afterSwapCount(poolId), 0); */

        uint256 blockNumber = block.number;
        uint256 nonce = 0;
        uint8 trustScore = 93;
        address signer = vm.addr(signerPrivateKey);

        // sign typed data above
        bytes32 digest = keccak256(
            abi.encodePacked(
                "\x19\x01",
                keccak256(
                    abi.encode(_PERMIT_TYPEHASH, blockNumber, nonce, trustScore)
                )
            )
        );
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest);

        require(
            signer == ecrecover(digest, v, r, s),
            "CounterTest: ecrecover failed"
        );

        bytes memory data = abi.encode(blockNumber, nonce, trustScore, v, r, s);

        // Perform a test swap //
        bool zeroForOne = true;
        int256 amountSpecified = -1e18; // negative number indicates exact input swap!
        BalanceDelta swapDelta = swap(key, zeroForOne, amountSpecified, data);
        // ------------------- //

        assertEq(int256(swapDelta.amount0()), amountSpecified);

        /*  assertEq(counter.beforeSwapCount(poolId), 1);
        assertEq(counter.afterSwapCount(poolId), 1); */
    }

    function testLiquidityHooks() public {
        // positions were created in setup()
        /* assertEq(counter.beforeAddLiquidityCount(poolId), 3);
        assertEq(counter.beforeRemoveLiquidityCount(poolId), 0); */

        // remove liquidity
        int256 liquidityDelta = -1e18;
        modifyLiquidityRouter.modifyLiquidity(
            key,
            IPoolManager.ModifyLiquidityParams(-60, 60, liquidityDelta),
            ZERO_BYTES
        );

        /* assertEq(counter.beforeAddLiquidityCount(poolId), 3);
        assertEq(counter.beforeRemoveLiquidityCount(poolId), 1); */
    }
}

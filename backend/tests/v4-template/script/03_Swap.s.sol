// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";
import {TickMath} from "v4-core/src/libraries/TickMath.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";

contract SwapScript is Script {
    // PoolSwapTest Contract address on Goerli
    PoolSwapTest swapRouter =
        PoolSwapTest(0x60AbEb98b3b95A0c5786261c1Ab830e3D2383F9e); // swap test base sep

    address constant MUNI_ADDRESS =
        address(0x56ba6046cc51b859DAA4Eb6D445DE99C5b1E4391); //-- insert your own contract address here -- mUNI deployed to GOERLI
    address constant MUSDC_ADDRESS =
        address(0x06B2B98dB45481dd0878Bb07979Ba0A79b60A49e); //-- insert your own contract address here -- mUSDC deployed to GOERLI
    address constant HOOK_ADDRESS =
        address(0x020A5bE4a8BCbd885fEC6122e3beE4e8F3Baaaa2); // address of the hook contract deployed to goerli -- you can use this hook address or deploy your own!

    // slippage tolerance to allow for unlimited price impact
    uint160 public constant MIN_PRICE_LIMIT = TickMath.MIN_SQRT_RATIO + 1;
    uint160 public constant MAX_PRICE_LIMIT = TickMath.MAX_SQRT_RATIO - 1;

    function run() external {
        address token0 = uint160(MUSDC_ADDRESS) < uint160(MUNI_ADDRESS)
            ? MUSDC_ADDRESS
            : MUNI_ADDRESS;
        address token1 = uint160(MUSDC_ADDRESS) < uint160(MUNI_ADDRESS)
            ? MUNI_ADDRESS
            : MUSDC_ADDRESS;
        uint24 swapFee = 4000;
        int24 tickSpacing = 10;

        // Using a hooked pool
        PoolKey memory pool = PoolKey({
            currency0: Currency.wrap(token0),
            currency1: Currency.wrap(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(HOOK_ADDRESS)
        });

        // approve tokens to the swap router
        vm.broadcast();
        IERC20(token0).approve(address(swapRouter), type(uint256).max);
        vm.broadcast();
        IERC20(token1).approve(address(swapRouter), type(uint256).max);

        int256 amountSpecified = 5e18; // negative number indicates exact input swap!

        // ---------------------------- //
        // Swap amountSpecified token0 into token1 //
        // ---------------------------- //
        bool zeroForOne = true;
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amountSpecified,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT // unlimited impact
        });

        // in v4, users have the option to receieve native ERC20s or wrapped ERC1155 tokens
        // here, we'll take the ERC20s
        PoolSwapTest.TestSettings memory testSettings = PoolSwapTest
            .TestSettings({
                withdrawTokens: true,
                settleUsingTransfer: true,
                currencyAlreadySent: false
            });

        // from msg.sender initialize a swap
        uint256 blockNumber = block.number + 5;
        uint256 nonce = 0;
        uint8 trustScore = 93;
        bytes32 _PERMIT_TYPEHASH = keccak256(
            // ideally we would use spender to garantee the spender is the one signing the message
            "Permit(int256 amount,uint256 blockNumber,uint256 nonce,uint8 trustScore)"
        );

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
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(0xabc123, digest);
        require(
            vm.addr(0xabc123) == ecrecover(digest, v, r, s),
            "HookVerifyTest: ecrecover failed"
        );
        bytes memory hookData = abi.encode(
            amountSpecified,
            blockNumber,
            nonce,
            trustScore,
            v,
            r,
            s
        );
        vm.broadcast();
        swapRouter.swap(pool, params, testSettings, hookData);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolModifyLiquidityTest} from "v4-core/src/test/PoolModifyLiquidityTest.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";

contract AddLiquidityScript is Script {
    using CurrencyLibrary for Currency;

    address constant SEPOLIA_POOLMANAGER =
        address(0xd962b16F4ec712D705106674E944B04614F077be); // pool manager deployed to GOERLI
    address constant MUNI_ADDRESS =
        address(0x56ba6046cc51b859DAA4Eb6D445DE99C5b1E4391); // mUNI deployed to GOERLI -- insert your own contract address here
    address constant MUSDC_ADDRESS =
        address(0x06B2B98dB45481dd0878Bb07979Ba0A79b60A49e); // mUSDC deployed to GOERLI -- insert your own contract address here
    address constant HOOK_ADDRESS =
        address(0x020A5bE4a8BCbd885fEC6122e3beE4e8F3Baaaa2); // address of the hook contract deployed to goerli -- you can use this hook address or deploy your own!

    PoolModifyLiquidityTest lpRouter =
        PoolModifyLiquidityTest(
            address(0x5bA874E13D2Cf3161F89D1B1d1732D14226dBF16) // POOL MODIFY LIQUITD BASE SEPOLIA
        );

    function run() external {
        // sort the tokens!
        address token0 = uint160(MUSDC_ADDRESS) < uint160(MUNI_ADDRESS)
            ? MUSDC_ADDRESS
            : MUNI_ADDRESS;
        address token1 = uint160(MUSDC_ADDRESS) < uint160(MUNI_ADDRESS)
            ? MUNI_ADDRESS
            : MUSDC_ADDRESS;
        uint24 swapFee = 4000; // 0.40% fee tier
        int24 tickSpacing = 10;

        PoolKey memory pool = PoolKey({
            currency0: Currency.wrap(token0),
            currency1: Currency.wrap(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(HOOK_ADDRESS)
        });

        // approve tokens to the LP Router
        vm.broadcast();
        IERC20(token0).approve(address(lpRouter), 1000e18);
        vm.broadcast();
        IERC20(token1).approve(address(lpRouter), 1000e18);

        // optionally specify hookData if the hook depends on arbitrary data for liquidity modification
        bytes memory hookData = new bytes(0);

        // logging the pool ID
        PoolId id = PoolIdLibrary.toId(pool);
        bytes32 idBytes = PoolId.unwrap(id);
        console.log("Pool ID Below");
        console.logBytes32(bytes32(idBytes));

        // Provide 10_000e18 worth of liquidity on the range of [-600, 600]
        vm.broadcast();
        lpRouter.modifyLiquidity(
            pool,
            IPoolManager.ModifyLiquidityParams(-600, 600, 10_000e18),
            hookData
        );
    }
}

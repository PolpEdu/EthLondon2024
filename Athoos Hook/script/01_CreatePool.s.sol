// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolManager} from "v4-core/src/PoolManager.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";

contract CreatePoolScript is Script {
    using CurrencyLibrary for Currency;

    //addresses with contracts deployed
    address constant SEPOLIA_POOLMANAGER =
        address(0xd962b16F4ec712D705106674E944B04614F077be); //pool manager deployed to GOERLI
    address constant MUNI_ADDRESS =
        address(0x19544eafF5959f228D2d76dF1570B220121518A8); //mUNI deployed to GOERLI -- insert your own contract address here
    address constant MUSDC_ADDRESS =
        address(0x0844B1EC6ee5E2F575Aa55724057721b9cd30e80); //mUSDC deployed to GOERLI -- insert your own contract address here
    address constant HOOK_ADDRESS =
        address(0x020664b9f354c415a7D01dAa483CF78aFe02F66E); //address of the hook contract deployed to goerli -- you can use this hook address or deploy your own!

    IPoolManager manager = IPoolManager(SEPOLIA_POOLMANAGER);

    function run() external {
        // sort the tokens!
        address token0 = uint160(MUSDC_ADDRESS) < uint160(MUNI_ADDRESS)
            ? MUSDC_ADDRESS
            : MUNI_ADDRESS;
        address token1 = uint160(MUSDC_ADDRESS) < uint160(MUNI_ADDRESS)
            ? MUNI_ADDRESS
            : MUSDC_ADDRESS;
        uint24 swapFee = 4000;
        int24 tickSpacing = 10;

        // floor(sqrt(1) * 2^96)
        uint160 startingPrice = 79228162514264337593543950336;

        bytes memory hookData = abi.encode(block.timestamp);

        PoolKey memory pool = PoolKey({
            currency0: Currency.wrap(token0),
            currency1: Currency.wrap(token1),
            fee: swapFee,
            tickSpacing: tickSpacing,
            hooks: IHooks(HOOK_ADDRESS)
        });

        // Turn the Pool into an ID so you can use it for modifying positions, swapping, etc.
        PoolId id = PoolIdLibrary.toId(pool);
        bytes32 idBytes = PoolId.unwrap(id);

        console.log("Pool ID Below");
        console.logBytes32(bytes32(idBytes));

        vm.broadcast();
        manager.initialize(pool, startingPrice, hookData);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {PoolManager} from "v4-core/src/PoolManager.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolModifyLiquidityTest} from "v4-core/src/test/PoolModifyLiquidityTest.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";
import {PoolDonateTest} from "v4-core/src/test/PoolDonateTest.sol";
import {HookVerify} from "../src/HookVerify.sol";
import {HookMiner} from "../test/utils/HookMiner.sol";
import "forge-std/console.sol";

contract HookVerifyScript is Script {
    address constant CREATE2_DEPLOYER =
        address(0x1Dd764Cf61c8e56Ea048374FEcE83fFa40616569); // sepolia create2 deployer
    address constant SEPOLIA_POOLMANAGER =
        address(0x64255ed21366DB43d89736EE48928b890A84E2Cb);

    function setUp() public {}

    function run() public {
        // hook contracts must have specific flags encoded in the address
        uint160 flags = uint160(Hooks.BEFORE_SWAP_FLAG);

        // Mine a salt that will produce a hook address with the correct flags
        (address hookAddress, bytes32 salt) = HookMiner.find(
            CREATE2_DEPLOYER,
            flags,
            type(HookVerify).creationCode,
            abi.encode(address(SEPOLIA_POOLMANAGER))
        );
        console.log("HookVerify address: ", address(hookAddress));

        // Deploy the hook using CREATE2
        vm.broadcast();
        HookVerify hookverify = new HookVerify{salt: salt}(
            IPoolManager(address(SEPOLIA_POOLMANAGER))
        );
        require(
            address(hookverify) == hookAddress,
            "HookVerifyScript: hook address mismatch"
        );
    }
}

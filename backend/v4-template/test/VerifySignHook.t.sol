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
import {VerifySignHook} from "../src/VerifySignHook.sol";

contract VerifySignHookTest is Test, Deployers {
    VerifySignHook counter;
    PoolId poolId;

    address constant signer =
        address(0x5B38Da6a701c568545dCfcB03FcB875f56beddC4);

    // cb test lol
    address constant owner =
        address(0xE65FB27FB655F854AfC66fA9fBF64f0299499A9F);

    function setUp() public {
        counter = new VerifySignHook(IPoolManager(address(0)), signer, owner);
    }
}

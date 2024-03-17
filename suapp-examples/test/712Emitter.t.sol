// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "suave-std/Test.sol";
import "../src/712Emitter.sol";

contract EmitterTest is Test, SuaveEnabled {
    Emitter emitter;
    address internal owner;

    event NFTEEApproval(bytes signedMessage);

    function testExternalCall() public {
        Emitter emitter = new Emitter();
        //emitter.checkTrust(msg.sender);
    }

    function testOwnerInitialization() public {
                owner = address(this); // Setting the test contract as the owner for testing
        emitter = new Emitter();
        assertEq(emitter.owner(), owner, "Owner should be initialized correctly");
    }

    function testSetPrivateKey() public {
                owner = address(this); // Setting the test contract as the owner for testing
        emitter = new Emitter();
        // Mock DataId and set private key
        bytes16 dataIDValue = bytes16(0x1234567890abcdef1234567890abcdef); // Ensure it's 16 bytes
        Suave.DataId dataID = Suave.DataId.wrap(dataIDValue);
        emitter.setPrivateKey(dataID);

        // Assertion to check if private key was set
        // Note: Requires getter for privateKeyDataID or event validation
        bytes16 expectedDataIDBytes = Suave.DataId.unwrap(dataID);
        bytes16 actualDataIDBytes = emitter.getPrivateKeyDataIDBytes();
        assertEq(actualDataIDBytes, expectedDataIDBytes, "Private key DataID should match");


    }
}
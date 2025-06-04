// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PartyVault {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function greet() public pure returns (string memory) {
        return "Welcome to the PartyVault!";
    }
}

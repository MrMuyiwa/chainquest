// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract XPToken is ERC20 {
    address public partyVault;

    constructor(address _partyVault) ERC20("ChainQuest XP", "CQXP") {
        partyVault = _partyVault;
    }

    function mintXP(address to, uint256 amount) external {
        // TODO: restrict access so only PartyVault contract can call this
        _mint(to, amount);
    }
}

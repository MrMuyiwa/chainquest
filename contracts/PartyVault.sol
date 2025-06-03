// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PartyVault {
    // Mapping: guildName -> collateralBalance
    mapping(bytes32 => uint256) public collateral;

    event Deposited(bytes32 indexed guild, address indexed user, uint256 amount);
    event Staked(bytes32 indexed guild, address indexed user, uint256 amount);

    function depositCollateral(bytes32 guildName) external payable {
        // TODO: implement actual collateral tracking
        collateral[guildName] += msg.value;
        emit Deposited(guildName, msg.sender, msg.value);
    }

    function stakeForRaid(bytes32 guildName, uint256 amount) external {
        // TODO: implement staking logic
        emit Staked(guildName, msg.sender, amount);
    }

    function distributeRewards(bytes32 guildName, address[] memory participants, uint256 xpPerUser) external {
        // TODO: implement reward distribution (mint XP tokens to participants)
    }

    function withdrawCollateral(bytes32 guildName) external {
        // TODO: implement collateral withdrawal
    }
}

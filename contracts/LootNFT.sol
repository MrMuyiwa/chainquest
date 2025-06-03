// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract LootNFT is ERC721 {
    uint256 public nextTokenId;
    address public partyVault;

    constructor(address _partyVault) ERC721("ChainQuest Loot", "CQL") {
        partyVault = _partyVault;
    }

    function mintLoot(address to, string calldata metadataURI) external {
        // TODO: restrict access so only PartyVault contract can call this
        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, tokenId);
        // TODO: set token URI to metadataURI (e.g., using ERC721URIStorage if needed)
    }
}

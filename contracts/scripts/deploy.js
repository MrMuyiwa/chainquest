require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
  console.log("Deploying PartyVault...");
  const PartyVault = await ethers.getContractFactory("PartyVault");
  const dummy = ethers.constants.AddressZero;
  const partyVault = await PartyVault.deploy(dummy, dummy);
  await partyVault.deployed();
  console.log("PartyVault deployed to:", partyVault.address);

  console.log("Deploying LootNFT...");
  const LootNFT = await ethers.getContractFactory("LootNFT");
  const lootNFT = await LootNFT.deploy(partyVault.address);
  await lootNFT.deployed();
  console.log("LootNFT deployed to:", lootNFT.address);

  console.log("Deploying XPToken...");
  const XPToken = await ethers.getContractFactory("XPToken");
  const xpToken = await XPToken.deploy(partyVault.address);
  await xpToken.deployed();
  console.log("XPToken deployed to:", xpToken.address);

  console.log("Updating PartyVault with LootNFT and XPToken addresses...");
  await partyVault.setLootAndXP(lootNFT.address, xpToken.address);
  console.log("PartyVault updated.");

  console.log("All contracts deployed and connected.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

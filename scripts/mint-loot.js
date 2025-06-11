const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractAddress = "0x85D503b46b4fAe979AB965f66674c78e2887666C";
  const tokenURI = "https://raw.githubusercontent.com/MrMuyiwa/chainquest/main/metadata/loot_1.json";

  const LootNFT = await ethers.getContractAt("LootNFT", contractAddress);

  const tx = await LootNFT.safeMint(deployer.address, tokenURI);
  await tx.wait();

  console.log(`✅ Minted LootNFT to ${deployer.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

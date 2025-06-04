const fs = require("fs");
const path = require("path");

const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  // Deploy PartyVault
  const PartyVault = await ethers.getContractFactory("PartyVault");
  const partyVault = await PartyVault.deploy();
  await partyVault.deployed();
  console.log("PartyVault deployed to:", partyVault.address);

  // Deploy LootNFT
  const LootNFT = await ethers.getContractFactory("LootNFT");
  const lootNFT = await LootNFT.deploy(partyVault.address);
  await lootNFT.deployed();
  console.log("LootNFT deployed to:", lootNFT.address);

  // Save deployed addresses to a JSON file
  const deployments = {
    network: "baseTestnet",
    deployer: deployer.address,
    partyVault: partyVault.address,
    lootNFT: lootNFT.address,
  };

  const filePath = path.join(__dirname, "../deployed.json");
  fs.writeFileSync(filePath, JSON.stringify(deployments, null, 2));
  console.log(`\n✅ Deployment addresses saved to deployed.json`);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

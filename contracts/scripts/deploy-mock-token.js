const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying MockERC20 with:", deployer.address);

  const initialSupply = hre.ethers.utils.parseEther("1000000"); // 1 million tokens
  const MockERC20 = await hre.ethers.getContractFactory("MockERC20");
  const mock = await MockERC20.deploy(initialSupply);

  await mock.deployed();
  console.log("MockERC20 deployed to:", mock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

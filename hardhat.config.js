require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    baseTestnet: {
      url: process.env.BASE_TESTNET_RPC_URL,
      chainId: 84532,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
    },
  },
};

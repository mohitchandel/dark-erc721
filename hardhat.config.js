require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
      accounts: [``],
    },
  },
  etherscan: {
    apiKey: process.env.NEXT_PUBLIC_POLYGON_API_KEY,
  },
  solidity: "0.8.17",
};

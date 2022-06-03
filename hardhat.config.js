/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("./scripts/deploy.js");
require("./scripts/mint.js");

const { ALCHEMY_KEY, PROD_ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
    mainnet: {
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${PROD_ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`],
    },
  },
};

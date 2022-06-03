const { ethers } = require("ethers");
const { getContractAt } = require("@nomiclabs/hardhat-ethers/internal/helpers");

// Helper method for fetching environment variables from .env
function getEnvVariable(key, defaultValue) {
  if (process.env[key]) {
    return process.env[key];
  }
  if (!defaultValue) {
    throw `${key} is not defined and no default value was provided`;
  }
  return defaultValue;
}

// Helper method for fetching a connection provider to the Ethereum network
function getProvider() {
  const network = getEnvVariable("NETWORK", "rinkeby");
  let alchemyKey;
  debugger;
  if (network == "mainnet") {
    alchemyKey = getEnvVariable("PROD_ALCHEMY_KEY");
  } else {
    alchemyKey = getEnvVariable("ALCHEMY_KEY");
  }

  console.log(`Network is: ${network}`);

  return ethers.getDefaultProvider(network, {
    alchemy: alchemyKey,
  });
}

// Helper method for fetching a wallet account using an environment variable for the PK
function getAccount() {
  return new ethers.Wallet(
    getEnvVariable("ACCOUNT_PRIVATE_KEY"),
    getProvider()
  );
}

function getContract(contractName, hre) {
  const account = getAccount();
  return getContractAt(
    hre,
    contractName,
    getEnvVariable("NFT_CONTRACT_ADDRESS"),
    account
  );
}

module.exports = {
  getEnvVariable,
  getProvider,
  getAccount,
  getContract,
};

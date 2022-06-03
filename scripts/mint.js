const { task } = require("hardhat/config");
const { getContract, getEnvVariable } = require("./helpers");
const fetch = require("node-fetch");

task("mint", "Mints 100 Bits from the Bit contract").setAction(async function (
  _,
  hre
) {
  const contract = await getContract("Bit", hre);
  for (let i = 1; i <= 100; i++) {
    const transactionResponse = await contract.mintTo(
      getEnvVariable("NFT_CONTRACT_ADDRESS"),
      {
        gasLimit: 500_000,
      }
    );
    console.log(`Transaction Hash ${i}: ${transactionResponse.hash}`);
  }
});

task("token-uri", "Fetches the token metadata for the contract").setAction(
  async function (_, hre) {
    const contract = await getContract("Bit", hre);
    const response = await contract.tokenURI(
      getEnvVariable("NFT_CONTRACT_ADDRESS"),
      {
        gasLimit: 500_000,
      }
    );

    const metadata_url = response;
    console.log(`Metadata URL: ${metadata_url}`);
  }
);

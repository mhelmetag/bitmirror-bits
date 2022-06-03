const { task } = require("hardhat/config");
const { getAccount } = require("./helpers");

task("check-balance", "Prints out the balance of your account").setAction(
  async function (_, _) {
    const account = getAccount();
    console.log(
      `Account balance for ${account.address}: ${await account.getBalance()}`
    );
  }
);

task("deploy", "Deploys the Bit.sol contract").setAction(async function (
  _,
  hre
) {
  const nftContractFactory = await hre.ethers.getContractFactory(
    "Bit",
    getAccount()
  );
  const nft = await nftContractFactory.deploy({
    gasLimit: 500_000,
  });
  console.log(`Contract deployed to address: ${nft.address}`);
});

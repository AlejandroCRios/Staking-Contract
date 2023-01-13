const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  //const Token0 = await ethers.getContractFactory("Token0");
  const HachiStaker = await ethers.getContractFactory("HachiStaker");
  const LoyaltyToken = await ethers.getContractFactory("LOYALTY");

  //const token0 = await Token0.deploy();
  const hachiStaker = await HachiStaker.deploy(
    "0x2a7e415C169cE3a580c6F374Dc26f6Aaad1EccFe",
    ethers.BigNumber.from("100000000000000000000")
  );
  const loyaltyToken = await LoyaltyToken.deploy(hachiStaker.address);

  await hachiStaker.deployed();
  await loyaltyToken.deployed();

  console.log("hachiStaker launched at:", hachiStaker.address);
  console.log("loyaltyToken launched at:", loyaltyToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { ethers } from "hardhat";

async function main() {
  // Fetch the contract factory
  const OasysStorageFactory = await ethers.getContractFactory("OasysStorage");

  // Deploy the contract
  const oasysStorage = await OasysStorageFactory.deploy();
  await oasysStorage.deployed();

  console.log("OasysStorage deployed to:", oasysStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const OasysStorageFactory = await ethers.getContractFactory("OasysStorage");
  const oasysStorage = await OasysStorageFactory.deploy();

  console.log("OasysStorage contract deployed to:", oasysStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error occurred:", error);
    process.exit(1);
  });

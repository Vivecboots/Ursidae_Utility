async function main() {
  const network = await ethers.provider.getNetwork();
  console.log(`Deploying to network: ${network.name} (${network.chainId})`);

  const OasysStorageFactory = await ethers.getContractFactory("contracts/OasysStorage.sol:OasysStorage");
  console.log("OasysStorageFactory fetched:", !!OasysStorageFactory);

  try {
    const oasysStorage = await OasysStorageFactory.deploy();
    console.log("Contract deployed:", !!oasysStorage);

    if (oasysStorage) {
      console.log("oasysStorage object:", JSON.stringify(oasysStorage, null, 2));

      const transaction = oasysStorage.deployTransaction;
      if (transaction) {
        console.log("Waiting for transaction:", transaction.hash);
        await transaction.wait();
        console.log("Deployment transaction:", transaction.hash);
      } else {
        console.log("Deployment transaction is undefined");
      }
      
      const address = oasysStorage.address;
      if (address) {
        console.log("OasysStorage deployed to:", address);
      } else {
        console.log("Deployment address is undefined");
      }
    }
  } catch (error) {
    console.log("Deployment failed with error:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

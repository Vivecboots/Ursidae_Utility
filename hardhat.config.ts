

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@oasisprotocol/sapphire-hardhat";
import * as dotenv from 'dotenv';




dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
    throw new Error("PRIVATE_KEY is not defined in the .env file.");
}

const web3StorageApiKey = process.env.WEB3_STORAGE_API_KEY; // Note: This isn't used in the config, but we might be using it.

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sapphire: {
      url: "https://testnet.sapphire.oasis.dev",
      chainId: 0x5aff,
      accounts: [privateKey],
    },
  },
  
};

export default config;

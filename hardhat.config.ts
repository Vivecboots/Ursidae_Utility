import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@oasisprotocol/sapphire-hardhat";
import * as dotenv from 'dotenv';

dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
    throw new Error("PRIVATE_KEY is not defined in the .env file.");
}

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    sapphire: {
      url: "https://serene-lamport:action-many-fifth-unclip-prune-recall@nd-532-226-757.p2pify.com/0c53a993c16e93635a2807cf8e866b78", // Replace YOUR_PASSWORD_HERE
      chainId: 0x5aff,
      accounts: [privateKey],
    },
  },
};

export default config;
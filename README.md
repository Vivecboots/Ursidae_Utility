# Ursidae-Utility🐻

![Ursidae-Utility Logo](https://cdn.discordapp.com/attachments/1058636802111570023/1149851541784768694/journeyman143_A_logo_of_a_bear_wearing_heaphones_and_smoking_pi_a3130727-8f3d-4de2-8348-425213358026.png)


# Private Web3 Storage with (EVM) Sapphire Oasis Paratime Chain 🌐🔗
This project provides a secure and efficient way to upload files to IPFS using Web3.Storage, while also integrating with the Sapphire Oasis EVM Chain for enhanced functionalities and increased security. By way of a contract with hidden-states, the project provides for more complex functionality that can be used for dapps and defi, amongst other things.  

## Features 🌟

- Secure File Upload: Upload files to IPFS securely via Web3.Storage.
- File Encryption: Files are encrypted based on the user's Ethereum address and a server-side secret.
- File Retrieval: Retrieve files from IPFS and decrypt them to access the original content.
- Sapphire Oasis Integration: Leverage the Sapphire Oasis EVM Chain for added features.
-User Authentication: Authenticate users and sign messages using RainbowKit.
-Privacy with Traceability: Pseudo-anonymous IDs ensure user privacy and are further obfuscated by storing them in confedential contracts.  However, according to Oasis, there is a backdoor to verify content on some level. In the future we will include pseudo-files and pseudo-address injections on-chain for enhanced security.  




Privacy with Traceability: Pseudo-anonymous IDs ensure user privacy, but with cryptographic traceability for law enforcement via Oasis' zk-SNARKs protocol.
## Run Locally

Clone the project

```bash
git clone https://github.com/Vivecboots/Ursidae_Utility
cd Ursidae_Utility
```

Install dependencies

```bash
npm install
```

Environment Variables:

Create a .env.local file in the root directory and set up your environment variables. (I will soon be removing NEXT_PUBLIC_, still under construction... )  NEXT_PUBLIC_SECRET_KEY= [Can be anything you choose]


```bash
NEXT_PUBLIC_WEB3_STORAGE_API_KEY=your_web3_storage_api_key
NEXT_PUBLIC_SECRET_KEY=your_secret_key_for_encryption
NEXT_PUBLIC_OASYS_CONTRACT_ADDRESS=your_contract_address
NEXT_PUBLIC_OASYS_CONTRACT_ABI=your_contract_abi
NEXT_PUBLIC_YOUR_RPC_URL=your_rpc_url
NEXT_PUBLIC_YOUR_PRIVATE_KEY=your_private_key

```

Start the server

```bash
npm run dev
```


## Usage/Examples

- Connect Wallet:
Click on the Connect button to connect your Ethereum wallet.

- Upload File:
-Select a file using the file input.

-Click on the Upload Content button to securely upload the file to IPFS.

-  Retrieve File:
-Input the CID of the file you want to retrieve.

-Click on the Retrieve Content button to fetch and decrypt the file.

- Sign Message:
Click on the Sign message button to sign a custom message using your Ethereum wallet (for testing purposes).

## Testnet

- RPC HTTP endpoint: 
```http
https://testnet.sapphire.oasis.dev
```
- RPC WebSockets endpoint: 
```http
wss://testnet.sapphire.oasis.dev/ws
```
- Chain ID:

  ```http
   Hex: 0x5aff
   ```

  ```http
   Decimal: 23295
   ```

- Block explorer: 
```http
https://testnet.explorer.sapphire.oasis.dev
```

## API Documentation:

#### Upload Endpoint

```http
/api/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `file` | `All` | **Required**. authorization/sign msg |

#### Retrieve Endpoint

```http
/api/retrieve
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. File's CID |

Feature not yet supported. Files can be retrieved directly from web3.storage or with API call. Sign up for web3.storage and provide API key in .env file.  Additional functionality to be added soon which will allow the product to serve dapps exclusively in the backend.  


## Contributing

Contributions are always welcome!

If you'd like to contribute to this project, please create a pull request with your proposed changes.

## Todo:  
- Socks5 integration/ tor for the host website integration
- pseudo pseudo-address and document stuffing
- Deployment to Akash or Fleek.xyz when it arrives to decentralize




## License

[MIT](https://choosealicense.com/licenses/mit/)


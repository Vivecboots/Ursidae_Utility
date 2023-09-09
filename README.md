
![Logo](https://cdn.discordapp.com/attachments/1058636802111570023/1149850967001546942/journeyman143_A_logo_of_a_bear_wearing_heaphones_and_smoking_7b673a54-7ce9-437d-9c49-a4b15a4e5742.png)


# Private Web3 Storage with (EVM) Sapphire Oasis Paratime Chain 🌐🔗
This project provides a secure and efficient way to upload files to IPFS using Web3.Storage, while also integrating with the Sapphire Oasis EVM Chain for enhanced functionalities.

## Features 🌟

- Secure File Upload: Upload files to IPFS securely via Web3.Storage.
- File Encryption: Files are encrypted based on the user's Ethereum address and a server-side secret.
- File Retrieval: Retrieve files from IPFS and decrypt them to access the original content.
- Sapphire Oasis Integration: Leverage the Sapphire Oasis EVM Chain for added features.
-User Authentication: Authenticate users and sign messages using RainbowKit.
-Privacy with Traceability: Pseudo-anonymous IDs ensure user privacy and are further obfuscate the author.  However, according to Oasis, there is a backdoor to verify content on some level.  




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

Create a .env.local file in the root directory and set up your environment variables. (I will soon be removing NEXT_PUBLIC_, still under construction... )


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
Click on the Sign message button to sign a custom message using your Ethereum wallet.



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


Additional functionality to be added soon which will allow the product to serve dapps exclusively in the backend.  


## Contributing

Contributions are always welcome!

If you'd like to contribute to this project, please create a pull request with your proposed changes.




## License

[MIT](https://choosealicense.com/licenses/mit/)


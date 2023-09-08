// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract OasysStorage {
    // Mapping from user's Ethereum address to CID
    mapping(address => string) private userCIDs;

    // Mapping from CID to decryption key
    mapping(string => string) private decryptionKeys;

    // Store the CID and decryption key
    function storeCID(string memory cid, string memory key) external {
        require(bytes(userCIDs[msg.sender]).length == 0, "CID already stored for this address");
        userCIDs[msg.sender] = cid;
        decryptionKeys[cid] = key;
    }

    // Retrieve the CID for a user
    function getCID(address user) external view returns (string memory) {
        return userCIDs[user];
    }

    // Retrieve the decryption key for a CID
    function getDecryptionKey(string memory cid) external view returns (string memory) {
        require(keccak256(abi.encodePacked(userCIDs[msg.sender])) == keccak256(abi.encodePacked(cid)), "Not authorized");
        return decryptionKeys[cid];
    }
}

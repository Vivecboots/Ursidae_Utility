// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract OasysStorage {
    mapping(address => string[]) private userCIDs;
    mapping(string => string) private decryptionKeys;
    mapping(address => mapping(string => bool)) private hasStoredCID;

    event CIDStored(address indexed user, string cid);

    // Store a new CID and its decryption key
    function storeCID(string memory cid, string memory key) external {
        require(!hasStoredCID[msg.sender][cid], "CID already stored for this address");

        userCIDs[msg.sender].push(cid);
        decryptionKeys[cid] = key;
        hasStoredCID[msg.sender][cid] = true;

        emit CIDStored(msg.sender, cid);
    }

    // Get all CIDs stored by an address
    function getCIDs(address user) external view returns (string[] memory) {
        return userCIDs[user];
    }

    // Get the decryption key for a CID
    function getDecryptionKey(string memory cid) external view returns (string memory) {
        require(hasStoredCID[msg.sender][cid], "Not authorized or CID not found");
        return decryptionKeys[cid];
    }
}

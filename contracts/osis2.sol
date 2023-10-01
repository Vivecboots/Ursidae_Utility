// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract OasysStorage {
    // Mapping from user's Ethereum address to an array of CIDs
    mapping(address => string[]) private userCIDs;

    // Mapping from CID to decryption key
    mapping(string => string) private decryptionKeys;

    // Store the CID and decryption key
    function storeCID(string memory cid, string memory key) external {
        // Check if the CID is already stored for this address
        for (uint i = 0; i < userCIDs[msg.sender].length; i++) {
            require(keccak256(abi.encodePacked(userCIDs[msg.sender][i])) != keccak256(abi.encodePacked(cid)), "CID already stored for this address");
        }

        userCIDs[msg.sender].push(cid);
        decryptionKeys[cid] = key;
    }

    // Retrieve all CIDs for a user
    function getCIDs(address user) external view returns (string[] memory) {
        return userCIDs[user];
    }

    // Retrieve the decryption key for a CID
    function getDecryptionKey(string memory cid) external view returns (string memory) {
        require(hasCID(msg.sender, cid), "Not authorized or CID not found");
        return decryptionKeys[cid];
    }

    // Helper function to check if a user has a specific CID
    function hasCID(address user, string memory cid) internal view returns (bool) {
        for (uint i = 0; i < userCIDs[user].length; i++) {
            if (keccak256(abi.encodePacked(userCIDs[user][i])) == keccak256(abi.encodePacked(cid))) {
                return true;
            }
        }
        return false;
    }
}

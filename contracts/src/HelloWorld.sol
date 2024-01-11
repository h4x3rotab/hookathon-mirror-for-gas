// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IHelloWorld} from "./IHelloWorld.sol";

contract HelloWorld is IHelloWorld {
    address[] public sponsored;

    event NewSponsored(address actor, address receiver);

    function claim(address actor, address target, bytes calldata attestation) external {
        // TODO: check attestation (actor has mirrored the post)
        for (uint i = 0; i < sponsored.length; i++) {
            if (sponsored[i] == target) {
                revert("already claimed");
            }
        }
        sponsored.push(target);
        emit NewSponsored(actor, target);
    }

    function getAllowList() public view returns (address[] memory) {
        return sponsored;
    }
}
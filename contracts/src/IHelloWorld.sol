// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

interface IHelloWorld {
    function claim(address actor, address target, bytes calldata attestation) external;
}
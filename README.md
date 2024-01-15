# Lens Open Action: Proof-of-Shilling for sponsored gas

Onboarding new people to Web3 is hard. Users will need to learn the crypto wallets, buy gas token from exchanges, and bridge to a L2 to pay the gas fee, until they can really try a dapp.

On the other hand, new technoligies are created to offer users a seamless UX:

- Account Abstraction: allow users to create a wallet with their social account (e.g. Google)
- Web3 Social: platforms like Lens can allow users to interact without paying gas

This project aims to provide users an easy way to get onbard a dapp by combining AA and Web3 Social:

- The dapp developer can post some ads on Lens
- An user can claim a free AA account with gas sponsored, if the user liked or mirrored the dapp developer's ads post
- The user can start to use the dapp for free

In this way, users get free access to the dapp, and the dapp developer can reach out to more users with the help of the social media for free. It creates a win-win situation.

## Walkthrough

<a href="https://www.loom.com/share/70a466469ecf4d498ae1e409796afd5f?sid=f517025a-9b4b-489b-a7a6-69ecc696ac2a">![](https://cdn.loom.com/sessions/thumbnails/70a466469ecf4d498ae1e409796afd5f-with-play.gif)</a>

## Architecture


## Deploy

The project is tested on Mumbai testnet. So we assume the deployment will be on Mumbai. You will need a bunch of service API. Read through the full deployment process to learn the requirements before starting.

### 1. Deploy Open Actions

You should copy `contracts/.env.example` to `contracts/.env`, and fill in the env variables accordingly. Required info:

- a Polygonscan API key
- a deployer private key with Mumbai testnet token
- a Mumbai RPC address

```
cd contracts
forge build
forge script script/HelloWorld.s.sol:HelloWorldScript --fork-url <your-munbai-rpc> --broadcast --verify
```

The script will output the deployed contract addresses of `HelloWorld` and `HelloWorldOpenAction`. Save it for the next step.

### 2. Start the Frontend

You should copy `frontend/.env.example` to `frontend/.env` and fill in the env variables accordingly. Required info:

- Alchemy API key for Munbai
- WalletConnect project ID (get one for free on WalletConnect)

Next, open `frontend/src/utils/constants.tsx`, and change the variables listed below:

- `helloWorldContractAddress`: The address you got from the last step
- `openActionContractAddress`: The address you got from the last step
- `helloWorldContractStartBlock` and `openActionContractStartBlock`: The block number when your contracts are deployed.

Finally run:

```
cd frontend
yarn
yarn dev
```

You will get a frontend running now. Please hold on and follow the instructions on the AA project: <https://github.com/h4x3rotab/lens-gasless-nft-minter-v2>.


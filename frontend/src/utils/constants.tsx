export const network: string = "mumbai"; // options: 'polygon', 'mumbai'

// mode flag sets whether to fetch smart post instances from Lens API or querying directly from contract events
// Mumbai open actions are always indexed on the Lens API, Polygon actions need to be allowlisted on the API (though they are permisionless on-chain)
// To request allowlist for Polygon actions, you can submit a PR to https://github.com/lens-protocol/open-actions-directory
export const mode: string = "events"; // options: 'api', 'events'
export const ipfsGateway = "https://ipfs.io/ipfs/";
export const arweaveGateway = "https://arweave.net/";

interface UiConfig {
  helloWorldContractAddress: `0x${string}`;
  helloWorldContractStartBlock: number;
  openActionContractAddress: `0x${string}`;
  openActionContractStartBlock: number;
  lensHubProxyAddress: `0x${string}`;
  collectActionContractAddress: `0x${string}`;
  simpleCollectModuleContractAddress: `0x${string}`;
  blockExplorerLink: string;
  rpc: string;
  contentApi: string;
}

const common = {
  contentApi: import.meta.env.VITE_CONTENT_API
};

export const uiConfig: UiConfig =
  network === "polygon"
    ? {
        helloWorldContractAddress: "0xCAE0AD610762F917E249E26a64ac06bcDE926d9c",
        helloWorldContractStartBlock: 50547287,
        openActionContractAddress: "0x7c4fAeef5ba47a437DFBaB57C016c1E706F56fcf",
        openActionContractStartBlock: 50547287,
        lensHubProxyAddress: "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d",
        collectActionContractAddress:
          "0x0D90C58cBe787CD70B5Effe94Ce58185D72143fB",
        simpleCollectModuleContractAddress:
          "0x060f5448ae8aCF0Bc06D040400c6A89F45b488bb",
        blockExplorerLink: "https://polygonscan.com/tx/",
        rpc: `https://polygon-mainnet.g.alchemy.com/v2/${
          import.meta.env.VITE_ALCHEMY_POLYGON_API_KEY
        }`,
        ...common,
      }
    : {
        helloWorldContractAddress: "0x481ce1a6EEC3016d1E61725B1527D73Df1c393a5",
        helloWorldContractStartBlock: 44608113,
        openActionContractAddress: "0xFa28d88Fab1980F8811440576AD292F708D9d189",
        openActionContractStartBlock: 44608113,
        lensHubProxyAddress: "0x4fbffF20302F3326B20052ab9C217C44F6480900",
        collectActionContractAddress:
          "0x4FdAae7fC16Ef41eAE8d8f6578d575C9d64722f2",
        simpleCollectModuleContractAddress:
          "0x345Cc3A3F9127DE2C69819C2E07bB748dE6E45ee",
        blockExplorerLink: "https://mumbai.polygonscan.com/tx/",
        rpc: `https://polygon-mumbai.g.alchemy.com/v2/${
          import.meta.env.VITE_ALCHEMY_MUMBAI_API_KEY
        }`,
        ...common,
      };

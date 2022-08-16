# NFT on layer 2 - JS SDK Integration

```jsx
Notes: To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://faucet.paradigm.xyz/ to get more credit to test
```

### Install

```bash
$ yarn add @reddio.com/js
```

### Init SDK

```tsx
const initReddio = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return new Reddio({
    provider,
		// get from dashboard
		apiKey: 'xxxxxxxxx'
    // The development environment uses `test`, the production environment uses `main`
    env: 'test',
  });
};
```
Note: 

*Get the API key from dashboard page, to get access the dashboard, please let us know, we will send you the invitation link*

![Dashboard](/dashboard-quickstart.png)

## Quickstart - Mint on layer 2

<p align="center">
  <img src="/layer2-nft-jsminting.png" alt="layer2 NFT minting" width="300"/>
</p>

1. Create ERC721 smart contract on layer 1 

Create ERC721 smart contract on layer 1 with Reddio's API. Once created, please keep the smart contract address, we will use it as tokenAddress.

```
curl -v https://api-dev.reddio.com/v1/token/deploy -H 'content-type: application/json' -H 'X-API-Key:rk-d3b3c4cb-e721-4a8d-be47-3d231b32260f5' -d '{"name":"REDDIO","Symbol":"REDDIO721", "type":"ERC721M", "base_uri":"https://us-central1-bayc-metadata.cloudfunctions.net/api/tokens"}'
```

2. Create a project on dashbaord and register the smart contract with the project

3. Connect wallet & generate starkKey

```jsx
const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', [])
}

const generateKey = async () => {
  return await reddio.keypair.generateFromEthSignature('Sign');
};
```

4. Mint ERC721 token contract on layer 2 in backend

```
curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -H 'X-API-Key: rk-d3b3c4cb-e721-4a8d-be47-3d231b32260f5'  -d '{ "contract_address":"0x113536494406bc039586c1ad9b8f51af664d6ef8", "stark_key":"0x7334761a2653784492249ebd08c85d7c5784d35c039124a36bda8bb59952983", "amount":"10"}'
```

## Quickstart - Deposit the ERC721 token to starkex

1. Connect wallet & Generate starkKey

```jsx
const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', [])
}

const generateKey = async () => {
  return await reddio.keypair.generateFromEthSignature('Sign');
};
```

2. Approve token get Permissions

```tsx
const approve = async () => {
  await reddio.erc721.approve({
    tokenAddress: "your layer 1 tokenAddress",
	  tokenId: "The NFT token id owned by the user",
  });
};
```

3. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ERC721',
  tokenAddress: "your layer 1 tokenAddress",
  tokenId: "The NFT token id owned by the user",
});
```

4. Get the Vault ID

```jsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```

5. Deposit NFT 

```tsx
await reddio.apis.depositERC721({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  tokenId,
});
```

6. Get balance

```tsx
const { data } = await reddio.apis.getBalances({
  starkKey,
});
```

## Quickstart - Transfer NFTs between two layer 2 accounts

To transfer NFTs between two layer 2 accounts, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ERC721',
  tokenAddress: "your layer 1 tokenAddress",
  tokenId: "The NFT token id owned by the user",
});
```

2. Get the Vault ID

```jsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```

3. Transfer NFT from one layer 2 account to another

```jsx
const { data: res } = await reddio.apis.transfer({
  // Originator's starkKey and privateKey
  starkKey,
  privateKey,
  // from step1
  assetId,
  // from step2
  vaultId: data.data.vault_ids[0],
  // recipient starkKey
  receiver: transferAddress,
  // from step2
  receiverVaultId: data.data.vault_ids[1],
});
```

## Quickstart - Withdraw NFTs from layer 2 to layer 1

To withdraw NFTs from layer 2 to layer 1, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ERC721',
  tokenAddress: "your layer 1 tokenAddress",
  tokenId: "The NFT token id owned by the user",
});
```

2. Get the Vault ID

```jsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```

3. Funds Move to the Withdrawal Area

```jsx
const { data: res } = await reddio.apis.withdrawalFromL2({
  // small with transfer
  starkKey,
  privateKey,
  assetId,
  vaultId: data.data.vault_ids[0],
  receiver: transferAddress,
  receiverVaultId: data.data.vault_ids[1],
  // your layer 1 tokenAddress
  contractAddress,
	tokenId: "The NFT token id owned by the user",
});
```

4. On-Chain Withdrawal Transaction

```tsx
await reddio.apis.withdrawalFromL1({
  starkKey,
  assetType,
  type: 'ERC721'
  tokenId
})
```
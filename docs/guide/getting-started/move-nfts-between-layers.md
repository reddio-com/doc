# Move NFTs Between Layers

::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://goerlifaucet.com/ to get more credit to test
:::

::: tip
You can access our sample code of JS SDK integration here, https://github.com/reddio-com/red-js-sdk
:::

## Install

```sh
$ yarn add @reddio.com/js
```

## Init SDK

```tsx
const initReddio = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return new Reddio({
    provider,
		// get from dashboard
		apiKey: '{your_api_key}'
    // The development environment uses `test`, the production environment uses `main`
    env: 'test',
  });
};
```
::: tip
Get the API key from dashboard page; To get access the dashboard, please leave your email by joining the waitlist at www.reddio.com, we will send you the invitation link
:::

![Dashboard](/dashboard-quickstart.png)
## From layer 1 to layer 2 (deposit)

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

## From layer 2 to layer 2 (transfer)

To transfer NFTs between two layer 2 accounts, there are few parameters needed, here’s the quick start on how to retrieve them and do the transfer.

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
## From layer 2 to layer 1 (withdraw)

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






# Transfer ETHs Between Layer 1 and Layer 2
::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://goerlifaucet.com/ to get more credit to test
:::
::: tip
You can access our sample code of JS SDK integration here, https://github.com/reddio-com/red-js-sdk
:::
## Init SDK

[Click here](/guide/jssdk-reference/initiate-sdk) to check how to initiate the SDK.

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

2. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ETH',
});
```

3. Get the Vault ID

```jsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```

4. Deposit ETH 

```tsx
await reddio.apis.depositETH({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  quantizedAmount: "deposit amount",
});
```

5. Get balance

```tsx
const { data } = await reddio.apis.getBalances({
  starkKey,
});
```

## From layer 2 to layer 2 (transfer)

To transfer ETH between two layer 2 accounts, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer.

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ETH',
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

3. Transfer ERC20 from one layer 2 account to another

```jsx
const { data: res } = await reddio.apis.transfer({
  // Originator's starkKey and privateKey
  starkKey,
  privateKey,
  // from step1
  assetId,
	amount: "transfer amount",
  // from step2
  vaultId: data.data.vault_ids[0],
  // recipient starkKey
  receiver: transferAddress,
  // from step2
  receiverVaultId: data.data.vault_ids[1],
});
```

## From layer 2 to layer 1 (withdraw)

To withdraw ETH from layer 2 to layer 1, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer.

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ETH',
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
	amount: "withdrawal amount",
  vaultId: data.data.vault_ids[0],
  receiver: transferAddress,
  receiverVaultId: data.data.vault_ids[1],
  // your layer 1 tokenAddress
  contractAddress,
});
```

4. On-Chain Withdrawal Transaction

```tsx
await reddio.apis.withdrawalFromL1({
  starkKey,
  assetType,
  type: 'ETH'
})
```
# ERC20 on layer 2 - JS SDK Integration

::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://goerlifaucet.com/ to get more credit to test
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
		apiKey: 'xxxxxxxxx'
    // The development environment uses `test`, the production environment uses `main`
    env: 'test',
  });
};
```
::: tip
Get the API key from dashboard page; To get access the dashboard, please leave your email by joining the waitlist at www.reddio.com, we will send you the invitation link
:::
![Dashboard](/dashboard-quickstart.png)

## Deposit the ERC20 token to starkex

1. Connect wallet & Generate starkKey

```jsx
const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', [])
}

const generateKey = async () => {
  return await reddio.keypair.generateFromEthSignature();
};
```

2. Approve token get Permissions

```tsx
const approve = async () => {
  await reddio.erc20.approve({
    tokenAddress: "your layer 1 tokenAddress",
	  amount: "approve amount",
  });
};
```

3. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ERC20',
  tokenAddress: "your layer 1 tokenAddress",
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

5. Deposit ERC20 

```tsx
await reddio.apis.depositERC20({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  quantizedAmount: "deposit amount",
});
```

6. Get balance

```tsx
const { data } = await reddio.apis.getBalances({
  starkKey,
});
```

## Transfer ERC20 between two layer 2 accounts

To transfer ERC20 between two layer 2 accounts, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer.

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ERC20',
  tokenAddress: "your layer 1 tokenAddress",
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

## Withdraw ERC20 from layer 2 to layer 1

To withdraw ERC20 from layer 2 to layer 1, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer.

1. Get the Asset ID

```jsx
const { assetId } = await reddio.utils.getAssetTypeAndId({
  type: 'ERC20',
  tokenAddress: "your layer 1 tokenAddress",
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
  type: 'ERC20'
})
```
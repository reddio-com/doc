# NFT on layer 2 - Javascript SDK Integration

::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://faucet.paradigm.xyz/ to get more credit to test
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

## Mint on layer 2

<p align="center">
  <img src="/layer2-nft-jsminting.png" alt="layer2 NFT minting" width="400"/>
</p>

1. Create ERC721 smart contract on layer 1 

Create ERC721 smart contract on layer 1 with Reddio's API. Once created, please keep the smart contract address, we will use it as tokenAddress. It's needed, so that you will have the choice to depoist to layer 2 and withdraw back to layer 1.

```sh
$ curl -v https://api-dev.reddio.com/v1/token/deploy -H 'content-type: application/json' -H 'X-API-Key:{your_api_key}}' -d '{"name":"REDDIO","Symbol":"REDDIO721", "type":"ERC721M", "base_uri":"https://us-central1-bayc-metadata.cloudfunctions.net/api/tokens"}'
```
You shall be able to view your smart contract on layer 1 with the following API,
view at `https://goerli.etherscan.io/address/{your_smart_contract_address}`.

2. Edit the project on dashbaord, add in your smart contract address returned from step 1 to register the smart contract with the project
![Dashboard](/contract-registration.png)

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

```sh
$ curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -H 'X-API-Key: {your_api_key}'  -d '{ "contract_address":"{smart_contract_address}}", "stark_key":"{your_starkkey}}", "amount":"10"}'
```
You can query the balance with the following API,
view at `https://api-dev.reddio.com/v1/balances?stark_key={your_starkkey}}&page=1&limit=100`.

And query collections with this API, view at `https://api-dev.reddio.com/v1/contracts/{smart_contract_address}}/tokens`.

## Transfer NFTs between two layer 2 accounts

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

## Withdraw NFTs from layer 2 to layer 1

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

## Deposit the ERC721 token to layer 2/Starkex

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
## Orderbook on layer 2

1. Place a sell order on layer 2

```jsx
 const sell = async () => {
    if (starkTokenId === -1) {
      alert('choose starkex tokenId');
      return;
    }
    const params = await reddio.utils.getOrderParams({
      keypair: {
        privateKey,
        publicKey: starkKey,
      },
      amount: '1',
      tokenAddress: contractAddress,
      tokenId: starkTokenId,
      orderType: 'sell',
      tokenType: 'ERC721',
      price: sellPrice,
    });
    const { data } = await reddio.apis.order(params);
    setSellSequenceId(data.data.sequence_id);
  };
  ```
2. Place a buy order on layer 2
```jsx
const buy = async () => {
    if (starkTokenId === -1) {
      alert('choose starkex tokenId');
      return;
    }
    const params = await reddio.utils.getOrderParams({
      keypair: {
        privateKey:
          '{Your_privatekey}',
        publicKey:
          '{Your_publicKey}}',
      },
      amount: '1',
      tokenAddress: contractAddress,
      tokenId: starkTokenId,
      orderType: 'buy',
      tokenType: 'ERC721',
      price: sellPrice,
    });
    const { data } = await reddio.apis.order(params);
    setSellSequenceId(data.data.sequence_id);
  };
  ```


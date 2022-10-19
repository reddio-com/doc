# NFT on layer 2 -  Backend Integration

::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://faucet.paradigm.xyz/ to get more credit to test.
:::

## Mint on layer 2
<p align="center">
  <img src="/layer2nft-apiminting.png" alt="layer2 NFT minting" width="300"/>
</p>

1. Generate starkKey

From security perspective, we highly recommend you generate your key from your front end. Here’s the sample to generate the starkKey by using our JS SDK

::: tip
We currently only provide JS SDK for your integration, and plan to roll out Android/iOS/Unity soon
:::

```jsx
// Generate starkKey
const gen = async () => {
  const res = await reddio.keypair.generateFromEthSignature('Sign');
  window.publicKey = res.publicKey;
  window.privateKey = res.privateKey;
  return res;
};
```

2. Create ERC721 smart contract on layer 1

Once created, please keep the smart contract address.

3. Mint ERC721 token on layer 2

contract_address is smart contract address you created on layer 1; You can pass the starkkey from JS SDK to your backend via your own API call.

```sh
$ curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -H 'X-API-Key: rk-d3b3c4cb-e721-4a8d-be47-3d231b32260f5' -d '{ "contract_address":"0xd66362e8ff8d5def8c8ead34faa74c038745ccea", "stark_key":"0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b", "amount":"10"}'
```

Note: 

*Get the API key from dashboard page, to get access the dashboard, please let us know, we will send you the invitation link*

![Dashboard](/dashboard-quickstart.png)

4. Retrieve ERC721 from layer 2

```sh
$ curl -v  'https://api-dev.reddio.com/v1/record?stark_key=0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b&sequence_id=45740'
```

## Transfer NFTs between two layer 2 accounts

To transfer NFTs between two layer 2 accounts, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer

1. Get the Asset ID

```sh
$ curl -v 'https://api-dev.reddio.com/v1/assetid?type=ERC721&address=0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b&token_id=45740'
```

2. Get the Vault ID

```sh
$ curl -v 'https://api-dev.reddio.com/v1/vaults?asset_id=0x11c8735b2a892353bb7993136f1eb8fab91054ed740887d9ceddbf6d01d8eae&stark_key=0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b'
```

3. Generate signature for signing the transfer transaction

Due to security reason, we recommend you generate the signature from your backend by calling the [python script](https://github.com/reddio-com/red-py-sdk) every time before you are doing the transfer transaction

4. Transfer NFT from one layer 2 account to another

```sh
$ curl -v  https://api-dev.reddio.com/v1/transfer  -H 'content-type: application/json' -H 'X-API-Key: rk-d3b3c4cb-e721-4a8d-be47-3d231b32260f5' -d '{ "asset_id":"0x4240e8b8c0b6E6464a13F555F6395BbfE1c4bdf1", "stark_key":"0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b", "amount":1, "nonce":100, "vault_id":1000, "receiver": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "receiver_vault_id":10,"expiration_timestamp":4194303, "signature":{"r":"0xab","s":"0xbb"}}'
```

## Withdraw NFTs from layer 2 to layer 1

To withdraw NFTs from layer 2 to layer 1, there are few parameters needed, here’s the quick start on how to retrieve them and doing the transfer

1. Get the Asset ID

```sh
$ curl -v 'https://api-dev.reddio.com/v1/assetid?type=ERC721&address=0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b&token_id=45740'
```

2. Get the Vault ID

```sh
$ curl -v 'https://api-dev.reddio.com/v1/vaults?asset_id=0x11c8735b2a892353bb7993136f1eb8fab91054ed740887d9ceddbf6d01d8eae&stark_key=0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b'
```

3. Withdraw NFT from layer 2 to layer 1

```sh
$ curl -v  https://api-dev.reddio.com/v1/withdrawal  -H 'content-type: application/json' -H 'X-API-Key: rk-d3b3c4cb-e721-4a8d-be47-3d231b32260f5' -d '{ "contract_address":"0xd66362e8ff8d5def8c8ead34faa74c038745ccea", "token_id":"1", "stark_key":"0x177b4535ccc939f31cc23e8edf0b40436277905272fd53bd5c5a3a26286944b", "amount":10}'
```

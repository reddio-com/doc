# Mint NFTs On Layer 2

::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://goerlifaucet.com/ to get more credit to test
:::

::: tip
You can access our sample code of JS SDK integration here, https://github.com/reddio-com/red-js-sdk
:::

## Init SDK

[Click here](/guide/jssdk-reference/initiate-sdk) to check how to initiate the SDK.

## Create ERC721 smart contract on layer 1

<p align="center">
  <img src="/layer2-nft-jsminting.png" alt="layer2 NFT minting" width="400"/>
</p>


You can create ERC721 smart contract on layer 1 with Reddio's API at [https://deploy-contract.reddio.com/](https://deploy-contract.reddio.com/). Once the contract was created, please keep the smart contract address, we will use it as tokenAddress.

 <video controls>
  <source src="/deploy-erc721m.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

You shall be able to view your smart contract on layer 1 with the following API, if you are deploying to Görli Network, you can view your contract at `https://goerli.etherscan.io/address/{your_smart_contract_address}` , if you are deploying to mainnet, you can view your contract at `https://etherscan.io/address/{your_smart_contract_address}`

## Edit the project on dashboard

Add in your smart contract address returned from step 1 to register the smart contract with the project

![Dashboard](/contract-registration.png)

## Connect wallet & generate starkKey

```jsx
const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', [])
}

const generateKey = async () => {
  return await reddio.keypair.generateFromEthSignature();
};
```

If you'd like to quickly generate a stark key-pair for testing without using SDK, we also have an API for this, please consult to [Get stark Wallets](https://docs.reddio.com/guide/api-reference/utils.html#get-stark-wallets), or, in short, take a look at this: [https://api.reddio.com/v1/wallets](https://api.reddio.com/v1/wallets).

## Mint ERC721 token on layer 2 

Mint ERC721 token contract on layer 2 in backend

```sh
$ curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -H 'X-API-Key: {your_api_key}'  -d '{ "contract_address":"{smart_contract_address}", "stark_key":"{your_starkkey}", "amount":"10"}'
```
You can query the balance with the following API,
view at `https://api-dev.reddio.com/v1/balances?stark_key={your_starkkey}&page=1&limit=100`.

And query collections with this API, view at `https://api-dev.reddio.com/v1/contracts/{smart_contract_address}/tokens`.

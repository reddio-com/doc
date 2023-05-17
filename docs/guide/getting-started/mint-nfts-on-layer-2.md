# Mint NFTs On Layer 2

## Introduction

In this guide, let’s mint NFT on Layer 2.  This guide contains the following steps:

1. Install wallet and get your baseURI
2. Deploy an ERC721 mintable smart contract on Dashboard
2. Create and connect your Layer 2 wallet
3. Grab your API key
4. Mint ERC721M tokens on layer 2

## Install wallet and get your baseURI

1. Install [MetaMask](https://metamask.io/) and create a [MetaMask](https://metamask.io/) wallet.

2. Make sure you have enough GoerliETH on the Goerli Testnet because deploying an ERC721M smart contract needs some Goerli ETH as the gas fee. If you don't have enough gas fee, you can [click here](https://discord.gg/wTv3h38pZ3) for help.

3. Get baseURI of your NFT metadata. See [How to Set Up Metadata For Your NFTs](https://docs.reddio.com/guide/getting-started/set-up-metadata-for-your-nfts.html).

## Deploy an ERC721 mintable smart contract on Dashboard

You can easily deploy an ERC721M smart contract on layer 1 by utilizing [Reddio's Dashboard](https://dashboard.reddio.com/). Once you have registered on the dashboard, navigate to the contracts page and click on the "Add Contracts" button. Ensure that you select ERC721 as the Contract Type and switch on the Mintable option. And then, you need to type in all the information about this contract then click "OK":

<p align="center">
  <img src="/new_deploy.png"/>
</p>

Then, your wallet will pop up to prompt you to sign the transaction. Once you have successfully signed all the transactions, your deployment will be completed successfully.After that you will receive the smart contract address directly on the dashboard. To further explore the smart contract details on layer 1, you can refer to the comprehensive [guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1) provided by Reddio, which will guide you through the process of checking the smart contract details on Etherscan.

## Connect wallet and get public key on layer 2

To mint on layer 2, you need to create a wallet on layer 2. Like how a wallet works on layer 1, layer 2 wallet has its own public key and private key, also known as `stark_key` pair: `stark_key` and  `stark_private_key`. You will need the public key or `stark_key` to mint on layer 2.

You can get the `stark_key` and  `stark_private_key` by any one of the following three methods. However, the first two methods are recommended because these two methods will generate a ‘stark_key’ pair based on your MetaMask wallet address. And you can check your NFTs later on [Reddio Demo](https://demos.reddio.com/). However, the third method will generate a random ‘stark_key’ pair which is not based on your MetaMask wallet address, which means you will not be able to see your NFTs on [Reddio Demo](https://demos.reddio.com/) using the third method.

- [Recommended] You can use the Javascript SDK with MetaMask to generate the wallet:
    
    ```jsx
    const connect = async () => {
    	const provider = new ethers.providers.Web3Provider(window.ethereum);
    	await provider.send('eth_requestAccounts', []);
    }
    
    const generateKey = async () => {
    	return await reddio.keypair.generateFromEthSignature();
    };
    ```
    
- [Recommended] You can go to the Reddio demo to retrieve your `stark_key` pairs.
    - 1. Go to [https://demos.reddio.com/](https://demos.reddio.com/) and login in with your MetaMask.
    - 2. Open the developer tools or console on your browser. You will see two lines on your console. The first line is `stark_key`. The second line is `stark_private_key`.
    
<p align="center">
  <img src="/mintNFT3.png"/>
</p>

- You can simply go to [https://api.reddio.com/v1/wallets](https://api.reddio.com/v1/wallets). A random `stark_key` and `stark_private_key` will be provided for you. Details can be found [here](https://docs.reddio.com/guide/api-reference/utils.html#get-stark-wallets).

## Grab your API key

Reddio needs to authorise your identity while minting so you need an API key to mint. To get your API key, simply go to [https://dashboard.reddio.com/](https://dashboard.reddio.com/) and go to **Overview** page. The API key is shown under the 'Overview' title. You can click on the copy button under **API KEY** to copy your API key to the clipboard.

<p align="center">
  <img src="/mintNFT4.png"/>
</p>

## **Mint ERC721M tokens on layer 2**

There are three ways to mint your ERC721M tokens: Dashboard, SDK and API call.

For Dashboard, simply go to **Contracts** page of [https://dashboard.reddio.com/](https://dashboard.reddio.com/). Select the contract you want to
mint NFTs for. Click the **Mint NFTs** button. A window will pop to ask which layer 2 address (StarkKey) you want to receive the NFTs and how many NFTs you want to mint. Input the relevant information and click **OK** button to mint your NFTs.

<p align="center">
  <img src="/mintNFT5.png"/>
</p>

For SDK, please refer to Reddio [SDK](https://docs.reddio.com/guide/jssdk-reference/initiate-sdk.html)s to mint ERC721M tokens.

For API call, the commands to mint ERC721M tokens vary depending on your operating system:

- On Mac/Linux, you can use following command to mint your ERC721M tokens:

```bash
curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -H 'X-API-Key: {your_api_key}'  -d '{ "contract_address":"{smart_contract_address}", "stark_key":"{your_starkkey}", "amount":"10"}'
```

- On Windows, you can use following command to mint your ERC721M tokens:

```bash
curl -v https://api-dev.reddio.com/v1/mints -H "content-type: application/json" -H "X-API-Key: {your_api_key}" -d "{ \"contract_address\":\"{smart_contract_address}\", \"stark_key\":\"{your_starkkey}\", \"amount\":\"10\"}"
```

Carefully replace `{your_api_key}`、`{smart_contract_address}`、`{your_starkkey}` parameters with your own information.

For example, suppose your `contract_address` is `0x4240e8xxxxxxxxxxxxxxxxx1` and your `stark_key` is `0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda`, you can use the following cURL command to send a mint request to the Reddio backend if you are using Mac/Linux:

```bash
curl -v  https://api-dev.reddio.com/v1/mints -H 'content-type: application/json' -d '{ "contract_address":"0x4240e8xxxxxxxxxxxxxxxxx1", "stark_key":"0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda", "amount":"10"}' -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx'
```


Congratulations! You have successfully minted NFTs on layer 2!

## Next steps

- [Check your ERC721M balance and collection on layer 2](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-erc721-erc721m-balance-on-layer-2)
- [Upload files to IPFS](/guide/getting-started/upload-files-to-ipfs)
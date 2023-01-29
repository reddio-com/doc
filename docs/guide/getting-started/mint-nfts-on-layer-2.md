# Mint NFTs On Layer 2

## Introduction

In this tutorial, let’s mint NFT on Layer 2.  This tutorial contains the following steps:

1. Deploy an ERC721M smart contract on layer 1
2. Bind the smart contract with Reddio
3. Create and connect your Layer 2 wallet
4. Grab your API key
5. Mint ERC721M tokens on layer 2

## Deploy an ERC721M smart contract on layer 1

Prerequisites:

1. Install [MetaMask](https://metamask.io/) and create a [MetaMask](https://metamask.io/) wallet.
2. On your Metamask wallet, choose the Goerli test network because we are using the test network for this tutorial:
    
<p align="center">
  <img src="/meta-mask-testnet.png"/>
</p>

3. Make sure you have enough GoerliETH on the Goerli Testnet because deploying an ERC721M smart contract needs some Goerli ETH as the gas fee.

4. The baseURI of your NFT metadata. See [How to Set Up Metadata For Your NFTs](https://docs.reddio.com/guide/getting-started/set-up-metadata-for-your-nfts.html).

**Note:** You can get Goerli ETH on [Goerli Faucet](https://goerlifaucet.com/) where you can request 0.2 Goerli ETH every 24 hours with a [free Alchemy account](https://alchemy.com/?a=goerli_faucet).

You can deploy an ERC721M smart contract on layer 1 using one of the following two ways:

- Use Reddio's smart contract deployment tool at [https://deploy-contract.reddio.com/](https://deploy-contract.reddio.com/) to deploy a smart contract with a single click. 

 <video controls>
  <source src="/deploy-erc721m.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

- Deploy a smart contract using other tools such as [Remix](https://remix-project.org/), [Hardhat](https://hardhat.org/), you can check the ERC721M contract through the [Reddio Contract Demo repo on GitHub](https://github.com/reddio-com/contract_demo/blob/main/src/contracts/ERC721MintFor.sol). If you are using ERC721, implement the [`mintFor`](https://github.com/reddio-com/contract_demo/blob/main/src/contracts/ERC721MintFor.sol) function in this repo.

After the deployment, you will get the smart contract address. Please keep the smart contract address. 

You can check the smart contract detail on Etherscan by following this [tutorial](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1).

## Binding the smart contract with the Reddio platform

Here are the steps to bind the smart contract with the Reddio platform:

- A Reddio account. Register your Reddio account through [https://dashboard.reddio.com/](https://dashboard.reddio.com/)
- A project in the Reddio Dashboard. You can use Project on Reddio to contain several of your smart contracts.
    1. Log in the Reddio dashboard
    2. Click the **Default Project** button and then click **Create Project**. Input a name for the project and click **Create the Project**
    3. Click Edit Project, and the **Edit project** window pops up
<p align="center">
  <img src="/mintNFT2.png"/>
</p>
    
    
- Project Name: the project name of your project. You can change to any name you like.
- Contract Address: the smart contract address you get through deployment. Each project has a unique contract address.
- Contract Type: the type of your smart contract. For this tutorial, please select ERC721M.
- Base URI: the URL of the metadata. This field is displayed if you choose ERC721 or ERC721M.

Click the “Edit the Project” button to save data.

**Result:** you have binded your smart contract with a project on Reddio.

## Connect wallet and get public key on layer 2

To mint on layer 2, you need to create a wallet on layer 2. Like how a wallet works on layer 1, layer 2 wallet has its own public key and private key, also known as `stark_key` pair: `stark_key` and  `stark_private_key`. You will need the public key or `stark_key` to mint on layer 2.

You can get the `stark_key` and  `stark_private_key` by any one of the following three methods. However, the first two methods are recommended because these two methods will generate a ‘stark_key’ pair based on your MetaMask wallet address. And you can check your NFTS later on Reddio Demos. However, the third method will generate a random ‘stark_key’ pair which is not based on your MetaMask wallet address. That means you will not be able to see your NFTs on Reddio Demo using the third method.

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
    
- [Recommended] You can go to the Reddio demo application to see your `stark_key` pairs.
    - 1. Go to [https://demos.reddio.com/](https://demos.reddio.com/) and login in with your MetaMask.
    - 2. Open the developer tools or console on your browser. You will see two lines on your console. The first line is `stark_key`. The second line is `stark_private_key`.
<p align="center">
  <img src="/mintNFT3.png"/>
</p>

- You can simply go to [https://api.reddio.com/v1/wallets](https://api.reddio.com/v1/wallets). A random stark_key and stark_private_key will be provided for you. Details can be found [here](https://docs.reddio.com/guide/api-reference/utils.html#get-stark-wallets).

## Grab your API key

Reddio needs to authorise your identity while minting so you need an API key to mint. To get your API key, simply go to [https://dashboard.reddio.com/](https://dashboard.reddio.com/). The API key is shown on the top right down below the navigation bar. You can click on the API key input form, and the API key will be copied to your clipboard automatically.

<p align="center">
  <img src="/mintNFT4.png"/>
</p>

## **Mint ERC721M tokens on layer 2**

There are two ways to mint your ERC721M tokens: SDK and Curl.

For SDK, see Reddio [SDK](https://docs.reddio.com/guide/jssdk-reference/initiate-sdk.html)s to mint ERC721M tokens.

For Curl, the commands to mint ERC721M tokens vary depending on your operating system:

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

**Result:** Congratulations! You have successfully minted NFTs on layer 2!

## **Check your ERC721M balance and collection on layer 2.**

You can now [check NFTs balance on layer 2](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-eth-erc20-balance-on-layer-2).
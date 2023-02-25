# Mint NFTs On Layer 2

## Introduction

In this guide, let’s mint NFT on Layer 2.  This guide contains the following steps:

1. Deploy an ERC721M smart contract on layer 1
2. Bind the smart contract with Reddio
3. Create and connect your Layer 2 wallet
4. Grab your API key
5. Mint ERC721M tokens on layer 2

## Deploy an ERC721M smart contract on layer 1

Prerequisites:

1. Install [MetaMask](https://metamask.io/) and create a [MetaMask](https://metamask.io/) wallet.
2. On your Metamask wallet, choose the Goerli test network as we are using the test network for this guide:
    
<p align="center">
  <img src="/meta-mask-testnet.png"/>
</p>

3. Make sure you have enough GoerliETH on the Goerli Testnet because deploying an ERC721M smart contract needs some Goerli ETH as the gas fee.

4. The baseURI of your NFT metadata. See [How to Set Up Metadata For Your NFTs](https://docs.reddio.com/guide/getting-started/set-up-metadata-for-your-nfts.html).

**Note:** You can get Goerli ETH on [Reddio Demo](https://demos.reddio.com/account) where you can request 0.1 Goerli ETH by clicking [Get test assets](https://demos.reddio.com/account).

You can deploy an ERC721M smart contract on layer 1 using one of the following two ways:

- Use Reddio's smart contract deployment tool at [https://deploy-contract.reddio.com/](https://deploy-contract.reddio.com/) to deploy a smart contract with a single click. 

 <video controls>
  <source src="/deploy-erc721m.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

- Reuse the ERC721M contract located at [Contract Sample repo](https://github.com/reddio-com/contract_demo/blob/main/src/contracts/ERC721MintFor.sol) to deploy a smart contract using other tools such as [Hardhat](https://hardhat.org/) or [Remix](https://remix-project.org/). If you are using ERC721, please implement the [`mintFor`](https://github.com/reddio-com/contract_demo/blob/main/src/contracts/ERC721MintFor.sol) function in this repo.

After the deployment, you will get the smart contract address. Please keep the smart contract address. 

You can check the smart contract detail on Etherscan by following this [guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1).

## Binding the smart contract with the Reddio platform

Here are the steps to bind the smart contract with the Reddio platform:

- Register your Reddio account at [https://dashboard.reddio.com/](https://dashboard.reddio.com/)
- Create a project in the Reddio Dashboard. You can use project to contain several of your smart contracts.
    1. Log in the Reddio dashboard
    2. Click the drop down button on the top left and then click **Create Project**. Input a name for the project and click **Create Project**
    3. Select the new project you just created by clicking the drop down button on the top left
- Go to **Contracts** page, and click **Add Contracts** button.
<p align="center">
  <img src="/mintNFT2.png"/>
</p>
    
- Contract Type: the type of your smart contract. For this guide, please select ERC721M.
- Contract Address: the smart contract address you get via deployment.
- Base Uri: the URL of the metadata. This field is displayed if you choose ERC721 or ERC721M. For example, suppose you want to show your #1 NFT’s metadata on [https://metadata.reddio.com/api/tokens/1](https://metadata.reddio.com/api/tokens/1) and your #8 NFT’s metadata on [https://metadata.reddio.com/api/tokens/8](https://metadata.reddio.com/api/tokens/8). You need to set up your Base Uri as [https://metadata.reddio.com/api/tokens/](https://metadata.reddio.com/api/tokens/).

By now, you have binded your smart contract with a project on Reddio.

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
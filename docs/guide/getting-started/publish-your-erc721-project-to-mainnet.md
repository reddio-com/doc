# Publish your ERC721 project to Mainnet 

## Introduction

In this guide, we will explore various facets of deploying your ERC721 project on the Ethereum mainnet. Our comprehensive overview will include:

1. Calculating cost of launching an NFT project
2. Steps to publish NFTs to mainnet (Ethereum)
3. How to monetize your project

## Calculating cost of launching an NFT project

The cost of launching an NFT project mainly involves the following aspects:

1. Transaction fees (gas fees) required to deploy the NFT project
2. Gas fees required to mint NFTs
3. Operational gas fees, such as for swapping (swap) and transferring (transfer)

Under the current gas price situation (which is relatively low, around 15gwei), the average cost to mint or sell an NFT is approximately $2.5. During a bull market or when there are popular projects on the blockchain, it can easily reach 100gwei.

<p align="center">
  <img src="/mainnet_gas_fee.png"/>
</p>

For a general 10k pfp (picture-for-profile) project, based on the current lowest gas fees, the entire project's cost can be broken down as:

1. Deployment cost: $50
2. Minting cost: 2.5 * 10,000 USD = $25,000
3. Operational cost (assuming each NFT is swapped on average once): 2.5 * 10,000 USD = $25,000

The minimum cost borne by the project side and users is $50,050 (this cost can grow exponentially during a bull market).

Now, you and your users do not have to pay such high transaction fees. Instead, you can rebate them to the users, and you only need to pay the initial deployment fee ($50), reducing the overall cost by 1000 times. Reddio provides you with a zero gas fee solution.

The following documents will demonstrate step by step how to deploy your ERC721 project to the Ethereum mainnet.

## Steps to publish NFTs to mainnet (Ethereum)

### Install wallet

1. Install [MetaMask](https://metamask.io/) and create a [MetaMask](https://metamask.io/) wallet.

2. Make sure you have enough ETH on Ethereum

### Deploy an ERC721 mintable smart contract on Dashboard

You can easily deploy an ERC721M smart contract on layer 1 by utilizing [Reddio's Dashboard](https://dashboard.reddio.com/). Once you have registered on the dashboard, navigate to the contracts page and click on the "Deploy/Import Contract" button. Select ERC721 (Mintable and Recommended). And then, you need to type in all the information about this contract then click "OK". Remember, you need to select "Ethereum Mainnet" as network:

<p align="center">
  <img src="/deploy_mainnet.png"/>
</p>

Then, your wallet will pop up to prompt you to sign the transaction. Once you have successfully signed all the transactions, your deployment will be processed.

After your deployment process is finished, you will see your new contract name under "Contracts" page:

<p align="center">
  <img src="/deploy_mainnet_NFT.png"/>
</p>

To further explore the smart contract details on layer 1, you can refer to the comprehensive [guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1) provided by Reddio, which will guide you through the process of checking the smart contract details on Etherscan.

### Mint ERC721M tokens on layer 2

To mint on layer 2, you need to click on your contract name to jump to the detail page of your contract.

<p align="center">
  <img src="/new_deploy_mint.png"/>
</p>

Then, click on the "Mint an NFT for free" button to mint your first NFT on layer 2.

<p align="center">
  <img src="/new_deploy_free_mint.png"/>
</p>

After the form pop out, you only need to fill in the name, description, attributes of the NFT. And choose the image you want to upload. Finally, you need to click "Free Mint On Layer 2" button to mint on layer 2. 

<p align="center">
  <img src="/new_deploy_result.png"/>
</p>

After the wait, you will see your NFT under "Metadata" tab. That means You have successfully minted NFTs on layer 2! Congratulations!

## How to monetize your project

Now, the contract has been issued, but issuing a contract is just the first step in the entire process. Next, there are some tips that can assist you in reducing costs for both you and your users, increasing user numbers, and providing some operational assistance. Operational efficiency can be enhanced in the following ways:

- **Airdrop** is an excellent operational tool in web3. You can conduct an airdrop on your website. Since all NFT-related transactions on the Reddio platform are free, you can use multi-dimensional approaches to airdrop to users. For example, users can submit their addresses for a direct airdrop, claim them themselves, or even you can target certain special groups (e.g., users holding a specific type of NFT).
- **User Free Mint.** At this point, you can set some of the minting fees. After users pay the minting fee, they can mint the corresponding NFT. The "free" aspect is reflected in a zero transaction fee.
- **Promote** on websites like Twitter, Discord, Telegram, Airdrop (such as https://questn.com/). Since you have already launched on the mainnet and are part of a promising project, many people will likely come to observe.
- **Engage KOLs** for promotion or giveaways, joint operations, etc.
- **Capitalize on Hot Topics,** ensuring you're ready when a hot topic emerges. For example, layer2 is currently a significant hot topic.
- **Explore Other Methods,** such as DeFi. You might consider staking NFTs and gifting ERC20 tokens or vice versa, and so on.
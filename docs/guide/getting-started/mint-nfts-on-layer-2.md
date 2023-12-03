# Mint NFTs On Layer 2

## Introduction

In this guide, let’s mint NFT on Layer 2.  This guide contains the following steps:

1. Install wallet 
2. Deploy an ERC721 mintable smart contract on Dashboard
3. Mint ERC721M tokens on layer 2

## Install wallet

1. Install [MetaMask](https://metamask.io/) and create a [MetaMask](https://metamask.io/) wallet.

2. Make sure you have enough ETH on the Sepolia Testnet because deploying an ERC721M smart contract needs some Sepolia ETH as the gas fee. If you don't have enough gas fee, you can [click here](https://discord.gg/wTv3h38pZ3) for help.

## Deploy an ERC721 mintable smart contract on Dashboard

You can easily deploy an ERC721M smart contract on layer 1 by utilizing [Reddio's Dashboard](https://dashboard.reddio.com/). Once you have registered on the dashboard, navigate to the contracts page and click on the "Add Contracts" button. Select ERC721 (Mintable and Recommended). And then, you need to type in all the information about this contract then click "OK":

<p align="center">
  <img src="/new_deploy.png"/>
</p>

Then, your wallet will pop up to prompt you to sign the transaction. Once you have successfully signed all the transactions, your deployment will be processed.

After your deployment process is finished, you will see your new contract name under "Contracts" page:

<p align="center">
  <img src="/new_deploy_NFT.png"/>
</p>

To further explore the smart contract details on layer 1, you can refer to the comprehensive [guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1) provided by Reddio, which will guide you through the process of checking the smart contract details on Etherscan.

## Mint ERC721M tokens on layer 2

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

## Next steps

- [Check your ERC721M balance and collection on layer 2](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-erc721-erc721m-balance-on-layer-2)
- [Upload files to IPFS](/guide/getting-started/upload-files-to-ipfs)
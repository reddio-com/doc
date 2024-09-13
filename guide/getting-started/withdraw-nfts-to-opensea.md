# Withdraw NFTs To Opensea From Layer 2

## Introduction

Welcome to this comprehensive guide on withdrawing your NFTs to layer 1, enabling you to trade them on popular marketplaces like OpenSea. By following the step-by-step instructions provided below, you'll gain the knowledge and skills required to successfully complete the process:

1. Deploy an ERC721 mintable contract
2. Mint some NFTs
3. Withdraw NFTs to layer 1

## Deploy an ERC721 mintable contract

You can effortlessly deploy an ERC721M smart contract on layer 1 using [RedSonic's Dashboard](https://dashboard.reddio.com/). To get started, follow these simple steps:

1. Sign up on the RedSonic Dashboard and log in to your account.
2. Go to the contracts page and locate the "Deploy/Import Contracts" button.
3. Click on "Deploy Contracts" and choose ERC721 (Mintable and Recommended) from the options provided.

The only thing you need to do is to fill in the "Contract Name" and "Contract Symbol".

Once you have entered all the necessary information for the contract, click on "OK" to proceed.

<p align="center">
  <img src="/opensea-1.png"/>
</p>

Then, your wallet will pop up to prompt you to sign the transaction. Once you have successfully signed all the transactions, your deployment will be processed.

After your deployment process is finished, you will see your new contract name under "Contracts" page:

<p align="center">
  <img src="/new_deploy_NFT.png"/>
</p>

To further explore the smart contract details on layer 1, you can refer to the comprehensive [guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1) provided by RedSonic, which will guide you through the process of checking the smart contract details on Etherscan.


## Mint some NFTs

Minting NFTs on layer 2 is a simple and cost-free process. To begin, you need to click on your contract name to jump to the detail page of your contract.

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

## Check your NFTs 

Now, you have successfully set up the metadata server. You can see if your NFTs have the right images through [RedSonic's demo](https://demos.reddio.com/). After connecting your wallet with the demo page and go to the account page. You will see a list of tokens and NFTs on layer 2:

<p align="center">
  <img src="/opensea-6.png"/>
</p>

Simply select the NFTs symbol you just created, you will see all NFTs tokens under this contract:

<p align="center">
  <img src="/opensea-7.png"/>
</p>

## Withdraw NFTs to layer 1

Now, you can withdraw your NFTs to layer 1 by clicking the "Withdraw" button on [RedSonic's demo](https://demos.reddio.com/):

<p align="center">
  <img src="/opensea-8.png"/>
</p>

Then, you need to choose the right "Asset Type"、"ETH Address"、 and "Token Id" to proceed:

<p align="center">
  <img src="/opensea-9.png"/>
</p>

After about 4 hour waiting, you can see your NFTs are available for withdrawing to layer 1 on Withdraw Area:

<p align="center">
  <img src="/opensea-10.png"/>
</p>

Now you can withdraw it to layer 1, this process will be done in seconds. After that, you will able to see the NFTs on [Opensea](https://testnets.opensea.io/collection/20230620-opensea-test).

In certain situations, you may prefer to host metadata on your own rather than relying on RedSonic's hosting service. For those instances, we offer a comprehensive guide on how to self-host metadata. You can access the guide by clicking [here](/guide/getting-started/withdraw-nfts-to-opensea-with-self-hosted-metadata).

## Next steps

- [Withdraw NFTs To Opensea From Layer 2 With Self-Hosted Metadata](/guide/getting-started/withdraw-nfts-to-opensea-with-self-hosted-metadata)
- [Check your ERC721M balance and collection on layer 2](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-erc721-erc721m-balance-on-layer-2)
- [Upload files to IPFS](/guide/getting-started/upload-files-to-ipfs)
# Build In-app Marketplace On Layer 2

## Introduction

A marketplace on the blockchain is a decentralized online platform that utilizes blockchain technology to provide secure and transparent transactions between buyers and sellers. With Reddio's in-app marketplace, you can easily set up your marketplace fee and create buy/sell orders for your NFTs/tokens.  In this article, we will tell you how to build NFT marketplace on layer 2 with Reddio step by step:

1. Create a marketplace
2. Set up marketplace info
3. Use Reddio’s functionalities to do more

## Create a marketplace

Creating a marketplace in Reddio is a simple and straightforward process. First, you need to visit the Reddio dashboard at **[https://dashboard.reddio.com/](https://dashboard.reddio.com/)**. Once you have logged in, navigate to the "In-app Marketplace" tab and click on the "Add Marketplace" button.

## Set up marketplace info

After clicking the "Add Marketplace" button, you will see a form pop up:

<p align="center">
  <img src="/marketplaceForm.png"/>
</p>


- **Marketplace Name**: is a customizable name for your marketplace that can reflect your brand, product or service in a clear and memorable way.
- **Marketplace Fee**: is the percentage charged by your marketplace on each sale made by your users. For example, if you set the marketplace fee to 10%, and a user sells an item for $100, you would deduct $10 (10% of $100) as a fee for facilitating the transaction. The remaining $90 would be credited to the seller's account.
- **Marketplace Payee Address**: is the layer 2 address, or StarkKey, where the marketplace fee will be received when a transaction is made on your marketplace. More details about StarkKey can be found [here](https://docs.reddio.com/guide/reference/terminology.html#stark-key).

There’s one thing to notice. The transfer of marketplace fee will be automatically executed since marketplace fees are secured and managed through smart contracts, which are self-executing programs that automatically execute the terms of the contract when certain conditions are met. When a transaction takes place on the marketplace, the smart contract automatically deducts the agreed-upon fee from the transaction and transfers it to the designated account. This process is transparent and secure, as all transactions are recorded on the blockchain and cannot be altered or manipulated.

## Use Reddio’s functionalities to do more

Reddio's marketplace provides functionalities to place buy and sell orders on both NFTs (non-fungible tokens) and tokens. This means that users can either purchase NFTs or tokens that are already listed on the marketplace, or they can place their own buy orders for specific NFTs or tokens they are interested in. There’s one thing to notice that you can place orders with or without marketplace. Please check "next steps" section for your reference.

## Next steps

- [Deposit NFTs to layer 2](https://docs.reddio.com/guide/getting-started/transfer-nfts-between-layer-1-and-layer-2.html#deposit-from-layer-1-to-layer-2)
- [Place buy/sell orders through API](https://api-docs.reddio.com/?_gl=1*6lzw46*_ga*NjE1Mjk3ODMxLjE2NzU5OTgyMjM.*_ga_DZPN2FT3DF*MTY3ODM3NzA5Ny4xNC4xLjE2NzgzNzg4NDEuMC4wLjA.#1683e711-6dbe-4d6d-8690-2bec98d5792c)
- [Place buy/sell orders through javascript SDK](https://docs.reddio.com/guide/jssdk-reference/order.html)
- [Withdraw NFTs to layer 1](https://docs.reddio.com/guide/getting-started/transfer-nfts-between-layer-1-and-layer-2.html#withdraw-from-layer-2-to-layer-1)

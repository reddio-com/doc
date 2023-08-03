# Withdraw NFTs To Layer 1 With Python

## Introduction

Welcome to our comprehensive guide on withdrawing Non-Fungible Tokens (NFTs) to layer 1 using Reddio's API. We will take you through the entire withdrawal process, from start to final API call construction. Let's get started by following steps down below:

1. Learn withdrawal process
2. Prepration
3. Withdraw NFTs from layer 2 to withdrawal area
4. Withdraw NFTs from withdrawal area to layer 1

## Learn withdrawal process

The withdrawal process in Reddio is a sophisticated procedure to move assets from Layer 2 to Layer 1 (Ethereum). It is a crucial step for users who want to gain control over their assets on the main blockchain. Below, you'll find a concise outline of the process, followed by an emphasis on the parts that developers should concentrate on:

1. Initiation
The user initiates the withdrawal process, expressing their intent to transfer funds from Layer 2 to an Ethereum address in Layer 1.
2. Transfer Execution
Here, the application handles the off-chain movement of funds from the user's Stark key vault to another vault associated with the user's Ethereum address. It's the first step in connecting Layer 2 assets with the Ethereum mainnet.
3. Validation and Processing
StarkEx's gateway steps in at this stage to authenticate the transactions and process them as per the request. It's a vital step to ensure that the transactions align with the security and integrity protocols.
4. Batching
Valid withdrawal requests are grouped together and prepared for on-chain submission. This batching process ensures efficiency and cohesion in the handling of multiple transactions.
5. Funds Movement
StarkEx ensures the appropriate movement of the funds to the withdrawal area on the blockchain. It's the transitional phase that bridges the off-chain transactions with the on-chain actions.
6. Final On-Chain Withdrawal
Finally, the user withdraws the funds on-chain to their desired recipient. This step marks the completion of the Layer 2 to Layer 1 asset transfer.

For developers working on integrating withdrawal functionality, the main concentration should be on step 5, the movement of funds to the withdrawal area, and step 6, enabling users to withdraw the funds on-chain. These two steps are the core of the on-chain interactions that require precise execution with our APIs. 

The remainder of this tutorial will detail how to withdraw Non-Fungible Tokens (NFTs) from Layer 2 to the withdrawal area and then to Layer 1, enabling the recipient to receive the NFTs in their desired address. The intricacies of NFT withdrawals demand careful handling, and this guide will provide the insights needed to navigate this process smoothly.

## Prepration

Before getting started, you need to first have your own NFTs on layer 2. Please check [Mint NFTs On Layer 2](/guide/getting-started/mint-nfts-on-layer-2) for more detail. 

During the process, you Please have your stark_key(Public key) and private stark_key(Private key)

## Withdraw NFTs from layer 2 to withdrawal area

Now, you already have your NFTs on layer 2. You first need to withdraw NFTs from layer 2 to withdrawal area.

## Withdraw NFTs from withdrawal area to layer 1




## Next steps

- [Withdraw NFTs To Opensea From Layer 2 With Self-Hosted Metadata](/guide/getting-started/withdraw-nfts-to-opensea-with-self-hosted-metadata)
- [Check your ERC721M balance and collection on layer 2](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-erc721-erc721m-balance-on-layer-2)
- [Upload files to IPFS](/guide/getting-started/upload-files-to-ipfs)
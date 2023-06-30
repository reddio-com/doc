# Overview

## What are the problems with current EThereum network?

The problem of developing applications and games on the Ethereum network:
1. Scalability: Ethereum can only process a limited number of transactions per second, which can lead to network congestion during periods of high activity. This scalability issue can significantly impact the performance of apps and games, particularly those that require frequent transactions.
2. High Transaction Fees (Gas Fees): Every transaction on Ethereum requires a fee, referred to as a "gas fee" to incentivize miners to include the transaction in the blockchain. These fees can become prohibitively high when the network is busy, which can significantly impact the user experience of apps and games that require regular transactions.
3. Complexity of Smart Contract Development: Writing and deploying smart contracts, the backbone of Ethereum apps and games, requires a good understanding of the Solidity programming language and the unique aspects of blockchain technology. Errors in smart contracts can be very costly, as they can't be changed once deployed.
4. Interoperability: Creating applications or games that can interact with other smart contracts or blockchains can be challenging, limiting the possibility of integrating with the wider blockchain ecosystem.
5. Data Storage: Blockchain isn't designed for storing large amounts of data. Developers must find alternative ways to store data off-chain, which can introduce additional complexity and potential points of failure.

## Why Reddio is the solution to these Ethereum network

Reddio, a layer 2 solution on Ethereum for apps/games, aims to tackle certain issues related to scalability and transaction fees in order to enhance the Ethereum network for application and game development.

1. Reddio provides APIs and SDKs to make it easy build on Layer2. Reddio provides Application Programming Interfaces (APIs) and Software Development Kits (SDKs) to simplify the development process for Layer 2 solutions. This means that developers can easily integrate Reddio into their existing applications and games, or build new ones from scratch, without the significant additional overheads of developing their own Layer 2 solutions from the ground up.The APIs and SDKs offered by Reddio make it easier for developers to interact with Layer 2 solutions on the Ethereum network, enabling them to customize and optimize their applications or games in accordance with the specific requirements of their use cases.
2. Build decentralized trading platforms with scalability up to 10k TPS and minimum trading fee. Reddio's Layer 2 solution enables the creation of decentralized trading platforms with impressive scalability and low trading fees. With its advanced zk-stark technology, Reddio can support transaction speeds of up to 10,000 transactions per second (TPS), far exceeding the capacity of the Ethereum network itself. This means that traders can engage in high-frequency trading without having to worry about network congestion or excessive transaction fees.

In addition to fast transaction speeds, Reddio's Layer 2 solution also offers users significantly lower trading fees compared to traditional centralized exchanges. This is possible due to the elimination of intermediary fees that are typically incurred when using traditional exchanges.



## What can we build Using Reddio’s API
There are many applications that can build upon Reddio’s API. here are some examples
1. [SBT](https://academy.binance.com/en/articles/what-are-soulbound-tokens-sbt). By using Reddio's API, customers can mint NFTs, granting them ownership and provable authenticity over their digital assets
2. Game NFTs. Reddio provides API & SDK for Mints/Transfer/Deposit/Withdrawal NFTs. By providing these essential functionalities, Reddio empowers developers and users to seamlessly manage and interact with NFTs using their platform
3. NFT Marketplace. Reddio provides the buy and sell API & SDK to build in app marketplace. Reddio's API and SDK not only facilitate the creation and management of NFTs, but they also extend support for building in-app marketplaces. This means that developers have the ability to integrate Reddio's buy and sell functionalities directly within their applications or platforms.

There are many other scenarios that you can explore, such as payment gateways and others

## Components & Features

Reddio platform consists of SDKs, APIs and Dashboard

![components](/components.png)

### [Dashboard](https://dashboard.reddio.com/login)
On the dashboard, you can get access to API key and integrate from backend to Reddio’s APIs; We are providing the basic APIs usage now and enhancing the dashboard based on you feedback to show more statistics. 
![dashboard quickstart](/dashboard-quickstart.png)
Dashboards provide the following features:
1. Deploy contracts and register contracts to reddio on Layer1(ethernum)
2. Mint NFTs on dashboard
3. Deposit assets to Layer2
4. IPFS Storages
5. Statistics about your contracts

### [SDKs](/guide/jssdk-reference/initiate-sdk)

Javascript, iOS, Android, Unity, Java And Python SDK is provided for your front end cross platform integration,  we highly recommend you integrate from front end to generate private key and allow your users signing from your UI.


### [APIs](/guide/api-reference/api-reference)

Backend APIs are also provided, click [here](https://api-docs.reddio.com/?_gl=1*ic7u6n*_ga*NzgzNDU3NTczLjE2NTA1MDYzMDY.*_ga_DZPN2FT3DF*MTY4ODA0MTc1NC4zNzEuMS4xNjg4MDQxNzU5LjAuMC4w) to see full API docs.




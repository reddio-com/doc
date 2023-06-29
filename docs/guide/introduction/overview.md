# Overview

## What is Reddio?

The problem of developing applications and games on the Ethereum network:
    1. Scalability: Ethereum can only process a limited number of transactions per second, which can lead to network congestion during periods of high activity. This scalability issue can significantly impact the performance of apps and games, particularly those that require frequent transactions.
    2. High Transaction Fees (Gas Fees): Every transaction on Ethereum requires a fee, referred to as a "gas fee," to incentivize miners to include the transaction in the blockchain. These fees can become prohibitively high when the network is busy, which can significantly impact the user experience of apps and games that require regular transactions.
    3. Complexity of Smart Contract Development: Writing and deploying smart contracts, the backbone of Ethereum apps and games, requires a good understanding of the Solidity programming language and the unique aspects of blockchain technology. Errors in smart contracts can be very costly, as they can't be changed once deployed.
    4. Interoperability: Creating applications or games that can interact with other smart contracts or blockchains can be challenging, limiting the possibility of integrating with the wider blockchain ecosystem.
    5. Data Storage: Blockchain isn't designed for storing large amounts of data. Developers must find alternative ways to store data off-chain, which can introduce additional complexity and potential points of failure.

Reddio, a layer 2 solution on Ethereum for apps/games, aims to tackle certain issues related to scalability and transaction fees in order to enhance the Ethereum network for application and game development.

1. Reddio provides APIs and SDKs to make it easy build on Layer2. Reddio provides Application Programming Interfaces (APIs) and Software Development Kits (SDKs) to simplify the development process for Layer 2 solutions. This means that developers can easily integrate Reddio into their existing applications and games, or build new ones from scratch, without the significant additional overheads of developing their own Layer 2 solutions from the ground up.The APIs and SDKs offered by Reddio make it easier for developers to interact with Layer 2 solutions on the Ethereum network, enabling them to customize and optimize their applications or games in accordance with the specific requirements of their use cases.
2. Build decentralized trading platforms with scalability up to 10k TPS and minimum trading fee. Reddio's Layer 2 solution enables the creation of decentralized trading platforms with impressive scalability and low trading fees. With its advanced zk-stark technology, Reddio can support transaction speeds of up to 10,000 transactions per second (TPS), far exceeding the capacity of the Ethereum network itself. This means that traders can engage in high-frequency trading without having to worry about network congestion or excessive transaction fees.

In addition to fast transaction speeds, Reddio's Layer 2 solution also offers users significantly lower trading fees compared to traditional centralized exchanges. This is possible due to the elimination of intermediary fees that are typically incurred when using traditional exchanges.



## Components

Reddio platform consists of SDKs, APIs and Dashboard

![components](/components.png)

## [SDKs](/guide/jssdk-reference/initiate-sdk)

Javascript, iOS, Android, Unity, Java And Python SDK is provided for your front end cross platform integration,  we highly recommend you integrate from front end to generate private key and allow your users signing from your UI.


## [APIs](/guide/api-reference/api-reference)

Backend APIs are also provided, if you are using iOS, Android and Unity SDK, you will need to do the backend integration.

## [Dashboard](https://dashboard.reddio.com/login)

On the dashboard, you can get access to API key and integrate from backend to Reddio’s APIs; We are providing the basic APIs usage now and enhancing the dashboard based on you feedback to show more statistics.

![dashboard quickstart](/dashboard-quickstart.png)




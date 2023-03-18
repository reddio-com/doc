# How Orderbook and Marketplace Work

## Introduction

Orderbooks and marketplaces are essential components of the cryptocurrency industry, providing traders with a decentralized and transparent way to buy and sell digital assets. In this article, we will explore the mechanism behind orderbook and marketplace functionalities provided by Reddio, focusing on Reddio's role in processing orders and ensuring the integrity of the system.

## Reddio's role in orderbook and marketplace

Reddio's services accept and process off-chain orders from users. When an order is executed successfully, Reddio checks whether it belongs to a marketplace or is an independent order. If the order belongs to a marketplace, with a filled-in marketplace UUID, Reddio's services will automatically split the transaction fees into three parts: the marketplace fee, the seller's revenue, and Reddio's commission (0.5%). This action is atomic, ensuring that the fee distribution and order execution succeed or fail together.

If the order is independent, without a filled-in marketplace UUID, Reddio's services will automatically split the transaction fees between the seller's revenue and Reddio's commission (0.5%). This process ensures transparency and fairness for all parties involved in the transaction.

## How Reddio ensures integrity

Although Reddio's orderbook services are centralized, the execution results of the orderbook are not distorted or manipulated. After Reddio completes its operations, it provides the result data to StarkEx, where the validator verifies that the operations are valid and have not been manipulated. In addition, users sign and confirm the entire process, ensuring that the operation is according to the user's intention. This ensures that the orderbook's execution results are safe and secure.

## Conclusion

In conclusion, the mechanism of orderbook/marketplace is a complex system that requires precise processing and execution to ensure transparency and fairness. Reddio's role in processing orders, splitting transaction fees, and ensuring the integrity of the system is critical in enabling traders to participate in a decentralized and transparent exchange. Although Reddio's orderbook services are centralized, the results are verified by a validator and confirmed by the user, ensuring that the system's integrity is maintained. As the cryptocurrency industry continues to evolve, it is essential to understand the underlying mechanics of the technologies that enable it to function.

## Next steps

- [Build In-app Marketplace On Layer 2](/guide/getting-started/build-in-app-marketplace-on-layer-2.html)
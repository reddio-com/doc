# Composition of Sequencers
## Introduction
The sequencer plays a crucial role in Layer 2 (L2), particularly within the ZK Rollup architecture. The core function of a sequencer is to be responsible for ordering transactions, executing them, delegating proof generation to a prover, and then sending the proof and data back to Layer 1 (L1).

![sequencerintro](/sequencer-intro.png)

The sequencer is essentially a blockchain with special functionalities. Beyond the essential components required by traditional blockchains, they also need capabilities for interfacing with ZK provers and for connecting with L1 Data Availability (DA). For ecosystems like EVM compatible Layer 2, compatibility with smart contracts through a EVM is necessary. To implement additional distinctive features, such as customized consensus or transaction packaging methods, more modules are required. Often, these functional modules cannot be accomplished solely through smart contracts.

![framework](/framework.png)

Due to the high cost of developing a new blockchain from scratch, many Rollup sequencers opt to fork the source code of go-ethereum and make various degrees of modifications or encapsulations to reuse the underlying components of go-ethereum as much as possible. However, for Reddio Modular Sequencer SDK, we utilize a blockchain framework to complete this task. The advantage is that it allows for decoupling between some of the blockchain's underlying components and the core functionalities that need to be added to the sequencer. This way, should there be a need to modify or add functionalities, development iterations can be carried out at a lower cost.

Reddio's Modular Sequencer SDK uses the [Yu blockchain framework](https://github.com/yu-org/yu), a highly customizable Layer 2 Native modular blockchain framework that was developed in Golang by the Reddio team. This framework offers developers a Web API-like development experience, making it easier for developers to get started in blockchain development.

Let's take a look at the operational mechanics and processes of a sequencer compatible with EVM contracts from a blockchain perspective:

![architecture](/architecture.png)

## For User

1. Users submit transactions to the sequencer via RPC. Transactions can also be received through broadcasts from other nodes in the P2P network.

2. After receiving a transaction through RPC, the sequencer first conducts a legality check and preprocessing on the transaction, such as:
    - Checking if the signature is valid
    - Verifying whether the transaction data size is too large
    - Ensuring there are no duplicate transactions (to prevent replay attacks)
3. Once the transaction data passes these checks, it is placed into the txpool (transaction pool) and simultaneously broadcast to other nodes in the public network via the P2P network.

## Consensus

1. Through the consensus system, the sequencer periodically generates L2 blocks. It batches a certain number of transactions from the txpool into a block and broadcasts this block to other nodes via the P2P network.
2. Next, the block with packaged transactions is handed over to the EVM. The EVM executes the transactions in the block in sequence and synchronizes their execution state to the state.
3. After execution by the EVM, the returned data such as actualFees and traces, and partial data like the state-root are first constructed and filled into the block. Once the complete block is constructed, it is added to the end of the blockchain for storage.

## For Layer 1

1. Based on the executed block and the state difference (stateDiff), Data Availability(DA) data is constructed and sent to the DA layer.
2. Whenever a new block is executed, it is sent to an external prover. The prover generates a zk-proof and uploads it to Ethereum Layer 1 (ETH L1) for verification.
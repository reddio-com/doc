# Core Components of Yu Framework

Next, let's take a look at the component composition of Yu Framework:

![yucomposition](/yu-composition.png)

The following are interfaces: blockchain, txdb, and txpool, all with built-in default implementations. Developers can reimplement these interfaces if they have special requirements.

- **blockchain**: This is the chain structure responsible for storing block data as well as organizing the chain's structure and fork logic.
- **txdb**: Yu's database, which stores all the specific transaction data from blocks, receipt from transactions after execution, etc.
- **txpool**: The transaction pool, responsible for verifying and caching transactions received from external sources.
- **state**: Stores the state, holding the state after each transaction is executed.
- **tripod**: The fundamental minimum unit for running the blockchain and allowing developers to **customize logic**. Developers can customize multiple tripods, arrange them in sequence, and load them into the land for the framework to call. This is the core of the entire framework.

Within the tripod, the two most crucial functions are writing and reading:

- **writing** is designed for developers to customize and implement freely. It will be subjected to consensus and execution by all nodes in the network. For instance, in Starknet, the four types of transactions - declare, deployAccount, invoke, L1Handle - require customized writing for implementation.
- **reading** is also for developers to freely customize and implement. However, it will not undergo consensus across the network and will only be executed on the local node. For example, in Starknet, the operation of call transactions needs to be implemented through customized reading.

## Underlying Components

- **storage**: This is the storage layer, supporting various forms of storage such as KV, SQL, and FS, all of which are interfaces. Developers can specify the required storage engine (for example, KV currently has pebble and boltdb as storage engines). Currently, the storage within the state is implemented using pebble, while the storage inside the blockchain and txdb is implemented using sqlite.
- **p2p**: This is the peer-to-peer network used for discovering nodes within the network and for the propagation of transactions and blocks.
- **crypto(keypair)**: This is the component for asymmetric encryption algorithms for public and private keys, currently supporting sr25519 and ed25519. This component is in the form of an interface, allowing for the extension of other encryption algorithms.

In summary, Yu has already provided developers with some of the essential components required for a blockchain. Based on this, we only need to implement some modules that are unique to the sequencer.

For a EVM L2 sequencer, it is essential for the sequencer to be able to execute Solidity smart contracts. The execution of Solidity smart contracts require the involvement of EVM and EVM-state. Therefore, we need to integrate the sequencer with EVM and EVM-state. To achieve this, we can use Yu to develop a tripod named ‘EVM’ enabling it to call EVM to execute contracts.

Additionally, we use the Proof of Authority (POA) tripod as the consensus mechanism for our sequencer at this stage. It's important to note that POA is a default implementation provided by Yu, so we don't need to start from scratch, we can simply reference it. However, POA is intended as a transitional measure towards a decentralized network, and we plan to develop a new L2 consensus to replace POA in the future.
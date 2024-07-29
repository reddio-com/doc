# How Does Layer 2 Works

## Details of layer 2

There are three major types of layer 2 scaling solutions, which are [state channels](https://statechannels.org/), [Plasma](http://plasma.io/) and rollups. Here’s a quick comparison on these solutions.

![layer2comparison](/layer2comparison.png)

Based on the [Comparison on Channels, Plasma and Rollups](https://medium.com/coinmonks/easy-to-understand-ethereum-layer-2-scaling-solutions-channels-vs-plasma-vs-rollups-1dc1d4e9cb52), the best option for scaling is rollups. 2 key differences distinguish plasma from rollup.

- While plasma keeps all the transaction data and computation off-chain, rollup keeps some of the data on the Ethereum blockchain. So all Ethereum nodes can verify the transaction on the rollup sidechain not just the participant in the sidechain. The obvious benefits are enhanced security and avoided centralization.
- Rollups are general-purpose, and one can even run an EVM inside a rollup, allowing existing Ethereum applications to migrate to rollups with almost no need to write any new code.

The on-chain transaction data in rollup are highly compressed to include only the necessary data needed for the network to verify the transaction, other data like state storage will stay off-line in the rollup child chain. Smaller data size is what allows rollups to still have good scalability over the layer 1 main net.

There are 2 types of rollups right now.

- Optimistic Rollup, which uses fraud proofs (same as Plasma), as a result, there will also have a longer withdrawal time for optimistic rollup — data in the optimistic rollup batch include compressed rollup tx data, pre-state root hash and post-state root hash
- ZK-Rollup, which uses validity proofs: additionally, every ZK-Rollup batch includes a cryptographic proof called a ZK-SNARK which proves that the post-state root is the correct result of executing the batch. No matter how large the computation, the proof can be very quickly verified on-chain, therefore withdrawal on zk-rollup will be immediate.

## **Volition**

![datamode](/data-mode.png)

With Volition, StarkEx is the first L2 solution that lets your users choose between Rollup mode (on-chain data) and Validium mode (off-chain data) for each and every asset they own.

Your users can now weigh the pros and cons of each data availability mode and switch to a different data availability mode at any given time.

Up to now, each application had to choose one data availability mode — Rollup or Validium.

With Rollup applications, the new state is sent on-chain for every state update. (To be more accurate, in order to reduce gas costs, only the minimal data that is required to reconstruct the full new state is sent on-chain.) Choosing to go with Rollup mode comes with the additional cost of publishing the data on-chain, but the main advantage is greater security because it does not rely on a set of trusted entities.

Validium applications have a Data Availability Committee (DAC), which is responsible for storing the entire state on layer 2. It requires trusting a third party, but the main advantage of Validium is that it saves layer 1 gas costs and has better privacy protection than Rollup mode.

The requirement to choose only one data availability mode per application does not always make sense. Consider, for example, an NFT marketplace. Bob and Alice both use the marketplace. Bob owns an NFT, such as a Crypto Punk, that is worth a few million dollars. Bob is happy to pay for the best possible security he can get so that he can sleep well at night. On the other hand, Alice bought an NFT that is worth only a few cents because she just wants to test the platform. She doesn’t really care about losing the NFT and certainly won’t pay for having the data available on-chain. She would never withdraw this NFT to layer 1 anyway.

Volition offers a solution that lets each user choose which data availability mode they prefer, and pay accordingly. Rollup users pay more in order to cover the gas costs for publishing the data on-chain, while Validium users pay less. At every point in time, each user can change their mind and change the data availability mode.

Volition is implemented on RedSonic as two separate state trees, one for each data availability mode. The application locates each account in the corresponding state tree according to the user’s choice of data availability mode. It is possible to change the data availability mode for a specific account simply by transferring the funds to a new account on the other tree.
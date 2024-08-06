# Parallel Execution

The Ethereum Virtual Machine (EVM) serves as the decentralized virtual environment for executing smart contracts and code on the Ethereum blockchain. However, the standard EVM processes transactions and smart contracts sequentially, which can lead to congestion and increased costs during high transaction volumes. In response, Reddio develops an advanced iteration called the Parallel EVM, leveraging the concepts outlined in the [Block-STM](https://arxiv.org/abs/2203.06871) paper to enhance scalability and performance.

Key Differences Between Standard EVM and Parallel EVM

1. Sequential Processing in Standard EVM:
    - Transactions are processed one after another in a linear sequence.
    - This approach can lead to delays and higher costs as transaction volume increases, similar to having a single checkout counter at a busy store.
2. Parallel Processing in Parallel EVM:
    - Transactions and smart contracts can be processed concurrently, reducing wait times and improving network efficiency.
    - This is akin to having multiple checkout counters, allowing more customers to be served simultaneously.

## How Parallel EVM Works

Parallel EVM allows transactions to be processed independently, provided they are not interdependent. For example, in a decentralized exchange (DEX) scenario, trades can be executed simultaneously, significantly speeding up the process compared to the standard EVM. However, transactions that depend on the outcome of others may still require sequential processing, similar to a scenario where one customer must return an item before another can purchase it.

## Benefits of Parallel EVM

- Enhanced Scalability: By processing transactions and smart contracts more efficiently, Parallel EVM increases the network’s throughput.
- Improved Performance: Reduced latency leads to a smoother and faster user experience.
- Strengthened Security: By mitigating network congestion, Parallel EVM reduces the risk of potential vulnerabilities during high-traffic periods.
- Broader Application Support: The network can handle a wider range of applications and diverse use cases.

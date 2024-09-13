# How Does RedSonic Works

Layer 1 is the base blockchain. Ethereum and Bitcoin are both layer 1 blockchains. Layer 1 has been active in the past years, as we see more blockchains like BNB Smart Chain, Solana and Flow, etc., coming up.

Layer 2 is a collective term to describe a specific set of layer 1 scaling solutions. A layer 2 is a separate blockchain that extends layer 1 and inherits the security guarantees of layer 1. 

Layer 2 solutions are needed, both to immediately improve the congestion on the current layer 1 network, and to set the stage for mass adoption in the post-ETH 2.0 era for ETH and other layer 1 networks.

![Overview](/overview.png)

RedSonic uses a zero-knowledge rollup on layer 2 to take thousands of off-chain transactions in a batch, generate a proof to make sure all the transactions are valid, then publish the proof on layer 1, then verify the proof by a smart contract.

The user’s assets are held on layer 1 in the smart contract during the process, and can only be released after a valid proof.
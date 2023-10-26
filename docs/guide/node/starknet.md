# StarkNet Node

## Introduction

StarkNet is a decentralized Validity-Rollup, commonly referred to as a "ZK-Rollup". It functions as an L2 network on top of Ethereum, allowing any dApp to seamlessly scale its computations while retaining Ethereum's inherent composability and security.

For a limited time, Reddio offers a high-speed connection to the StarkNet Node free of charge with lowest delay. Discover why Reddio claims the fastest connection by [reading more here](https://blog.reddio.com/reddios-starknet-beta-node-launch-access-the-future-today/). 

You can establish a connection via the following endpoint:

```bash
https://starknet-mainnet.reddio.com
```

## Connecting to Reddio's Dedicated Starknet Node

Integrating with Reddio's Starknet node is simple. Use the endpoint given above within your applications or during your development processes. Here’s a Python example to guide you:

To begin, install `starknet_py` using pip:

```bash
pip install starknet_py
```

Once installed, retrieve the latest block with this code:

```python
from starknet_py.net.full_node_client import FullNodeClient

client = FullNodeClient(node_url="https://starknet-mainnet.reddio.com")
block = client.get_block_sync("latest")
print(block.block_number)
```

## Important Notice

As part of its beta launch promotion, Reddio currently offers public access to its Starknet node. However, be aware that in the foreseeable future, Reddio may limit access exclusively to registered users. Stay updated by regularly checking Reddio's [Blog](https://blog.reddio.com/). Alternatively, by creating an account on [Reddio](https://www.reddio.com/), you'll receive notifications regarding any changes to our policy.


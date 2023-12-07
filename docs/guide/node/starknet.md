# StarkNet Node

## Introduction

StarkNet is a decentralized Validity-Rollup, commonly referred to as a "ZK-Rollup". It functions as an L2 network on top of Ethereum, allowing any dApp to seamlessly scale its computations while retaining Ethereum's inherent composability and security.

For a limited time, Reddio offers a high-speed connection to the StarkNet Node free of charge with lowest delay. Discover why Reddio claims the fastest connection by [reading more here](https://blog.reddio.com/reddios-starknet-beta-node-launch-access-the-future-today/). 

## Grab your Reddio account

To gain entry to Reddio's Node, the first step is to create your very own Reddio account. It's a straightforward process—just visit our [dashboard](https://dashboard.reddio.com/)  to sign up.

As an added bonus, for a limited time, you can enjoy unrestricted access to Reddio's Node entirely free of charge. And if you register your account before January 31, 2024, we have a special gift in store for you.

## Connecting to Reddio's Dedicated Starknet Node

Integrating with Reddio's Starknet node is simple. Go to [dashboard](https://dashboard.reddio.com/)'s Nodes page. You will see the endpoint with your api-key that you can access. 

Use the endpoint given on dashboard within your applications or during your development processes:

![node_endpoint](/node_endpoint.png)

### Grab Goerli Testnet Endpoint

You can access to Goerli testnet before you can access to Starknet mainnet. The endpoint for Goerli testnet looks like this:

```bash
https://starknet-goerli.reddio.com/rk-85cfdc4d-683b-4bfa-a16e-xxxxxxxxxxxx
```

### Grab Starknet Mainnet Endpoint

The endpoint for Starknet mainnet looks like this:

```bash
https://starknet-mainnet.reddio.com/rk-85cfdc4d-683b-4bfa-a16e-xxxxxxxxxxxx
```

### Connect to the Node

Here's a Python example to guide you:

To begin, install `starknet_py` using pip:

```bash
pip install starknet_py
```

Once installed, retrieve the latest block with this code:

```python
from starknet_py.net.full_node_client import FullNodeClient

client = FullNodeClient(node_url="https://starknet-mainnet.reddio.com/rk-85cfdc4d-683b-4bfa-a16e-xxxxxxxxxxxx")
block = client.get_block_sync("latest")
print(block.block_number)
```

## Important Notice

As part of its beta launch promotion, Reddio currently offers public access to its Starknet node. However, be aware that in the foreseeable future, Reddio may limit access exclusively to registered users. Stay updated by regularly checking Reddio's [Blog](https://blog.reddio.com/). Alternatively, by creating an account on [Reddio](https://www.reddio.com/), you'll receive notifications regarding any changes to our policy.


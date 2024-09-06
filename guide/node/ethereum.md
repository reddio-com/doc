# Ethereum Node

## Introduction

Ethereum, created in 2015, is a pioneering blockchain platform known for its smart contract capabilities. It enables decentralized applications and digital agreements, with its native cryptocurrency, Ether (ETH), serving as both digital currency and transaction fee payment method.

For a limited time, Reddio offers a high-speed connection to the Ethereum Node free of charge with lowest delay. Discover why Reddio claims the fastest connection by [reading more here](https://blog.reddio.com/reddios-starknet-beta-node-launch-access-the-future-today/). 

## Grab your Reddio account

To gain entry to Reddio's Node, the first step is to create your very own Reddio account. It's a straightforward process—just visit our [dashboard](https://dashboard.reddio.com/)  to sign up.

As an added bonus, for a limited time, you can enjoy unrestricted access to Reddio's Node entirely free of charge. And if you register your account before January 31, 2024, we have a special gift in store for you.

## Connecting to Reddio's Dedicated Ethereum Node

Integrating with Reddio's Ethereum node is simple. Go to [dashboard](https://dashboard.reddio.com/)'s Nodes page. You will see the endpoint with your api-key that you can access. 

Use the endpoint given on dashboard within your applications or during your development processes:

![node_endpoint_eth](/node_endpoint_eth.png)

### Grab Sepolia Testnet Endpoint

You can access to Sepolia testnet before you can access to Ethereum mainnet. The endpoint for Sepolia testnet looks like this:

```bash
https://eth-sepolia.reddio.com/rk-85cfdc4d-683b-4bfa-a16e-xxxxxxxxxxxx
```

### Grab Ethereum Mainnet Endpoint

The endpoint for Ethereum mainnet looks like this:

```bash
https://eth-mainnet.reddio.com/rk-85cfdc4d-683b-4bfa-a16e-xxxxxxxxxxxx
```

### Connect to the Node

Here’s a Python example to guide you:

To begin, install `web3` using pip:

```bash
pip install web3
```

Once installed, retrieve the latest block with this code:

```python
from web3 import Web3, HTTPProvider

w3 = Web3(HTTPProvider('https://eth-mainnet.reddio.com/rk-85cfdc4d-683b-4bfa-a16e-xxxxxxxxxxxx'))
print ("Latest Ethereum block number" , w3.eth.blockNumber)
```

## Important Notice

As part of its beta launch promotion, Reddio currently offers public access to its Ethereum node. However, be aware that in the foreseeable future, Reddio may limit access exclusively to registered users. Stay updated by regularly checking Reddio's [Blog](https://blog.reddio.com/). Alternatively, by creating an account on [Reddio](https://www.reddio.com/), you'll receive notifications regarding any changes to our policy.


# Overview
The Reddios zkVM provides a versatile solution for apps and games, aiming to facilitate scalable solutions. Although Reddios' zkVM is currently in its testing phase, it can be utilized for trial purposes

At its present development stage, Reddios' zkVM offers compatibility with StarkNet's API. Consequently, all contracts deployed on StarkNet can be seamlessly implemented on Reddios' zkVM.


Reddio's zkVM presents a collection of pivotal features:
- Facilitates the deployment of smart contracts tailored to your specific logic.
- Enables integration with pre-established smart contract templates.
- Offers a zero gas expenditure for users.
- Provides options for scaling via a personalized Appchain.
- Upholds security through the Ethereum network.

## General Information
Endpoint: https://starknet-madara.reddio.com 

ChainID: 0x534e5f474f45524c49


## Create An Abstract Account Wallet
At present, we offer an SDK that can be used to create an Argent abstract contract account. Here are the steps for creating an Argent contract account:

1. Generate a private key and a unique salt.
2. Employ the private key, salt, Argent class hash(0x1a736d6ed154502257f02b1ccdf4d9d1089f80811cd6acad48e6b6a9d1f2003), and additional constructor arguments to generate a contract address.
3. Fund the contract address with some ETH. You can obtain some ETH for free by joining Reddio's [Discord](https://discord.com/invite/SjNAJ4qkK3) community.
4. Once the contract address is funded with ETH, proceed to deploy the abstract account.
Upon successfully obtaining your private key and abstract account, you can begin utilizing it.

Here is the relevant [code snippet](https://github.com/reddio-com/starknet-appchain-utils/blob/main/create_account.py#L17) for reference

## Transfer ETH
When you need to transfer ETH to another address, you can refer to this guide for assistance. If you're out of ETH, you can make a request to [Reddio](https://discord.com/invite/SjNAJ4qkK3), and they can provide you with some. Here is also have [code snippet](https://github.com/reddio-com/starknet-appchain-utils/blob/main/transfer_eth.py#L21) to transfer ETH

## Deploy contracts
To deploy your contract, you can employ StarkNet's native developer tools, available at [Starkli GitHub page](https://github.com/xJonathanLEI/starkli). Note that Starkli currently supports Reddio's Appchain too. This guide assumes you already have an Argent account on Reddio's Appchain. To set up Starkli, refer to this [StarkNet documentation](https://docs.starknet.io/documentation/quick_start/set_up_an_account/). 

Consider the following key points:

1. When configuring your Starkli account, always include the `--rpc https://starknet-madara.reddio.com` command in the fetch command.
2. Similarly, when declaring or deploying a contract, add the `--rpc https://starknet-madara.reddio.com` command.

If followed correctly, your contract should be successfully deployed.

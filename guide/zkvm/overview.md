# Overview

The Reddio zkVM Layer 2 provides a versatile solution for apps and games, aiming to facilitate scalable solutions. It is an opensource project by Reddio which name is [itachi](https://github.com/reddio-com/itachi). Reddio's zkVM is currently in its testing phase, and can be utilized for trial purposes.

Reddio's zkVM offers compatibility with StarkNet's APIs. All contracts deployed on StarkNet can be seamlessly implemented on Reddio's zkVM. Reddio's zkVM is currently in its testing phase, and can be utilized for trial purposes.

Reddio's zkVM presents a collection of pivotal features:
- Facilitates the deployment of smart contracts tailored to your specific logic.
- Enables integration with prebuilt smart contract templates.
- Offers much lower cost for users.
- Provides options for scaling via your own Appchain on Layer 2 or Layer 3.
- Retains security via the Ethereum network.

## General Information

Endpoint: https://itachi-dev.reddio.com/

ChainID: 0x534e5f474f45524c49


## Create An Abstract Account Wallet

At present, we offer an SDK that can be used to create an Argent abstract contract account. Here are the steps for creating an Argent contract account:

1. Generate a private key and a unique salt.
2. Employ the private key, salt, Argent class hash(0x1a736d6ed154502257f02b1ccdf4d9d1089f80811cd6acad48e6b6a9d1f2003), and additional constructor arguments to generate a contract address.
3. Fund the contract address with some ETH. You can obtain some ETH for free by joining Reddio's [Discord](https://discord.com/invite/SjNAJ4qkK3) community.
4. Once the contract address is funded with ETH, proceed to deploy the abstract account.
Upon successfully obtaining your private key and abstract account, you can begin utilizing it.

Here is the relevant [code snippet](https://github.com/reddio-com/itachi-testing/blob/master/python/functions.py#L168) for your reference.

## Transfer ETH

When you need to transfer ETH to another address, you can refer to this guide for assistance. If you're running out of ETH, you can make a request to [Reddio](https://discord.com/invite/SjNAJ4qkK3), and we can provide you with enough testnet tokens. Here is the [code snippet](https://github.com/reddio-com/itachi-testing/blob/master/python/functions.py#L81) to transfer ETH.

## Deploy smart contracts

To deploy your contract, you can use reference the python sdk [code snippet](https://github.com/reddio-com/itachi-testing/blob/master/python/functions.py#L231)

## Others

After you deploy contracts, create accounts, and transfer ETH, you can also invoke all the functions just like Starknet mainnet, what you need to do is just replace the RPC.

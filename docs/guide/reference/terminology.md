# Terminology

## StarkEx

StarkEx leverages STARK technology to power scalable, self-custodial trading and payment transactions for applications such as DeFi and gaming. StarkEx enables an application to scale significantly and improve transaction speed while also reducing transaction costs. Implementation requires minimal change to existing setups.

StarkEx currently supports ETH, synthetic assets, and the following tokens:

- ERC-20
- ERC-721
- ERC-1155

StarkEx can also support tokens on other EVM-compatible blockchains.

StarkEx is a mature platform that has been deployed on Ethereum Mainnet since June 2020. Before its Mainnet deployment, over 50M StarkEx transactions were settled on both public and private Ethereum testnets.

## Stark Key

For our integration with StarkEx, users are identified within Reddio by their Stark Key which is a public key defined over a **[Stark-friendly elliptic curve(STARK Curve)](https://docs.starkware.co/starkex/stark-curve.html)** that is different from the standard Ethereum elliptic curve. 

In order to associate your users with Ethereum account addresses, a user must first request to sign the linkage of an Ethereum key to a Stark Key and then register the Stark Key on your smart contract registered via Reddio platform before any other user operation can take place.

### ERC721/NFT

ERC-721 is a free, open standard that describes how to build non-fungible or unique tokens on the Ethereum blockchain. While most tokens are fungible (every token is the same as every other token), ERC-721 tokens are all unique.

### ERC20

The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each token be exactly the same (in type and value) as another token. For example, an ERC-20 token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.
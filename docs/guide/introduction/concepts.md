# Concepts

## ERC721/NFT

ERC-721 is a free, open standard that describes how to build non-fungible or unique tokens on the Ethereum blockchain. While most tokens are fungible (every token is the same as every other token), ERC-721 tokens are all unique.

## ERC20

The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each token be exactly the same (in type and value) as another token. For example, an ERC-20 token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.

## What is Layer 2?

[Layer 2](https://academy.binance.com/en/glossary/layer-2) is a secondary framework built on top of a blockchain network (Layer 1). It improves scalability and performance by processing transactions off-chain or on sidechains, reducing fees and increasing transaction throughput. It enhances blockchain usability and enables faster, cheaper transactions without sacrificing security.

With layer 2, there are quite a few benefits,

- Lower gas fees:By combining multiple off-chain transactions into a single layer 1 transaction, transaction fees are massively reduced

- Mainnet security:Layer 2 blockchains settle their transactions on Mainnet, allowing users to benefit from the security of the layer 1 network.

- Expand use cases:With higher transactions per second, lower fees, and new technology, projects will expand into new applications with improved user experience.

## Type of contracts that reddio provides
1. [ERC20](https://github.com/reddio-com/contract_sample/blob/main/src/contracts/ERC20General.sol). You can create ERC20 tokens on reddio's dashboard, then you can [issue the tokens on layer2](https://docs.reddio.com/guide/getting-started/issue-tokens-on-layer2.html)
2. [ERC721](https://github.com/reddio-com/contract_sample/blob/main/src/contracts/ERC721General.sol). You can deploy ERC721 contract on reddio's dashboard , then you can [deposit & withdraw NFTs between layer 1 and layer 2](https://docs.reddio.com/guide/getting-started/transfer-nfts-between-layer-1-and-layer-2.html)
3. [ERC721M](https://github.com/reddio-com/contract_sample/blob/main/src/contracts/ERC721MintFor.sol). You can deploy ERC721 Mintable contract on reddio's dashboard, then you can [Mint NFTs on layer2](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html)
4. [ERC721MC](https://sepolia.etherscan.io/address/0xb05a5851ee69b58abf3a293c241570868cc4199e#code). You can deploy ERC721 Mintable and recommend contract on reddio's dashboard, then you can [Mint NFTs on layer2](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html) and set your tokenURI when mint NFTs, We recommend you to using the contract to mints NFTs on layer2

## What is NFT metadata?
NFT metadata refers to additional information associated with a non-fungible token (NFT). It includes details such as the title, description, image or video files, creators, and other attributes that provide context and value to the NFT. Metadata plays a crucial role in defining the uniqueness and characteristics of an NFT. It allows creators to add rich media, provenance information, and additional content to enhance the overall experience and understanding of the NFT. Metadata can be stored on-chain or in off-chain decentralized storage, ensuring that the information remains linked to the corresponding NFT and can be accessed by anyone interacting with it.

## StarkEx

StarkEx leverages STARK technology to power scalable, self-custodial trading and payment transactions for applications such as DeFi and gaming. StarkEx enables an application to scale significantly and improve transaction speed while also reducing transaction costs. Implementation requires minimal change to existing setups.

StarkEx currently supports ETH, synthetic assets, and the following tokens:

- ERC-20
- ERC-721
- ERC-1155

StarkEx can also support tokens on other EVM-compatible blockchains.

StarkEx is a mature platform that has been deployed on Ethereum Mainnet since June 2020. Before its Mainnet deployment, over 50M StarkEx transactions were settled on both public and private Ethereum testnets.

## What is StarkKey on reddio's API?
For our integration with StarkEx, users are identified within Reddio by their Stark Key which is a public key defined over a **[Stark-friendly elliptic curve(STARK Curve)](https://docs.starkware.co/starkex/stark-curve.html)** that is different from the standard Ethereum elliptic curve.

In order to associate your users with Ethereum account addresses, a user must first request to sign the linkage of an Ethereum key to a Stark Key and then register the Stark Key on your smart contract registered via Reddio platform before any other user operation can take place.
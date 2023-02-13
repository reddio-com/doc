# FAQ

## What is the limit of orders for a single wallet? 
Currently, we do not have any limit of orders that you can place. 

## What is the meaning of minimum trading volume should be greater than 1000? 
That means the order price needs to bigger than 0.001 token. 

## Which rollup mechanism is currently used for interaction between layer2 and layer1? What is the timeliness?
Reddio supports two sidechain schemes to validium(the default option) and zkRollup for interaction between layer 2 and layer 1. The major difference between a validium and a zk-rollup is data availability: validium stores data off-chain, while ZkRollup stores data on-chain.
The timeliness of the two schemes is roughly the same. 
- The execution time for operations on layer 2 is around 300ms.
- Submitting confirmation proof from layer 2 to layer 1 generally takes4-8 hours on testnet and 8-16 hours on mainnet.
For more information about zkRollup, see [how does layer 2 works](https://docs.reddio.com/guide/reference/how-does-layer-2-works.html).

## How long does it take to make a deposit on layer 2? How can to if the operation is successful?
The time required for a deposit on layer 2 can vary depending on the implementation and network conditions. In general, to prevent [chain reorganisation (or “reorg”)](https://learnmeabitcoin.com/technical/chain-reorganisation), most exchanges set a confirmation requirement of 12 to 30 blocks. Currently, Reddio sets a confirmation requirement of 15 blocks. The time required is approximately 150-200 seconds.
To check if a deposit on layer 2 has been successfully processed, you can check the operation status by querying the [balance API](https://docs.reddio.com/guide/api-reference/balance.html) or [record API](https://docs.reddio.com/guide/api-reference/record.html).

## How long does it take for the proof of a layer 2 operation to be published on the blockchain?
It typically takes 4-8 hours on testnet and 8-16 hours on mainnet for the proof of every layer 2 operation to be recorded on the main blockchain (layer 1). This is because the proof must be carefully verified and processed by the nodes on the main blockchain to ensure the security and integrity of the data, and this process can take a significant amount of time, depending on the number of transactions and the complexity of the proof. However, users only need to be concerned with this time frame when initiating a withdraw on layer 1 because the status of layer 2 operations is returned in real-time.

## How does Reddio implement depositing assets from layer 1 to layer 2?
When a user makes a deposit, the user's assets deposited into the StarkEx  contract on layer 1 at the following addresses:
- Ethereum mainnet: `0x8eb82154f314ec687957ce1e9c1a5dc3a3234df9`.
- Goerli testnet: `0xB62BcD40A24985f560b5a9745d478791d8F1945C`.
Reddio constantly monitors this StarkEx contract and polls for deposit events. When a deposit event occurs and is confirmed after 15 blocks, the corresponding Stark key assets are deposited in layer 2 so that users can use their assets on layer2.

## If I want to check the results of the deposit/withdraw operations, how often should I poll the API for the best results?
- The deposit operations usually complete within 3 minutes, so you can check the status of the assets every 30 seconds after initiating a deposit.
- The withdraw operations usually complete within 8 hours, so you can check the status of the assets every 30 minutes after initiating a withdrawal. Note that when a withdrawal is completed, it means that the layer 2 proof of the withdrawal has been submitted to layer 1, which also means that the assets can now be withdrawn to the user's layer 1 wallet.

## Do Reddio support mint NFTs on layer 2?
Yes, Reddio supports mint NFTs on layer 2.
You can refer to [Mint NFTs on layer 2](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html) tutorial to learn how to mint NFTs.

## How to check contract details and transactions details on layer 1?
You can check through third-party websites like [Etherscan](https://etherscan.io/). See how to [check the smart contract and transaction details](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html) for more information.

## When I use API to mint NFTs. What does response: minting is not supported for ERC721 mean?
In Reddio’s system, we classified the ERC721 contract into two types.
ERC721 is specially used for users that have completed mint operations on Ethereum. They wish to switch their NFT collections trading to layer2. For this kind of NFTs, we are not allowed to mint on layer 2. And users will see the above error.
ERC721M is a type of contract that can be used for minting on layer2. If you use ERC721M instead of ERC721 in this situation, the above error will not be seen.
Please refer to [Mint NFTs On Layer 2](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html) for more detail.

## What is the purpose of nonce in Reddio’s system?
A nonce is a one-time code selected in a random or pseudo-random manner that is used to securely transmit a main password, preventing replay attacks. Similar as in Ethereum, each transaction has a nonce on Reddio and the nonce value of stark_key increases by 1 after the transaction. For more information, see [What is a Nonce](https://help.myetherwallet.com/en/articles/5461509-what-is-a-nonce).

## Does SDK wallets generated functions always lead to the same key pairs?
Not necessarily, it depends on the generation algorithm you use:
- If the stark_key pair is generated from an Ethereum private key, they are generated using the same signature and the same Ethereum private key generates the same stark_key pair.
- If the stark_key pair is generated by a random function, such as the 'get_random_private_key' function in the Unity SDK, the generation principle is consistent with the wallet key generation principle on layer 1, and the algorithm ensures that the wallet will not be repeated when generated. Therefore, you will not get the same stark_key pairs.

## Why I get 0 when using getnonce function?
If getnonce function returns 0, it means that this stark_key does not have any active transaction. When there is an active transaction related to the stark_key, the nonce will automatically increase. For more information about nonce, please refer to [this discussion](https://docs.reddio.com/guide/reference/faq.html#what-is-the-purpose-of-nonce-in-reddio%E2%80%99s-system).

## What is the length of stark_key?
Stark_key is a hexadecimal address starting with 0x and followed by 63 characters or less than 63 characters.

## What is the minimum amount for ETH/ERC20 withdrawal?
The minimum withdrawal unit for ETH and ERC20 is 1 "quantum", which is 0.000001 units. Therefore, you need to withdraw at least 0.000001 units of tokens at a time.

## What is assetid？
Assetid is an unique identifier calculated based on the asset type (ETH, ERC20, ERC721), contract address, and tokenID. This identifier corresponds layer 2 assets to layer 1 assets one by one. It should be noted that if the asset type is ERC20 or ETH, tokenID will not be used as the calculation parameter of assetid.

## What does the expirationTimeStamp parameter mean?
The expirationTimeStamp parameter represents the timeout for deposit/transfer/withdraw operations. Once the processing time of this operation on layer2 exceeds this value, the operation will fail. The unit of this parameter is second (unixtimestamp/3600). The default value and maximum value of this parameter are both 4194303. If you use default value as parameter,  this operation will never expire.

## What should I put in the base URI?
Base URI is used for you to fill in the metadata of your NFT collection. The metadata will contain information such as pictures and attributes corresponding to the NFTs. See the [Set Up Metadata For Your NFTs](https://docs.reddio.com/guide/getting-started/set-up-metadata-for-your-nfts.html) documentation for more details.

## What is the principle of transferring assets between layer 2 and layer1?
Transferring assets between layer 2 and layer 1, also known as "cross-layer" transfer, involves moving assets from a side-chain or a rollup construction (layer 2) to the main blockchain (layer 1). The specifics of how cross-layer transfer works vary depending on the side-chain or rollup construction being used.

Currently, Reddio's service is based on StarkEx. To explain the principle of asset transferring between layer 2 and layer 1, we can break it down into deposit and withdraw actions.
- For deposit: When you deposit ERC20/ETH/ERC721 assets from layer 1 to a specific stark_key, Reddio will update the asset status of this stark_key on layer2 and synchronize the asset status to StarkEx. StarkEx will later verify the ownership of the asset later by comparing the asset status on layer 1 with the information synchronized by Reddio.
- For withdraw:  Users needs to initiate a withdraw request on layer 2. When Reddio processes the request, it will update the asset status and synchronize the withdraw request to StarkEx. After StarkEx verifies it, the asset will be released after 4-8 hours in testnet, 8-16 hours in mainnet. The hash of the asset status is uploaded to the chain and the withdrawal balance of the user on the chain is updated. After that, the user can claim their assets on layer 1. 
For more detailed information ,see https://docs.starkware.co/starkex/overview.html for more details.

## How does Reddio charge? 
Currently, Reddio only charges fees after a user places an order and the transaction is completed. The fee rate is 0.5% of the total price of the order and is only charged to the seller (maker).

## Can the royalty of NFT be customized in Reddio?
It is not possible on our system currently.

## Is there any fee for withdrawing assets from layer 2?
The withdrawal process can be divided into two steps. The first step is to withdraw on layer2, and the user does not need to pay any fees for this step. After completing the previous step, the second step of withdrawal occurs on layer 1. The user who performs the withdraw operation  on layer 1 needs to pay the gas fee to the relevant blockchain network. Reddio will not charge any fee during the whole process.

## How to make ERC721 contract support minting on layer 2？
You need to make sure you include the MintFor function in your ERC721 contract. You can check [this](https://github.com/reddio-com/contract_demo/blob/main/src/contracts/ERC721MintFor.sol#L82) for implementing MintFor function. Only in this way can mint NFTs on layer 2 be guaranteed.

## Will completed orders still be in the order API? Where can I find it?
Completed orders will no longer appear in the order API. Because the orders in the order API are rders that have not yet been filled. If you want to query the orders that have been filled, you can query through the [record API](https://docs.reddio.com/guide/api-reference/record.html).

## How to know which wallet bought specific NFT?
You can query the the NFT collection API to figure out who bought specific NFT. Here is an [query example](https://api.reddio.com/v1/contracts/0x8fc67b0fcc9283551bdcd4d2d0b7c886f0756e64/tokens).

## What are the possible reasons that pending orders are not filled?
One possible reason is that the seller and buyer of the pending order are the same . In order to prevent order fraud, the pending order will only be filled if the buyer and the seller are not the same. Otherwise, user's assets will be frozen. You can cancel the old orders by cancel_order API.

## Does Reddio/Starkware know the keypair I generate?
Reddio/Starkware does not have access to the the public and private keypair generated by the SDK. The key generation function provided by the SDK is a purely algorithm-based local key generation, and does not require an Internet connection to use. Therefore, it is not possible for Reddio/Starkware to know the private key associated with your public stark key.

## Why doesn't Metamask pop up on the contract deployment page/demo page?
1. Make sure to click "Connect Wallet" button on Reddio Dashboard.
2. Make sure the Metamask extension is not blocked on Chrome. If your Metamask extension is blocked, follow the Chrome help documentation https://support.google.com/chrome/a/answer/6177431?hl=en to unlock the Metamask extension.

## What does 'frozen_token_ids' mean in balance APIs?
Frozen_token_ids represents the assets of the NFT collection have been frozen for some reason. If the asset is in pending order, the system will automatically freeze the asset to which the token_id belongs.

## What are the features of the token ID in the NFT collection?
The tokenId in the NFT collection is generated by Reddio. Reddio also maintains its uniqueness。  The value of the tokenId in layer 1 and layer 2 is exactly the same. Currently, the tokenID of each contract is monotonically increasing from 1. In the future, we will add the tokenID specified minting functions.

## Can I customize the message that Metamask pops up when calling the generateFromEthSignature function?
You can customize the message that pops up, but we do not recommend that you modify this message. Because this will cause the generated stark_key to be different and cannot be used universally in all Reddio-based web3 applications.

## What is the on-chain logic of the withdrawal NFTs operation on Layer 1? Will baseURI be set?
If you want to mint NFT on Layer2. You need to have a contract on layer 1 with [mintFor function](https://github.com/reddio-com/contract_demo/blob/main/src/contracts/ERC721MintFor.sol#L82) in the contract. When you withdraw the NFT on layer1 to the Ethereum wallet, you actually call this Mintfor function. This function mints the NFT of the corresponding tokenID. The baseURI is set when the contract is created, and cannot be set when withdrawing.

## What is the cost for withdrawing NFT from layer 2 to layer 1? Will it be cheaper than directly minting on layer 1?
The cost is similar for normal transactions. For example, [this transaction](https://goerli.etherscan.io/tx/0x944867b79a7afd131e043a7ea6b1a1c2e680b4c46fcd4380cbef9399faf00377). It will not be cheaper than directly minting on layer 1, but layer 2 has great advantages for buying NFT. Layer 2 can completely avoid gas war. You can mint without any cost on layer2, and then choose a withdrawal to layer1 when the gas fee is low. That will save several to dozens times gas fee for you.

## Can I deploy smart contracts on layer 2?
Currently Reddio does not support deploying smart contracts on layer 2.


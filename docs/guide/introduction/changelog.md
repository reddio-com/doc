# Change Log

## January 13, 2023
1. Launch alpha scan website dev.scan.reddio.com/
2. Add pagination for /v1/txns & /v1/balances & /v1/collections API
3. Release Java SDK 0.0.21 central.sonatype.dev/artifact/com.reddio/reddio-java/0.0.21
    - Support listen deposit event
    - Support generate stark_key pair by eth private key
    - Support IOC order
4. Refine record(txn) status, you can see the status at docs.reddio.com/guide/api-reference/record.html 

## December 30, 2022
1. Add /v1/txns API to get all transactions related to contract_address
2. Add /v1/collections API to get all collections


## December 26, 2022

1. Support IOC order (Now Reddio supports both GTC & IOC order)
2. Support utility token for reconcile
3. Support callback for orders
4. Add sequence_ids field to withdraw status

## December 16, 2022
1. Support IPFS upload v1
2. Add balance v2 api
3. Listen to onchain events for deposit

## December 2, 2022
1. Support Deploy ERC20/ERC721 on web
2. Launch demos.reddio.com v2
3. Launch www.reddio.com v2
4. Add Unity SDK

## November 18, 2022
1. Add Golang SDK
2. Add admin register contracts interface to layer 2
3. Add JS SDK
4. Add Python SDK

## Novemeber 4, 2022
1. Add Java SDK
2. Support Mints ERC721 on Reddio layer 2
3. Support Deposit & Withdraw ETH/ERC20/ERC721 on Reddio layer 2

## October 21, 2022
1. Support Transfer tokens on Reddio layer 2
2. Support Token owners of NFT collection

## September 30, 2022
1. Reddio launch on Mainnet

## September 2, 2022
1. Add balance v1 api
2. Add records API
3. Support batch mints
4. Support set BaseURI for NFT collection

## August 19, 2022
1. Add orderbook V1(support GTC and NFT and cancel order)
2. Add Reddio fee charge of order
3. Add marketplace fee charge of order
4. Support withdraw status

## July 22, 2022
1. Launch www.reddio.com v1
2. Launch demos.reddio.com V1
3. Launch dashboard v1

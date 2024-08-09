# Change Log

## October 18, 2023
1. User Profile Feature Updated: Implemented the user profile functionality. 
2. Red-service Table Merge: Merged order_record_models and transfer_record_models tables in the Red-service. This restructuring prepares the system for an eventual transition to the Sepolia network.
3. Starknet Node Deployment & Synchronization: Deployed Starknet nodes in both Germany and the USA. 
4. API Documentation Update: Enhanced the API documentation, specifically revising examples related to Withdrawals, and adding new interface details and explanations.

## September 30, 2023
1. User & Mint Data Interface: Introduced an interface to return user count and Mint data, and also added functionality to retrieve user operation data within a specified timeframe.
2. NFTStake Cairo Template Launched: Developed the NFTStake Cairo template and improved the /v1/records interface to list all transactions without requiring any parameters. 
3. Transaction Activity Interface Updated: Launched the /v1/tx_activity interface that displays all Tx Count information from the past 14 days, providing insights into recent transaction activities.

## August 16, 2023
1. Metadata Interface Development: Developed and launched new interfaces related to Metadata, enhancing the platform's data handling capabilities.
2. Contract Updates: Updated both the 1155 and 721 contracts, ensuring they are in line with the latest standards and requirements.
3. Reddio Cairo Project Structure Transition: Transitioned the reddio cairo project structure to scarb, streamlining the compilation process.

## July 19, 2023
1. Red-service Mainnet Update: Updated the mainnet version of red-service to the latest version
2. Token Register Launch: Successfully launched and tested Token register, enhancing the platform's capabilities.

## June 26, 2023
1. Balance V3 Update: Enhanced the display of the token_uri and incorporated the field in the interface for improved usability.
2. Red-adapter Adjustment: Modified the Red-adapter to read the TokenRegistered event with a gap of 3 blocks, ensuring timely and accurate event capture.
3. Red-service Snapshot Management: Implemented robust backup and cleanup procedures, safeguarding data and optimizing storage.

## May 27, 2023
1. Optimize the return structure of Balances /v1 and /v2 interfaces
2. Update the contracts page of the Dashboard
3. Integrate contract importation tool into Dashboard

## April 18, 2023
1. Launch [Explore](https://www.reddio.com/explore) page with 9 brand new demos
2. Integrate Web3Auth into all the demos
3. Integrate contract deployment tool into Dashboard

## March 17, 2023
1. Refine [Dashboard](https://dashboard.reddio.com/project) Guide
2. Opensource [ERC721](https://github.com/reddio-com/cairo/blob/main/token/ERC721/erc721.cairo) demo code on starknet environment
3. Fix withdrawal status bug


## March 10, 2023
1. Java SDK [0.0.54](https://central.sonatype.com/artifact/com.reddio/reddio-api/0.0.54) release
    - Unify reddio exception
    - New method to synchronized method
    - Add token Type on withdraw ERC721
2. Add guides on [Dashboard](https://dashboard.reddio.com/project)
3. New [API docs](https://api-docs.reddio.com/)
4. Refine error code、exception and wording on all APIs


## Febuaray 18, 2023
1. Java SDK 0.0.45 version release
    - Async request for transfer/withdrawal/order interface
2. API support get record by signature endpoint /v1/record/by/signature
3. API support /v1/order to direct retrieve order information
4. Refine duplicate transaction logic for async requests from clients
5. Fix some transaction may have multi records

## Febuaray 4, 2023
1. Launch new dashboard https://dashboard.reddio.com/project
2. IPFS upload service in production(alpha)
3. Add volume/trade/unique member statistic API
4. Add java sdk tutorial https://github.com/reddio-com/reddio-sdk/wiki

## January 13, 2023
1. Launch alpha scan website https://dev.scan.reddio.com/
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

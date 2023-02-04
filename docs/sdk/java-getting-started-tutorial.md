# Getting started with Reddio Java SDK

This tutorial introduces the Reddio Java SDK and includes demos of how to deposit and withdraw assets between ETH and Layer 2, transfer assets on Layer 2, and buy and sell NFTs on Layer 2 using the **Goerli Test Network**.
It is assumed that you have a basic understanding of [Ethereum](https://ethereum.org/en/), [Oracle Java 8](https://www.oracle.com/au/java/technologies/javase/javase8u211-later-archive-downloads.html), the latest version of [Apache Maven](https://maven.apache.org/), and related technologies. 

## Prepare a test account and get some test assets

### Step 1: Get a MetaMask account and select the test network

1. Install the [MetaMask](https://metamask.io/) extension to your browser and create a MetaMask wallet. 
2. Change the account name to `Reddio Tutorial`.
3. Click the Networks dropdown arrow next to your avatar and select the **Goerli Test Network**.
    ![Goerli Test Network](/Goerli-test-network.png)
    > **Note:** If you don't see **Goerli Test Network** from the dropdown list, you need to allow showing test networks in your account setting: Click your avatar, go to **Settings** and click **Advanced**. On the **Advanced** setting page, make sure the button under **Show test networks** is **ON**.
### Step 2: Get test assets from [Reddio Demo Marketplace](https://demos.reddio.com/). 

1. Click [Reddio Demo Marketplace](https://demos.reddio.com/) and click the **Connect** button to connect Reddio with your MetaMask wallet.
2. Click **Account** and then click **Get test assets**. You will get the following test assets and they will be displayed in the L1 column in about 5 minutes:
    - 0.01 GoerilETH
    - 100 ERC20 tokens
    - 10 ERC721 tokens (NFTs)


## Create a project integrated with Ethereum and Reddio

### Prerequisites
To use the Reddio Java SDK, you need to install [Oracle Java 8](https://www.oracle.com/au/java/technologies/javase/javase8u211-later-archive-downloads.html) and the latest version of [Apache Maven](https://maven.apache.org/).

### Step 1: Create a new Maven project

Use the following command to create the `reddio-java-sdk-tutorial` project:

    ```bash

        mvn archetype:generate -DgroupId=com.example.app \
            -DartifactId=reddio-java-sdk-tutorial \
            -DarchetypeGroupId=com.github.ngeor \
            -DarchetypeArtifactId=archetype-quickstart-jdk8 \
            -DinteractiveMode=false \
            -DarchetypeVersion=2.8.1

    ```
### Step 2. Add the Reddio Java SDK dependency

You can find the latest version of Reddio Java SDK on [Maven Central Repository](https://central.sonatype.com/). This tutorial uses the `0.0.30` version of Reddio Java SDK.

    ```xml
    <dependency>
        <groupId>com.reddio</groupId>
        <artifactId>reddio-api</artifactId>
        <version>0.0.30</version>
    </dependency>

    ```
> **Note:** The Reddio SDK use the following dependencies: 
> - `web3j` 4.9.4
> - `okhtttp` 4.9.0
> - `kotlin-stdlib` 1.4.10
> Make sure to keep the same version with your library.

## Deposit assets to Layer 2

This demo will show you how to deposit an NFT (token ID 2710 in this demo) to Layer 2 and withdraw it back to ETH.

### Prerequisites
-  Make sure you have got the test assets according to [Prepare a test account and get some test assets](#prepare-a-test-account-and-get-some-test-assets).
- Make sure the Maven project is initiated.


1. Create a new `Deposit` class:
    ```java

    package com.example.app;

    public class Deposit {
        public static void main(String[] args) {
            // put your codes here
        }
    }

    ```
2. Deposit NFT by `EthereumInteraction`. To deposit NFT to layer 2, the private key is required to integrate with the Ethereum network. To export the private key from a wallet like Metamask, see [How to export an account's private key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).

    ```java
    public static final String REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5";

        public static void main(String[] args) throws ExecutionException, InterruptedException {
            EthereumInteraction ethInteraction = DefaultEthereumInteraction.build(DefaultReddioRestClient.testnet(),
                DefaultEthereumInteraction.GOERIL_ID,
                // you can also use your own ETH node, or other service like Infura, etc.
                "https://eth-goerli.g.alchemy.com/v2/<your-alchemy-api-key>",
                "your-eth-private-key"
            );
            String starkKey = "0x" + CryptoService.getPublicKey(ethInteraction.getStarkPrivateKey()).toString(16);
            CompletableFuture<LogDepositWithToken> future = ethInteraction.depositERC721(
                REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS,
                // replace with your token id
                "token-id-to-deposit",
                starkKey,
                GasOption.Market
            );
            LogDepositWithToken event = future.get();
            System.out.println(String.format("deposit NFT(token id: 2710) from %s to %s", event.depositorEthKey, event.starkKey));
        }
    ```
3. Run the application. After the transaction, you need to wait for 3-5 minutes for the deposit transaction to be completed because Reddio sets the confirmation requirements to 15 blocks to prevent [the chain reorganization issue](https://learnmeabitcoin.com/technical/chain-reorganisation). When it finishes, you can see an output like the following snapshot:
    ![Deposit NFT Result](/deposit-nft-result.png)
    This means the deposit transaction has been completed. 
4. Confirm the NFT on Layer 2 using [Reddio Demo Marketplace](https://demos.reddio.com/). On the L2 column of your account, you can see that the NFT 2710 has been successfully deposited to L2.


## Transfer assets on Layer 2

This demo shows how to transfer assets between two accounts: `Reddio Tutorial` and `Reddio Tutorial Receiver`.

1. Create the Second Account. `Reddio Tutorial` has been set up in [Step 1: Get a MetaMask account and select the test network](#step-1-get-a-metamask-account-and-select-the-test-network), let's use the same way to create the `Reddio Tutorial Receiver` account.

2. Transfer Assets between accounts. To transfer assets, you need the Stark private key. You can use Reddio Java SDK to get the Stark private key from Ethereum private key.
    ```java
        public static final String REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5";

        public static void main(String[] args) {
            String senderEthPrivateKey = "sender-eth-private-key";
            String receiverEthPrivateKey = "receiver-eth-private-key";
            BigInteger senderStarkPrivateKey = DefaultEthereumInteraction.getStarkPrivateKey(senderEthPrivateKey, DefaultEthereumInteraction.GOERIL_ID);
            BigInteger receiverStarkPrivateKey = DefaultEthereumInteraction.getStarkPrivateKey(receiverEthPrivateKey, DefaultEthereumInteraction.GOERIL_ID);

            ReddioClient reddioClient = DefaultReddioClient.testnet();
            reddioClient.withStarkExSigner(senderStarkPrivateKey.toString(16)).transfer(
                "0x" + CryptoService.getPublicKey(senderStarkPrivateKey).toString(16),
                "1",
                REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS,
                // replace with your token id
                "token-id-to-deposit",
                DefaultReddioClient.TOKEN_TYPE_ERC721,
                "0x" + CryptoService.getPublicKey(receiverStarkPrivateKey).toString(16),
                4194303L
            );
            ResponseWrapper<TransferResponse> transferResponse = future.get();
            System.out.println(String.format("transfer NFT(token id: 2708): %s", transferResponse.getStatus()));
        }

    ```
3. Run the application. After the transaction, you need to wait for 3-5 minutes for the transfer transaction to be completed because Reddio sets the confirmation requirements to 15 blocks to prevent [the chain reorganization issue](https://learnmeabitcoin.com/technical/chain-reorganisation). When it finishes, you can see an output like the following snapshot:
    ![Transfer NFT Result](/transfer-nft-result.png)
    This means the transfer transaction has been completed. 
4. Confirm the NFT transfer on Layer 2 using [Reddio Demo Marketplace](https://demos.reddio.com/). On the L2 column of your `Reddio Tutorial` account, you can see that the NFT 2708 has been removed; when you switch to connect the `Reddio Tutorial` with the Reddio Demo Marketplace, you can find the NFT 2708 on the L2 column.
    ![NFT transfer account 1](/transfer-nft-account1.png)
    ![NFT transfer account 2](/transfer-nft-account2.png)

## Buy NFTs on Layer 2

This demo will show you how to buy NFTs.

### Prerequisites

1. Make sure you have got the ETH balances according to [Prepare a test account and get some test assets](#prepare-a-test-account-and-get-some-test-assets). You can also deposit some assets by the Reddio Java SDK according to [Deposit assets to Layer 2](#deposit-assets-to-layer-2) using the `depositETH` instead of the `depositERC721` method.

2. Get the NFT list:
    - On the default page of the [Reddio Demo Marketplace](https://demos.reddio.com/), you can see the list with all the NFTs for sale with the price. 
    - You can also list the NFTs for sale using the Reddio Java SDK:
        ```java
        public class ListNftsForSale {
            public static final String REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5";

            public static void main(String[] args) throws ExecutionException, InterruptedException {
                ReddioRestClient reddioRestClient = DefaultReddioRestClient.testnet();
                ResponseWrapper<OrderListResponse> orderList = reddioRestClient.orderList(OrderListMessage.of("", REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS, 100L, 1L, 0, null)).get();
                for (OrderListResponse.Order item : orderList.data.list) {
                    System.out.println(String.format("NFT for sale, token id: %s, price %s", item.getTokenId(), item.getDisplayPrice()));
                }
            }
        }
        ```
        Run the application and you can see similar output as the following snapshot:
        ![NFT for sale](/nft-for-sale.png)
        In this demo, let's buy NFT 2728 with the price 0.001 ETH.

3. Buy NFT with `ReddioClient`:
    ```java
        public static final String REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5";

        public static void main(String[] args) {
            ReddioClient reddioClient = DefaultReddioClient.testnet();
            StarkKeys starkKeys = DefaultEthereumInteraction.getStarkKeys("<your-eth-private-key>", DefaultEthereumInteraction.GOERIL_ID);

            ResponseWrapper<OrderResponse> orderResponse = reddioClient.withStarkExSigner(starkKeys.getStarkPrivateKey()).orderWithEth(
                starkKeys.getStarkKey(),
                "ERC721",
                REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS,
                "2728",
                "0.001",
                "1",
                OrderBehavior.BUY
            ).get();
            System.out.println("order sequence id: " + orderResponse.data.getSequenceId());

            System.out.println("order sequence id: " + orderResponse.data.getSequenceId());
        }
    ```
4. Run the application and the output will be like the following snapshot:
    ![Buy NFT result](/buy-nft-result.png)

5. Confirm the NFT on Layer 2 using [Reddio Demo Marketplace](https://demos.reddio.com/). On the L2 column of your account, you can see that the NFT 2728 has been successfully purchased.
    ![NFT purchased](/nft-purchased.png)




## Sell NFTs on Layer 2

This demo will show you how to sell NFTs.

1. Make sure you have got NFTs according to [Prepare a test account and get some test assets](#prepare-a-test-account-and-get-some-test-assets).

2. Get the NFT list:
    - On the default page of the [Reddio Demo Marketplace](https://demos.reddio.com/), you can see the list with all the NFTs. 
    - You can also list the NFTs for sale using the Reddio Java SDK:
        ```jav
        public class ListNftBalances {

            public static final String REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5";

            public static void main(String[] args) throws ExecutionException, InterruptedException {
                StarkKeys starkKeys = DefaultEthereumInteraction.getStarkKeys("271fa765a53d2913df586db7efd05955e45753a35942ded78ba24090269ff36f", DefaultEthereumInteraction.GOERIL_ID);
                DefaultReddioRestClient testnet = DefaultReddioRestClient.testnet();
                ResponseWrapper<GetBalancesResponse> response = testnet.getBalances(GetBalancesMessage.of(
                    starkKeys.getStarkKey(),
                    REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS,
                    100L,
                    1L
                )).get();
                for (GetBalancesResponse.BalanceRecord item : response.getData().getList()) {
                    if (DefaultReddioClient.TOKEN_TYPE_ERC721.equals(item.getType())) {
                        System.out.println(String.format("NFT balance, token id: %s, contract: %s", item.getTokenId(), item.getContractAddress()));
                    }
                }
            }
        }
        ```
        Run the application and you can see similar output as the following snapshot:
        ![NFT to sell](/sell-nfts-result.png)

        In this demo, let's sell the NFT with token id `2708` at `0.003` ETH.

3. Sell NFT with `ReddioClient`:
    ```java
     public static final String REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5";

    public static void main(String[] args) {
        ReddioClient reddioClient = DefaultReddioClient.testnet();
        StarkKeys starkKeys = DefaultEthereumInteraction.getStarkKeys("<your-eth-private-key>", DefaultEthereumInteraction.GOERIL_ID);

        ResponseWrapper<OrderResponse> orderResponse = reddioClient.withStarkExSigner(starkKeys.getStarkPrivateKey()).orderWithEth(
            starkKeys.getStarkKey(),
            "ERC721",
            REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS,
            "2708",
            "0.003",
            "1",
            OrderBehavior.SELL
        ).get();
        System.out.println("order sequence id: " + orderResponse.data.getSequenceId());
    }sol
    ```
4. Run the application and the output will be like the following snapshot:
    ![Sold NFT result](/sold-nft-result.png)

5. Confirm the NFT on Layer 2 using [Reddio Demo Marketplace](https://demos.reddio.com/). On the L2 column of your account, you can see that the NFT 2708 has been successfully purchased.
    ![NFT sold](/nft-sold.png)


## Withdrawal assets from Layer 2 to ETH
This demo will show you how to withdraw an NFT from layer 2 to ETH. The withdrawal process takes about 5-6 hours to complete because of the ZK-Rollup mechanism.

1. Withdraw NFT 2728 from layer 2 with `ReddioClient`:
    ```java
    ReddioClient reddioClient = DefaultReddioClient.testnet();
    StarkKeys starkKeys = DefaultEthereumInteraction.getStarkKeys("<your-eth-private-key>", DefaultEthereumInteraction.GOERIL_ID);
    reddioClient.withStarkExSigner(starkKeys.getStarkPrivateKey()).withdrawal(
        starkKeys.getStarkKey(),
        "1",
        REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS,
        "2728",
        "ERC721",
        "<your-eth-address>",
        4194303L
    ).get();

    ```
    Run the application and you can find NFT 2728 has been removed from your L2 balance. Click the **Record** tab on [Reddio Demo Marketplace](https://demos.reddio.com/), you can find the following record:
    ![Withdraw Record](/withdraw-record.png)
    This means Reddio has successfully finished the withdrawal process.
2. Waiting for the asset to become available on ETH. It takes about 5-6 hours for the NFT to be available on ETH. Once it becomes available, you can find the status of the withdrawal using one of the following approaches:
    - On the `Withdrawal Area` tab of [Reddio Demo Marketplace](https://demos.reddio.com/).
    ![Withdrawal Area](/withdraw-area-result.png)
    - List the available NFT using `ReddioClient`:
    ```java
    public class WithdrawalStatus {
        public static void main(String[] args) throws ExecutionException, InterruptedException {
            ReddioClient client = DefaultReddioClient.testnet();
            ResponseWrapper<WithdrawalStatusResponse> response = client.withdrawalStatus(WithdrawalStatusMessage.STAGE_WITHDRAWAREA, "0xB1A92fa2783daED8DF9ff6395a1D16e1F6fbd07C").get();
            for (WithdrawalStatusResponse.WithdrawalStatusRecord item : response.getData()) {
                System.out.println("Asset is available for withdrawal: " + item.symbol + " " + item.tokenId);
            }
        }
    }
    ```
3. Withdraw your NFT to your ETH address with `EthereumInteraction`：
    ```java
    public class WithdrawalLayer1 {
        public static final String REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS = "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5";

        public static void main(String[] args) throws ExecutionException, InterruptedException {
            DefaultReddioRestClient restClient = DefaultReddioRestClient.testnet();
            ResponseWrapper<GetContractInfoResponse> contractInfo = restClient.getContractInfo(GetContractInfoMessage.of("ERC721", REDDIO_TEST_ASSET_ERC721_CONTRACT_ADDRESS)).get();
            String assetType = contractInfo.getData().getAssetType();

            EthereumInteraction ethInteraction = DefaultEthereumInteraction.build(restClient,
                DefaultEthereumInteraction.GOERIL_ID,
                // you could also use your own ETH node, or other service like Infura, etc.
                "https://eth-goerli.g.alchemy.com/v2/<your-alchemy-api-key>",
                "<your-eth-private-key>"
            );
            TransactionReceipt txn = ethInteraction.withdrawalERC721("<your-eth-address>", assetType, "2728", GasOption.Market).get();
            String hash = txn.getTransactionHash();
            System.out.println("withdrawal NFT(token id: 2728)txn hash: " + hash);
        }
    }   
    ```
    Run the application and you can see an output like the following snapshot:
    ![Withdrawn to your eth address](/withdraw-eth-result.png)
    This means NFT 2728 has been withdrawn to your ETH address. The related transaction in this demo can be found on [Etherscan](https://goerli.etherscan.io/tx/0x6399a79719e18253ff7cbf0c5860e371ca252c6b5d2fc0d59118980a95ee680c).



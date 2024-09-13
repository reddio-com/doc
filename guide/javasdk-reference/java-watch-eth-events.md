# Watching transaction events using the Reddio Java SDK

### Warning: Deprecation of Goerli Testnet

**Important Notice:** The Goerli testnet has been deprecated, and Reddio has successfully migrated to the Sepolia testnet. As a user, it's essential to be aware of this change and take appropriate action.

Starting immediately, the Goerli testnet is no longer supported by Reddio. Any interactions or transactions on the Goerli testnet are at your own risk. We strongly recommend that you transition your activities to the Sepolia testnet to ensure uninterrupted access to Reddio's features.

Please exercise caution and update your settings and configurations to work with the Sepolia testnet. 

### Watching transaction events using the Reddio Java SDK

Transactions, such as depositing and withdrawing assets between Ethereum and layer 2, emit events upon completion. These events serve as an indicator that the transaction has been executed successfully. You can watch these events using the Reddio Java SDK.

Here is a sample application that demonstrates how to watch events of depositing NFTs from Ethereum to Layer 2:

> **Note:** The following example assumes that you have installed [Oracle Java 8](https://www.oracle.com/au/java/technologies/javase/javase8u211-later-archive-downloads.html) and the latest version of [Apache Maven](https://maven.apache.org/).

1. Create a new Maven project:
    ```bash
    mvn archetype:generate -DgroupId=com.example.app -DartifactId=reddio-example-watch-events -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false -DarchetypeVersion=1.4
    ```

2. Add the `reddio-api` dependency:
    ```xml
    <dependency>
        <groupId>com.reddio</groupId>
        <artifactId>reddio-api</artifactId>
        <version>0.0.18</version>
    </dependency>
    ```

3. Watch all of the deposit events:
    ```java
    public class App
    {
        public static void main( String[] args )
        {
            DefaultReddioRestClient restClient = DefaultReddioRestClient.testnet();
            DefaultEthereumInteraction ethereumInteraction = DefaultEthereumInteraction.build(
                    restClient,
                    DefaultEthereumInteraction.GOERIL_ID,
                    // replace with your eth node address
                    "https://eth-goerli.g.alchemy.com/v2/<your-api-key>",
                    // we do not need private key for this example
                    "0x0"
            );
            // object mapper for JSON serialization
            ObjectMapper om = new ObjectMapper();
            // notice the method watchDeposit would not block the thread, it runs in background, and returns Disposable for cancellation
            Disposable disposable = ethereumInteraction.watchDeposit((it) -> {
                try {
                    final Deposits.LogDepositEventResponse event = it.component1();
                    final EthBlock ethBlock = it.component2();
                    // once received the event, print it
                    String asJson = om.writeValueAsString(event);
                    System.out.println(asJson);
                } catch (JsonProcessingException e) {
                    throw new RuntimeException(e);
                }
            });


            try {
                Thread.sleep(Duration.ofSeconds(600).toMillis());

            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            // stop watching
            disposable.dispose();
        }
    }
    ```

    > The default behavior of `watchDeposit` is to:
    > - Start watching events from 16 blocks behind the latest block.
    > - Emit events after at least 16 block confirmations
    > 
    > To change the behavior, you can use the other overloads of `watchDeposit`, and change the parameters: `startBlockNumber` and `requiredBlockConfirmation`.

4. Run the application and [deposit some assets](java-getting-started-tutorial.md#deposit-assets-to-layer-2) on [Reddio Demo Marketplace](https://demos.reddio.com/). As the transaction completes, you can see an output like the following on the console:

    ```json
    {
        "log":{
            "removed":false,
            "logIndex":72,
            "transactionIndex":23,
            "transactionHash":"0x93df32e6a5adc801580f00a9f0681986314059c63fd0134f522ae94859b59b38",
            "blockHash":"0x85036bf550a8caca902ef3b43499e53cf2788fee36c2130e4041e6cc2ca01a44",
            "blockNumber":8281301,
            "address":"0x8eb82154f314ec687957ce1e9c1a5dc3a3234df9",
            "data":"0x00000000000000000000000076f2fc7ed90039d986e3eb4db294f05e160c8f0301c2847406b96310a32c379536374ec034b732633e8675860f20f4141e701ff4000000000000000000000000000000000000000000000000000000000165153c0352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e00000000000000000000000000000000000000000000000000005af3107a40000000000000000000000000000000000000000000000000000000000000000064",
            "type":null,
            "topics":[
                "0x06724742ccc8c330a39a641ef02a0b419bd09248360680bb38159b0a8c2635d6"
            ],
            "logIndexRaw":"0x48",
            "transactionIndexRaw":"0x17",
            "blockNumberRaw":"0x7e5cd5"
        },
        "depositorEthKey":"0x76f2fc7ed90039d986e3eb4db294f05e160c8f03",
        "starkKey":795995337730000219295083279675166181323994377230540967472507439971862323188,
        "vaultId":23401788,
        "assetType":1503545437449673444103803151627333814355897720185181380161647770114038034270,
        "nonQuantizedAmount":100000000000000,
        "quantizedAmount":100
    }
    ```
See [ethereum log definition](https://github.com/ethereum/go-ethereum/blob/v1.10.26/core/types/log.go#L31) for the definition of the `log` field.

## Reference

## watchDeposit

The `watchDeposit` method watches `LogDeposit` events and is a non-blocking method that runs in the background. It returns a `Disposable` object that can be used to cancel the method.

There are 3 overloads for `watchDeposit`:

- `Disposable watchDeposit(Consumer<Tuple2<Deposits.LogDepositEventResponse, EthBlock>> consumer);`: the default behavior. It watches events from the 16 blocks behind the latest block, and emits events with at least 16 block confirmations.
- `Disposable watchDeposit(Consumer<Tuple2<Deposits.LogDepositEventResponse, EthBlock>> consumer, BigInteger startBlockNumber);`: You can customize the behavior by specifying `startBlockNumber)`.
- `Disposable watchDeposit(Consumer<Tuple2<Deposits.LogDepositEventResponse, EthBlock>> consumer, BigInteger startBlockNumber, Long requiredBlockConfirmation);`: You can customize the behavior by specifying `requiredBlockConfirmation`.

The `consumer` parameter can resolve the event, implement your own logic here.

The `Deposits.LogDepositEventResponse` class contains all the information of the event:

- `log`: the raw log data which includes transaction hash, block number, etc.
- `depositorEthKey`: the Ethereum address of the depositor.
- `starkKey`: the Stark key of the depositor (type `BigInteger`), which can be converted to a hex string with `starkKey.toString(16)`.
- `assetId`, `assetType`, and `vaultId`: Identify the asset on Layer 2. See [Starkware-Specific Concepts](https://docs.starkware.co/starkex/spot/shared/starkex-specific-concepts.html#assetinfo_assettype_and_assetid_spot) for more information.
- `nonQuantizedAmount` and `quantizedAmount`: the amount of the asset.

## watchNftDeposit

The `watchNftDeposit` method watches the `LogNftDeposit` events and is a non-blocking method that runs in the background. It returns a  `Disposable` object that can be used to cancel the method.

There are 3 overloads for `watchNftDeposit`:

- `Disposable watchNftDeposit(Consumer<Tuple2<Deposits.LogNftDepositEventResponse, EthBlock>> consumer);`: This is the default behavior. It watches events from the 16 blocks behind the latest block and emits events with at least 16 block confirmations.
- `Disposable watchNftDeposit(Consumer<Tuple2<Deposits.LogNftDepositEventResponse, EthBlock>> consumer, BigInteger startBlockNumber);`:You can customize the behavior by specifying `startBlockNumber`.
- `Disposable watchNftDeposit(Consumer<Tuple2<Deposits.LogNftDepositEventResponse, EthBlock>> consumer, BigInteger startBlockNumber, Long requiredBlockConfirmation);`: You can further customize the behavior by specifying `requiredBlockConfirmation`.

The `consumer` parameter should resolve the event and implement your own logic.

The `Deposits.LogNftDepositEventResponse` class contains all the information of the event:

- `log`: the raw log data that includes metadata such as the transaction hash and block number.
- `depositorEthKey`: the Ethereum address of the depositor.
- `tokenId`: the token id of the NFT.
- `starkKey`: the Stark key of the depositor (type `BigInteger`), which can be converted to a hex string with `starkKey.toString(16)`.
- `assetId`, `assetType` and `vaultId` identify the asset on layer 2, see [StarkEx specific concepts
](https://docs.starkware.co/starkex/spot/shared/starkex-specific-concepts.html#assetinfo_assettype_and_assetid_spot) for more information.

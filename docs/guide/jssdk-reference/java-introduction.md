# Introduction to the Reddio Java SDK
The Reddio Java SDK provides Java libraries to use [Reddio API](https://docs.reddio.com/guide/api-reference/api-reference.html) with Java async API.

## Features
The Reddio Java SDK has the following features:
- The StarEx Cryptographic Library
- Low-Level and High-Level [Reddio API](https://docs.reddio.com/guide/api-reference/api-reference.html) clients
- Deposit, transfer, buy, sell, and withdraw assets
- Interaction with Ethereum

## Prerequisites

- [Oracle Java 8](https://www.oracle.com/au/java/technologies/javase/javase8u211-later-archive-downloads.html)
- The latest version of [Apache Maven](https://maven.apache.org/)
- The latest version of [Gradle](https://gradle.org/)

## Importing the Reddio Java SDK

Get the latest version on Maven Central Repository (https://search.maven.org/artifact/com.reddio/reddio-api) and import it into your project:
- For Maven:
    ```xml
    <dependency>
    <groupId>com.reddio</groupId>
    <artifactId>reddio-api</artifactId>
    <version>VERSION</version>
    </dependency>

    ```
- For Gradle:
    ```gradle
    implementation 'com.reddio:reddio-api:VERSION'
    ```
### Example

Here is an example to write a script to query the user's balances with `stark_key`:

```java
public void getBalances() throws ExecutionException, InterruptedException {
    DefaultReddioRestClient restClient = DefaultReddioRestClient.testnet();
    CompletableFuture<ResponseWrapper<GetBalancesResponse>> balancesFuture = restClient.getBalances(GetBalancesMessage.of(
            "0x1c2847406b96310a32c379536374ec034b732633e8675860f20f4141e701ff4",
            "",
            100L,
            1L)
    );
    ResponseWrapper<GetBalancesResponse> result = balancesFuture.get();
    System.out.println(result.toString());
}
```

## Frequently used classes and methods

- Low-Level API
    - `ReddioRestClient`: `com.reddio.api.v1.rest.ReddioRestClient` is the `interface` of Low-Level API for using [Reddio API](https://docs.reddio.com/guide/api-reference/api-reference.html), you can find the corresponding methods for each REST API.
    - `DefaultReddioRestClient`: `com.reddio.api.v1.rest.DefaultReddioRestClient` is the implementation of Low-Level REST API, and there are two factory methods for instantiating: `DefaultReddioRestClient.mainnet()` and `DefaultReddioRestClient.testnet()`.

- High-Level API
    - `ReddioClient`: 
        - `com.reddio.api.v1.ReddioClient` is the `interface` for High-Level API. It encapsulates the complex and boring codes for signing the request with StarEx Cryptographic Library for easy-to-use purposes.
        - `com.reddio.api.v1.ReddioClient.WithStarkExSigner` is the `interface` for Ethereum interactions like deposit and withdrawal on Layer1. `WithStarkExSigner` can be spawned from `ReddioClient` with a private key. 
    - `DefaultReddioClient`: The default implementations are `com.reddio.api.v1.DefaultReddioClient` and `com.reddio.api.v1.DefaultReddioClient.DefaultWithStarkExSigner`.

It is recommended to use **High-Level API** for a better experience.

- `CryptoService`: `com.reddio.crypto.CryptoService` provides interactions with StarEx Cryptographic library, like signing and Public-key cryptography-related methods.


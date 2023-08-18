# Integrate Payment Service for Web2 Projects with Reddio

## Introduction

In the digital age of Web2 projects, seamless transactions using stablecoins like USDC are paramount. This guide details constructing a USDC Payment Service using Reddio's facilities. We'll delve into:

1. Depositing USDC into user accounts for immediate utility.
2. Understanding the core operations: Deposit, Transfer, and Withdraw.
3. A brief cart checkout scenario walkthrough.
4. Setting up a development environment, aided by Java and JavaScript expertise.
5. Demonstrative code snippets for wallet generation, fund deposits, transfers, and withdrawals.

## Common Payment Service Overview

In a generic payment service:

1. Users first deposit USDC into their own account.
2. Once funds are credited, users can freely use their assets for transactions, such as payments to merchants. 
3. This operates similarly to current digital currency virtual credit cards. 

The Payment Service mainly consists of the following three operations:
- **Deposit:** Users deposit stable coins into their account.
- **Transfer:** Used during transactions or payments, e.g., when a user makes a purchase and transfers money to a merchant.
- **Withdraw:** Both users and merchants can withdraw their digital assets anytime.

Apart from these operations, your system might also need to log various actions and forward the aforementioned operations to Reddio for on-chain data processing and synchronization.

## Example Scenario: Cart Checkout 

<p align="center">
  <img src="/cartcheckout.png"/>
</p>

The process is divided into 6 steps:
1. User initiates a payment to the merchant.
2. Upon receiving the payment info, the merchant verifies the user's funds with the payment service and sends the payment details.
3. The Payment service processes the info and transfers user funds to the merchant via Reddio's API.
4. After confirming the successful transfer, the Payment service sends a receipt to the merchant.
5. The merchant delivers the product to the user upon receipt.
6. Reddio records the transaction on-chain after a certain period (8-16 hours). Note: The user, merchant, and payment service don't need to monitor this.

Now, based on the above scenario, let's implement the payment service step-by-step, focusing on code related to Reddio interactions.

## Prerequisites

- Basic knowledge of Java and Javascript. This guide uses Java for backend development and Javascript for frontend.
- The demo operates on the Ethereum testnet (goerli). Ensure you have a metamask wallet with goerli ETH and USDC tokens. USDC's contract code on goerli is `0x07865c6E87B9F70255377e024ace6630C1Eaa37F`. Reddio also allows traditional Web2 login methods, supporting web3auth and the particle network. You can incorporate these in your projects.

### Java Library Integration
1. Create a new project (you can use IntelliJ IDEA).
2. Add the following maven configuration:
```xml
<dependency>
    <groupId>com.reddio</groupId>
    <artifactId>reddio-api</artifactId>
    <version>0.0.66</version>
</dependency>
```
3. Include necessary classes in your business logic:
```java
import com.reddio.api.v1.DefaultReddioClient;
import com.reddio.api.v1.ReddioClient;
import com.reddio.api.v1.requests.ReddioTransferToApi;
import com.reddio.api.v1.requests.ReddioWithdrawalToApi;
import com.reddio.api.v1.rest.DefaultReddioRestClient;
import com.reddio.api.v1.rest.ReddioRestClient;
import com.reddio.api.v1.rest.SequenceRecord;
import com.reddio.crypto.CryptoService;
```

### Javascript Library Integration

Install the official Reddio JS library:
```javascript
yarn add @reddio.com/js
```
Initialize Reddio:
```javascript
const reddio = new Reddio({
  env: 'test',
});
```

## Detailed Steps

1. **User Wallet Generation:** The Payment Service can assist users in creating their wallets. Wallets can either be self-managed or hosted by the payment service. For this guide, we'll use the hosted wallet as an example. The following Java snippet generates a wallet:
```java
public void generateNewWalletAddressAndKeys() {
    final BigInteger starkPrivateKey = CryptoService.getRandomPrivateKey();
    final BigInteger starkPublicKey = CryptoService.getPublicKey(starkPrivateKey);

    System.out.println("Layer2 Wallet Address: 0x" + starkPublicKey.toString(16));
    System.out.println("Layer2 Private Key: 0x" + starkPrivateKey.toString(16));
}
```

2. **User Deposits:** Since users start with zero funds but need funds to make payments, provide an interface for them to deposit funds. Here's a simple deposit function using Javascript:
```javascript
const depositUSDC = async (amount: number) => {
    const tx = await reddio.erc20.approve({
        tokenAddress: usdcContractAddress,
        amount,
    });
    await tx.wait();
    return reddio.apis.depositERC20({
        starkKey: key.publicKey,
        quantizedAmount: amount,
        tokenAddress: usdcContractAddress,
    });
}
```
3. **User Payments to Merchant:** Since we assume hosted wallets, the backend will facilitate the payment to the merchant's address. Below is the Java code for transfers:
```java
public void transfer() {
    final String senderPrivateKey = "<sender-private-key>";
    final String receiverAddress = "<receiver-address>";
    final String transferAmount = "1.5";
    final String transferTokenContractAddress = "<erc20-token-address>";
    final SequenceRecord record = ReddioTransferToApi.transferERC20(
            DefaultReddioRestClient.testnet(),
            senderPrivateKey,
            transferAmount,
            transferTokenContractAddress,
            receiverAddress,
            ReddioClient.MAX_EXPIRATION_TIMESTAMP
    ).callAndPollRecord();
    System.out.println(
            "transfer txn completed, sequence id: " + record.getSequenceId()
    );
}

```
4. **Merchant Product Delivery:** Once the status from the Transfer process indicates `SequenceStatusAccepted`, the transaction is successful, and the merchant can deliver the product.

5. **Withdrawal Process:** Though the transaction generally concludes by the fourth step, withdrawals might be needed. This process involves two phases. First, assets are withdrawn to the hosted wallet, and after 8-16 hours (time for on-chain confirmation), users can perform the second on-chain withdrawal operation.

6. **Backend Withdrawal:** For hosted wallets, use the following Java code:
```java
public void withdrawal() {
    final String starkPrivateKey = "<private-key>";
    final String withdrawalAddress = "<receiver-address-on-eth>";
    final String depositAmount = "1.5";
    final String tokenContractAddress = "<erc20-token-address>";

    final SequenceRecord record = ReddioWithdrawalToApi.withdrawalERC20(
            DefaultReddioRestClient.testnet(),
            starkPrivateKey,
            depositAmount,
            tokenContractAddress,
            withdrawalAddress,
            ReddioClient.MAX_EXPIRATION_TIMESTAMP
    ).callAndPollRecord();

    System.out.println(
            "withdrawal txn completed, sequenceid: " + record.getSequenceId()
    );
}

```
7. **Frontend Withdrawal:** With the Javascript SDK:
```javascript
const withdrawToWallet = async (item: any) => {
    return reddio.apis.withdrawalFromL1({
        ethAddress: getAccount().address!,
        type: item.type,
        assetType: item.asset_type,
    });
}
```

That wraps up the integration process. With these steps and some additional configurations, your payment service will be ready. For the full frontend code, refer to the provided link. Try the frontend demo [here](https://demos.reddio.com/).

Thank you for considering Reddio for your payment service foundation!

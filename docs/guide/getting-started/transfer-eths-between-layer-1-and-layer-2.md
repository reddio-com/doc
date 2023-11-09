# Transfer ETHs Between Layer 1 and Layer 2

## Introduction

This tutorial will guide you through the process of using the Reddio API to deposit, transfer, and withdraw ETH between the Ethereum layer 1 and layer 2 blockchains using typescript.

You can get the [Transfer ETHs Between Layer 1 and Layer 2 project from github](https://github.com/reddio-com/Tutorial-Examples/blob/master/ETH-transfer-tutorial-example/src/pages/index.tsx). After you cloned the project in your device, you can use following prompts to install all the dependencies.

```bash
yarn install
```

After install all the dependencies, use  following prompts to start the project:

```bash
yarn start
```

Now we will go over important components of our project.

## Connect to wallet

If you want to deposit, transfer, and withdraw tokens between the Ethereum layer 1 and layer 2 blockchains, you need to connect to your wallet first. We will use Metamask as an example to show you how to connect to the wallet and create Stark keypairs based on it. There’s one thing to note that one Metamask wallet address will generate the same Stark keypair. 

```tsx
  async function connectToWallet() {
    if (typeof window !== 'undefined') {
      //First, get the web3 provider if window is not undefined
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      //Second, we need to ask the wallet to switch to specific ETH network
      //We will use Goerli testnet to give example.Its hexValue is 5.
      await provider.send("wallet_switchEthereumChain", [
        { chainId: ethers.utils.hexValue(5) },
      ]);

      //Third, getting the account addresses from provider
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const ethAddress = await signer.getAddress();

      //Finally, we can create a new reddio instance (Goerli testnet) 
      //And assign global variable to it
      const reddio = new Reddio({
        provider,
        env: 'test',
      });
      setReddio(reddio);

      const generateKey = async () => {
        try {
          //Generate stark private key and public key 
          //Store them into array
          const { privateKey, publicKey } = await reddio.keypair.generateFromEthSignature();

          //We will set ethAddress/starkKey/privateKey on our array
          setEventValue({ ...eventValue, ethAddress, starkKey: publicKey, privateKey })
        } catch (error) {
          console.error(error);
        }
      };

      generateKey();
    }
  }
```

After you start the project. You will see a “Connect wallet” button in the main page, after clicking on the button. MetaMask will show up and ask you to login. 

<p align="center">
  <img src="/transfer-eth-1.png" alt="transfer-eth-1"/>
</p>

After login into your wallet, your address will be shown on the “ETH Address”. And your stark key and stark private key will be shown on the forms. If you see your wallet’s address, that means your wallet is successfully connected to the application.

## Deposit: from layer 1 to layer 2

If you want to trade on layer 2, you need to have assets on layer 2. So you need to deposit your assets from layer 1 to layer 2 at first. We will use Goerli ETH as example. You can get your own Goerli ETH by going to the [faucet page](https://goerlifaucet.com/) and click on “Send Me ETH” to get some Goerli ETH.

Now, we will show you how to implement the deposit function in your application. The only things you need to care about is your starkKey and the amount of ETH you want to deposit:

```tsx
  async function depositETH() {
    if (reddio !== null) {
      //Deposit ETH to layer 2 if reddio object is defined
      const { starkKey, tokenAmount } = eventValue
      await reddio.apis.depositETH({
        //Your starkKey (public key on layer 2)
        starkKey,
        //Amounts you want to deposit
        quantizedAmount: tokenAmount,
      });
    }
  }
```

After you write down the proper information on the forms and click on the deposit button, your MetaMask will ask you to confirm all the transactions. After that, you can check your balance [here](/guide/getting-started/check-your-eth-erc20-nft-balance).

<p align="center">
  <img src="/transfer-eth-2.png" alt="transfer-eth-2"/>
</p>

## Transfer: from layer 2 to layer 2

After deposit, you have your own Goerli ETH on layer 2. Now you want to send the Goerli ETH to others on layer 2. 

Now, we will show you how to implement the transfer function in your application.

```tsx
async function transferETH() {
    if (reddio !== null) {
      const { starkKey, privateKey, tokenAmount, receiver } = eventValue
      //transfer the amount to another starkKey
      const { data } = await reddio.apis.transfer({
        starkKey,
        privateKey,
        amount: tokenAmount,
        type: 'ETH',
        receiver,
      });
      console.log(data);
    }
  }
```

After you write down the proper information on the forms and click on the transfer button. You can check a response from your console likes the picture down below:

<p align="center">
  <img src="/transfer-eth-3.png" alt="transfer-eth-3"/>
</p>


Transfering ETH tokens on layer 2 is quick. You can check your balance [here](/guide/getting-started/check-your-eth-erc20-nft-balance).

## Withdraw: from layer 2 to layer 1

You already have a lot of ETH on layer 2. You want these tokens back to your layer 1 wallet. 

Now, we will show you how to implement the withdraw function in your application. Typically, withdraw methods are composed by two steps: withdraw from layer 2 to withdraw area and then withdraw from layer 1.

The first step takes at least 4 hour. You can [check withdraw status here](https://docs.reddio.com/guide/api-reference/withdraw.html#withdrawal-status).

```tsx
  async function withdrawTokensFromL2() {
    if (reddio !== null) {
      const { starkKey, privateKey, tokenAmount, receiver } = eventValue
      //Withdraw tokens from layer 2
      //It will usually take 4 hour to withdraw from layer 2 to withdraw area
      const { data } = await reddio.apis.withdrawalFromL2({
        starkKey,
        privateKey,
        amount: tokenAmount,
        type: "ETH",
        receiver,
      });

      console.log(data);
    }
  }
```
The second step is to withdraw the assets from layer 1. You can refer to guide [here](https://docs.reddio.com/guide/SDKs/jssdk-reference/withdraw.html#withdrawalfroml1)
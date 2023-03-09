# Issue Tokens On Layer 2

## Introduction

Issuing tokens on layer 2 can bring several benefits to token holders and projects. First, it can reduce the gas fees required for transactions. Second, layer 2 can support higher transaction throughput, enabling faster and more efficient token transfers. Moreover, projects can create innovative solutions such as airdrops and liquidity mining programs to incentivize users and increase adoption. To issue Tokens on layer 2 you need to follow the steps below:

1. Deploy an ERC20 smart contract on layer 1
2. Bind the smart contract with Reddio
3. Deposit ERC20 To layer 2
4. Use Reddio’s functionalities to do more

## Deploy an ERC20 smart contract on layer 1

Prerequisites:

1. Install **[MetaMask](https://metamask.io/)** and create a **[MetaMask](https://metamask.io/)** wallet.
2. On your Metamask wallet, choose the Goerli test network as we are using the test network for this guide:

![https://docs.reddio.com/meta-mask-testnet.png](https://docs.reddio.com/meta-mask-testnet.png)

1. Make sure you have enough GoerliETH on the Goerli Testnet because deploying an ERC721M smart contract needs some Goerli ETH as the gas fee.

**Note:** You can [check this guide](https://docs.reddio.com/guide/reference/which_blockchain_network_should_i_use.html#how-can-i-get-free-goerli-eth-to-test-my-applications) to get free Goerli ETH

You can deploy an ERC20 smart contract on layer 1 using one of the following two ways:

- Use Reddio's smart contract deployment tool at **[https://deploy-contract.reddio.com/](https://deploy-contract.reddio.com/)** to deploy an ERC20 smart contract. To do that, you need to do select ERC20 on the dropdown list.
- Reuse the ERC20 contract located at **[Contract Sample repo](https://github.com/reddio-com/contract_sample/blob/main/src/contracts/ERC20General.sol)** to deploy a smart contract using other tools such as **[Hardhat](https://hardhat.org/)** or **[Remix](https://remix-project.org/)**.

After the deployment, you will get the smart contract address. Please keep the smart contract address.

You can check the smart contract detail on Etherscan by following this **[guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1)**.

## Binding the smart contract with the Reddio platform

Here are the steps to bind the smart contract with the Reddio platform:

- Register your Reddio account at **[https://dashboard.reddio.com/](https://dashboard.reddio.com/)**
- Create a project in the Reddio Dashboard. You can use project to contain several of your smart contracts.
    1. Log in the Reddio dashboard
    2. Click the drop down button on the top left and then click **Create Project**. Input a name for the project and click **Create Project**
    3. Select the new project you just created by clicking the drop down button on the top left
- Go to **Contracts** page, and click **Add Contracts** button.

<p align="center">
  <img src="/addERC20Contract.png"/>
</p>

- Contract Type: the type of your smart contract. For this guide, please select ERC20.
- Contract Address: the smart contract address you get via deployment.

By now, you have binded your smart contract with a project on Reddio.

## Deposit ERC20 to layer 2

To deposit ERC20 tokens from layer 1 to layer 2, there are two methods available: dashboard tool and SDKs. 

For dashboard tool, you need to access reddio’s [dashboard](https://dashboard.reddio.com/project). After that, you need to click "Deposit ERC20 To Layer 2” button on the down left of the dashboard:

<p align="center">
  <img src="/depositERC20Button.png"/>
</p>

After clicking the button, a form will pop to ask for your input:

<p align="center">
  <img src="/depositERC20Form.png"/>
</p>

- Contract Address: the smart contract address you get via deployment.
- StarkKey: the address to receive ERC20 Tokens on layer 2. You can get it [here](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html#connect-wallet-and-get-public-key-on-layer-2).
- Amount: the amount of tokens you want to deposit.
- Network/Chain: the network you use. We recommend to develop your application on Goerli before do that on the mainnet.

After filling all the forms, you can click the “OK” button to deposit Tokens to layer 2. 

For SDKs, you can check it [here](https://docs.reddio.com/guide/jssdk-reference/deposit.html#depositerc20).

Once you finished the deposit operation, you can check your ERC20 balance by following this [guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html).

## Use Reddio’s functionalities to do more

After successfully depositing your tokens on Reddio's Layer 2, you can leverage the platform's various features. For instance, you can perform an airdrop to your users using the transfer function. Additionally, you can allow your users to withdraw these tokens to Layer 1, enabling them to trade these tokens for other digital assets. We will provide you with a list of these functionalities in the "next steps" section for your reference.

## Next steps

- [Deposit ERC20 from layer 1 to layer 2](https://docs.reddio.com/guide/getting-started/transfer-erc20s-between-layer-1-and-layer-2.html#deposit-from-layer-1-to-layer-2)
- [Transfer ERC20 between two layer 2 accounts](https://docs.reddio.com/guide/getting-started/transfer-erc20s-between-layer-1-and-layer-2.html#transfer-from-layer-2-to-layer-2)
- [Withdraw ERC20 from layer 2 to layer 1](https://docs.reddio.com/guide/getting-started/transfer-erc20s-between-layer-1-and-layer-2.html#withdraw-from-layer-2-to-layer-1)
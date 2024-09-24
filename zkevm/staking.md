# Staking

The [Reddio Points System](https://points.reddio.com/) have staking points enabled. When users deposit ETH or USDT into Reddio, equivalent tokens—rsvETH and rsvUSDT—are generated, allowing users to perform efficient cross-chain operations. 
## What is rsvETH and rsvUSDT?
Reddio Vault Ethereum (rsvETH) is the Layer 2 token generated when users deposit ETH into [Reddio Points System](https://points.reddio.com/) via the [The Deposit Page](https://points.reddio.com/deposit). rsvETH acts as a Layer 2 equivalent of ETH and is used for various decentralized activities within the Reddio ecosystem. Part of the ETH deposited is allocated to risk-free investment strategies, with returns distributed among rsvETH holders. Upon withdrawal from Layer 2, the corresponding rsvETH is burned, and users retrieve their ETH along with accrued returns. Similarly to Reddio Tether USD (rsvUSDT).
## Step-by-Step Guide: Making a Deposit
**Step 1: Connect Your Wallet**
1. Go to the [Reddio Deposit Page](https://points.reddio.com/deposit).
2. Select **Connect Wallet** and choose **MetaMask** from the wallet providers.
3. In MetaMask, confirm the connection to proceed.

**Step 2: Make a Deposit**

1. After connecting your wallet, input the amount of ETH or USDT you want to deposit.
2. Verify the amount and click Deposit.
3. MetaMask will open a prompt to confirm the transaction, including any applicable gas fees (since this transaction occurs on Ethereum Layer 1).
4. Once the deposit transaction is confirmed on Ethereum, your deposit will be sent to the smart contract and the corresponding rsvETH or rsvUSDT tokens will be minted and credited to your Reddio Layer 2 account.

**Key Details of the Deposit Smart Contract:**
- Contract Address: [0x4315990D9eeAFFdFAfD49958b4851F203FA1126f](https://etherscan.io/address/0x4315990D9eeAFFdFAfD49958b4851F203FA1126f#code)
- This contract handles the minting of rsvETH and rsvUSDT once the corresponding assets (ETH/USDT) are deposited into Reddio.
- The contract tracks all deposits, ensuring that each user receives the exact amount of rsvETH or rsvUSDT based on their deposit.

## Import rsvETH/rsvUSDT into MetaMask
Once rsvETH or rsvUSDT is generated, you can import these tokens into your MetaMask wallet for Layer 2 usage. Follow these steps:

1. Open MetaMask and make sure you are on the correct network (Ethereum Mainnet).
2. Click Import Tokens at the bottom of your assets list.
3. Enter the contract address for rsvETH or rsvUSDT:
	- rsvETH Contract Address: 0xCA9de1F80Df74331c5fcb7Eee2D05E746d47BFb2
	- rsvUSDT Contract Address: 0x2e5D4e2A2336045471BFE446CAA407f0C3A2419C

|     Metamask   |    Add Token   |    Import Token   |
| :-------------: | :-------------: | :-------------: |
|![metamask](/metamask.png) |![addtoken](/addtoken.png) | ![importtoken](/importtoken.png) |
4. Once MetaMask identifies the token, click Add Custom Token and then Import Tokens.
5. Your balance of rsvETH or rsvUSDT will now be visible in your wallet.
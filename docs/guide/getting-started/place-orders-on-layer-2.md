# Place Orders On Layer 2

## Seek Available NFTs To Place Orders

After you finished the mintintg process described in “[Mint NFTs On Layer 2](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html)”, you will see ERC721M balance under your wallet. However, you can only place orders on the NFTs that are not “frozen”.For example, if you use [balance v2 API](https://docs.reddio.com/guide/api-reference/balance.html#get-balances-v2) to check the balance with your own stark_key, you will use the following URL and see the json response like this:

```shell
https://api-dev.reddio.com/v2/balances?stark_key=0x1baf1b9991271727e8ebabf242cb5c707ae72f356481908a344109c08f11c3
```

```js
{
  "status": "OK",
  "error": "",
  "error_code": 0,
  "data": [
    {
      "asset_id": "",
      "contract_address": "0x7aa10dc07a32bf7284171594839ac3b86d7a23aa",
      "balance_available": 1,
      "balance_frozen": 1,
      "type": "ERC721M",
      "decimals": 0,
      "symbol": "RDD",
      "quantum": 1,
      "display_value": "1",
      "display_frozen": "1",
      "available_token_ids": [
        "1",   //please notify this line
      ],
      "frozen_token_ids": [
        "2"    //please notify this line
      ],
      "base_uri": ""
    },
  ]
}
```



You can only place orders on tokens that are under “available_token_ids”. Because tokens under “frozen_token_ids” means some sell roders are placed on these tokens. If you need to unfrozee these orders, you need to [cancel such sell orders](https://docs.reddio.com/guide/api-reference/order.html#cancel-an-order).

In this case, we can use token with token ID “1” to place our orders.

## Place A Sell Order

We recommend you to use our [SDKs](https://docs.reddio.com/guide/jssdk-reference/initiate-sdk.html) to place sell orders due to encryption calculation reason. In this tutorial, we will [Python SDK](https://github.com/reddio-com/red-py-sdk) to demonstrate for you. After you have installed the Python SDK, you can import the module and initiate the objects in your IDEs like this:

```python
from redpysdk import Reddio

reddio = Reddio("testnet")
```

And then, you need to fill in all the required parameters. We will explain the meaning of each parameter:

“contract_type” is the type of our smart contract. Since we are placing orders on NFTs in this tutorial, you need to type ERC721M.

“contract_address” is the smart contract address you get through contract deployment. In this case, we will use 0x7aa10dc07a32bf7284171594839ac3b86d7a23aa just for illustration.

“tokenID” is the ID of the NFT that you wish to sell for. We want to sell “token 1” in this tutorial.

“price” is the price you want to set for this NFT. 

“stark_private_key” is the private key for your layer 2 wallet. You can check it through [here](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html#connect-wallet-and-get-public-key-on-layer-2).

“base_token_type” is the token type for placing orders. You can type “ETH” for Ethereum and “ERC20” for ERC20 of your choice.

“base_token_contract” is the ERC20 token’s contract address if you type “ERC20” on “base_token_type”. If you type “ETH” on “base_token_type”, you can input “eth” in this parameter. 

```python
sequenceID = reddio.sell_nft(contract_type="ERC721M",
                contract_address="0x7aa10dc07a32bf7284171594839ac3b86d7a23aa",
                tokenID=1,
                price=0.888,
                stark_private_key="Your-Stark-Private-Key",
                base_token_type="ETH",
                base_token_contract="eth")

print(sequenceID)
```

After running the code above, you will get the following output:

```python
303176
```

That is the sequence ID of this order which is use for record retrieving. You can check your order record through [record API](https://docs.reddio.com/guide/api-reference/record.html#get-record).

A quick way to check if the sell order is successfully placed is to check through [balance v2 API](https://docs.reddio.com/guide/api-reference/balance.html#get-balances-v2) . If the sell order is placed, the NFT token ID will be inside “frozen_token_ids” list. The query URL and the response are shown below:

```shell
https://api-dev.reddio.com/v2/balances?stark_key=0x1baf1b9991271727e8ebabf242cb5c707ae72f356481908a344109c08f11c3
```

```json
{
  "status": "OK",
  "error": "",
  "error_code": 0,
  "data": [
    {
      "asset_id": "",
      "contract_address": "0x7aa10dc07a32bf7284171594839ac3b86d7a23aa",
      "balance_available": 0,
      "balance_frozen": 2,
      "type": "ERC721M",
      "decimals": 0,
      "symbol": "RDD",
      "quantum": 1,
      "display_value": "0",
      "display_frozen": "2",
      "available_token_ids": [
      ],
      "frozen_token_ids": [
        "1",   //please notify this line
        "2",
      ],
      "base_uri": ""
    },
  ]
}
```

## Place A Buy Order

To place a buy order, you need to have another MetaMask account and different pairs of StarkKey. That is because we forbid trading through the same account. If you have question getting StarkKey pairs, you can [click here](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html#connect-wallet-and-get-public-key-on-layer-2).

Now, we can use our new pair of starkKey to buy the NFT. Assume we want to buy the same NFT that we just put into sale, all the parameters are the same except for your stark_private_key. Your code shall looks like this:

```json
sequenceID = reddio.buy_nft(contract_type="ERC721M",
               contract_address="0x7aa10dc07a32bf7284171594839ac3b86d7a23aa",
               tokenID=1,
               price=0.888,
               stark_private_key="Your-Another-Stark-Private-Key",
               base_token_type="ETH",
               base_token_contract="eth")
```

The buy order is valid only when  1.the price on the buy order is larger than the price on the sell order 2. you have enough token balance in your layer 2 account. You can go to

to deposit your test ETH to layer 2. Or you can consult with [this page](https://docs.reddio.com/guide/getting-started/transfer-eths-between-layer-1-and-layer-2.html#from-layer-1-to-layer-2-deposit) to deposit your test ETH into layer 2.

## Check your NFTs on layer 2

After you have submitted the buy order for specific NFT, you will have your sequence ID. If the buy order is valid, you can check the record through [record API](https://docs.reddio.com/guide/api-reference/record.html) by your stark_key and sequence ID. Here is an example for a query URL and a valid response for buy order:

```shell
https://api-dev.reddio.com/v1/record?stark_key=0x1baf1b9991271727e8ebabf242cb5c707ae72f356481908a344109c08f11c3&sequence_id=303188
```

```json
{
    "status": "OK",
    "error": "",
    "error_code": 0,
    "data": [
        {
            "amount": "1",
            "order.base_asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
            "order.base_asset_name": "ETH",
            "order.base_contract_address": "eth",
            "order.direction": 0,
            "order.display_price": "0.002",
            "order.fee_asset_name": "ETH",
            "order.fee_taken": "10",
            "order.fee_token_asset": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
            "order.filled": "1",
            "order.price": "2000",
            "order.quote_asset_id": "0x40018e56a4484693a7041332f302b11f604ec1f42763b567cb936cd3e7f135b",
            "order.quote_asset_name": "TT",
            "order.quote_asset_type": "ERC721M",
            "order.quote_contract_address": "0x7aa10dc07a32bf7284171594839ac3b86d7a23aa",
            "order.volume": "2000",
            "record_type": 7,
            "sequence_id": 303188,
            "stark_key": "0x1baf1b9991271727e8ebabf242cb5c707ae72f356481908a344109c08f11c3",
            "status": 1,
            "time": 1669796207,
            "token_id": "9"
        }
    ]
}
```

Once you see that, the NFT that you placed buy order for will be in your layer 2 wallet.  You can check your wallet through two ways.

First, you can use [balance v2 API](https://docs.reddio.com/guide/api-reference/balance.html#get-balances-v2) to check the balance with your own stark_key. Since I just bought NFT with token ID 8. So “8” will appear on available_token_ids list. Example URL and response are shown below:

```shell
https://api-dev.reddio.com/v2/balances?stark_key=0x30affb48fcf8bffaa40611a1f7a10e7ce9a4b0c98bae4dced219dd01d3db4fb
```

```json
{
    "status": "OK",
    "error": "",
    "error_code": 0,
    "data": [
        {
            "asset_id": "",
            "contract_address": "0x7aa10dc07a32bf7284171594839ac3b86d7a23aa", //please notify this line
            "balance_available": 2,
            "balance_frozen": 0,
            "type": "ERC721M",
            "decimals": 0,
            "symbol": "TT",
            "quantum": 1,
            "display_value": "2",
            "display_frozen": "0",
            "available_token_ids": [
                "8", //please notify this line
                "9"
            ],
            "frozen_token_ids": [],
            "base_uri": ""
        }
    ]
}
```

Second, if you set a valid base_uri on your contracts. You will see your NFTs through  [Reddio’s marketplace demo](https://demos.reddio.com/) by simply connect your wallet.
# Check Your ETHs/ERC20s/NFTs Balance

## **View smart contract details on layer 1**

After you have your smart contract address, you can view your contract detail through **[etherscan.io](http://etherscan.io/)**.

If you are deploying to Görli Network, you can view your contract at`https://goerli.etherscan.io/address/{your_smart_contract_address}` .

If you are deploying to mainnet, you can view your contract at `https://etherscan.io/address/{your_smart_contract_address}`.

For example, if your smart contract address is `0x4240e8xxxxxxxxxxxxxxxxx1` and you are using goerli network.

A valid URL would be `https://goerli.etherscan.io/address/0x4240e8xxxxxxxxxxxxxxxxx1`.

## View ****ETH/ERC20 balance on layer 2****

You can query the ETH/ERC20 balance with Reddio’s API through `https://api-dev.reddio.com/v1/balances?stark_key={your_starkkey}`.

Carefully replace {your_starkkey} with your own stark_key. Suppose your stark_key is `0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda`.

A valid URL would be `https://api-dev.reddio.com/v1/balances?stark_key=0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda`.

You will see your ETH/ERC20 balance with type “ETH” and “ERC20“, a sample response will be looked like this:

```json
{
    "status": "OK",
    "error": "",
    "error_code": 0,
    "data": {
        "list": [
            {
                "asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
                "contract_address": "eth",
                "balance_available": 68985,
                "balance_frozen": 1000,
                "type": "ETH",
                "decimals": 18,
                "symbol": "ETH",
                "quantum": 1000000000000,
                "display_value": "0.068985",
                "display_frozen": "0.001",
                "token_id": "",
                "base_uri": ""
            },
            {
                "asset_id": "0x348d9f01e42582dee55ba5db85b0ab036671786ca9e140642d7b7a010abb159",
                "contract_address": "0x57f3560b6793dcc2cb274c39e8b8eba1dd18a086",
                "balance_available": 8966000,
                "balance_frozen": 0,
                "type": "ERC20",
                "decimals": 18,
                "symbol": "RDD20",
                "quantum": 1000000000000,
                "display_value": "8.966",
                "display_frozen": "0",
                "token_id": "",
                "base_uri": ""
            }
        ],
        "total": 2
    }
}
```

You can also check your ETH/ERC20 balance through Reddio’s demo. Just go to **[https://demos.reddio.com/](https://demos.reddio.com/)** and login in with your own wallet. You will see your ETH/ERC20 right there.

## View ****ERC721/ERC721M balance on layer 2****

You can query the ERC721/ERC721M ********balance with Reddio’s API through `https://api-dev.reddio.com/v1/balances?stark_key={your_starkkey}` as well.

Carefully replace {your_starkkey} with your own stark_key. Suppose your stark_key is `0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda`.

A valid URL would be `https://api-dev.reddio.com/v1/balances?stark_key=0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda`.

You will see your ERC721/ERC721M balance with type “ERC721” and “ERC721M“, a sample response will be looked like this:

```json
{
   "status":"OK",
   "error":"",
   "error_code":0,
   "data":{
      "list":[
         {
            "asset_id":"0x4009b9796fa021cbac2a5034c56dd4c5c0b46e71dd22856a9a2ff2736324552",
            "contract_address":"0x7aa10dc07a32bf7284171594839ac3b86d7a23aa",
            "balance_available":1,
            "balance_frozen":0,
            "type":"ERC721M",
            "decimals":0,
            "symbol":"TT",
            "quantum":1,
            "display_value":"1",
            "display_frozen":"0",
            "token_id":"10",
            "base_uri":""
         },
         {
            "asset_id":"0xcfb95dfecf98fa393db76de409510b77a84ec8f5bc11a70fdb0a885eb11624",
            "contract_address":"0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
            "balance_available":1,
            "balance_frozen":0,
            "type":"ERC721",
            "decimals":0,
            "symbol":"REDDIO721",
            "quantum":1,
            "display_value":"1",
            "display_frozen":"0",
            "token_id":"284",
            "base_uri":"https:\/\/metadata.reddio.com\/api\/tokens\/"
         }
      ],
      "total":2
   }
}
```

If you want to see your ERC721/ERC721M aggreagated under the same contract_address. You can try [balance API v2](https://docs.reddio.com/guide/api-reference/balance.html#get-balances-v2).

Finally, you can check your NFTs through Reddio’s demo. Just go to **[https://demos.reddio.com/](https://demos.reddio.com/)** and login in with your own wallet. You will see your NFTs right there.

## View ****ERC721/ERC721M collection on layer 2****

If you want to view ERC721/ERC721M collections’ detail which contains all the information about a single collection. You can Reddio’s NFT API through `https://api-dev.reddio.com/v1/nfts/{smart_contract_address}`.

Carefully replace {smart_contract_address} parameters with your own smart contract address or collection contract address. Suppose your contract address is `0x4240e8xxxxxxxxxxxxxxxxx1`.

A valid URL would be `https://api-dev.reddio.com/v1/nfts/0x4240e8xxxxxxxxxxxxxxxxx1`.
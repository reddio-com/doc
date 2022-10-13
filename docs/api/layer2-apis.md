## **API Reference**

The Reddio API is organized around **[REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)**. Our API has predictable resource-oriented URLs, accepts **[form-encoded](https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms)** request bodies, returns **[JSON-encoded](http://www.json.org/)** responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Reddio API in testnet at api-dev.reddio.com , which doesn't affect your live data or interact with the mainnet. And you can switch to [api.reddio.com](http://api.reddio.com) for production/mainnet.

## **Authentication**

The Reddio API uses **API keys** to authenticate requests. You can view and manage your API keys in **the Reddio Dashboard**.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via bearer auth, use `-H "x-api-key: rk-181872fb-4326-4b58-ae69-afb66cc487bc"`.

All API requests must be made over **[HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure)**. Calls made over plain HTTP will fail. API requests without authentication will also fail.

## **Errors**

Reddio uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the **`2xx`** range indicate success. Codes in the **`4xx`** range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.). Codes in the **`5xx`** range indicate an error with Reddio's servers (these are rare).

Some **`4xx`** errors that could be handled programmatically (e.g., a card is **[declined](https://stripe.com/docs/declines)**) include an **[error code](https://stripe.com/docs/error-codes)** that briefly explains the error reported.

### The following APIs are in Private Preview

**1. Deposit/Transfer/Withdraw ETH between L1 and L2**

- Register ETH on layer 2
- Deposit ETH to layer 2
- Transfer ETH between two layer 2 accounts
- Withdraw ETH from layer 2

**2. Deposit/Transfer/Withdraw ERC20 between layer 1 and layer 2**

- Create a new ERC20 token
- Register the ERC20 token on layer 2
- Deposit the ERC20 token to layer 2
- Transfer the ERC20 token between two layer 2 accounts
- Withdraw the ERC20 from layer 2

**3. Deposit/Transfer/Withdraw ERC721 between layer 1 and layer 2**

- Create a new ERC721 token
- Register the ERC721 token on layer 2
- Deposit the ERC721 token to layer 2
- Transfer the ERC721 token between two layer 2 accounts
- Withdraw the ERC721 token from layer 2

**4. Mint ERC721 on layer 2, transfer between layer 2, withdraw to layer 1, then deposit to layer 2**

- Create a new ERC721 Mintable token
- Register the ERC721 token on layer 2
- Mint the ERC721 token on layer 2
- Transfer the ERC721 token between two layer 2 accounts
- Withdraw the ERC721 token from layer 2
- Deposit the ERC721 token to layer 2

## Endpoint

```
https://api-dev.reddio.com
```

Headers:

```
Content-Type: application/json
x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx
```

## Retrieve Project

This endpoint can retrieve projects and the related UUIDs of each projects for further usage

```jsx
GET /v1/project
```

```jsx
curl -v https://api-dev.reddio.com/v1/project -H 'content-type: application/json' -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx'
```

```jsx
RESPONSE
{
    "status": "OK",
    "data": [
        {
            "project_name": "Dev Project on Testnet",
            "project_uuid": "05a07400-8043-46e9-bbff-d924fcd41fd1",
            "created_at": "2022-07-04T06:20:37.000000Z",
            "contracts": [
                {
                    "contract_uuid": "72b00726-33d4-44d4-821c-c1e53f5679c8",
                    "address": "0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1",
                    "type": "ERC20M",
                    "count": "2000",
                    "chain_status": "pending",
                    "name": null,
                    "decimals": null,
                    "symbol": null,
                    "quantum": "",
                    "total_supply": null,
                    "asset_type": null,
                    "asset_info": null,
                    "deleted_at": null,
                    "created_at": "2022-07-04T06:20:40.000000Z"
                }
            ]
        }
    ],
    "error": ""
}
```

## Register Token

Register token on layer 2 contracts to your project generated from dashboard

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**contract_count** REQUIRED

Count of contract token 

**project_uuid** REQUIRED

The UUID of project for this contract to be created.

**type** REQUIRED

*Type of token*

Possible enum values

ETH, ERC20, ERC721, ERC721M

```jsx
POST /v1/project/contract
```

```jsx
curl -v https://api-dev.reddio.com/v1/project/contract -H 'content-type: application/json' -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx' -d '{"contract_address":"0x35b346a2bc5f90855340b50325f727083691063e","contract_type":"ERC721","contract_count":2000,"project_uuid":"05a07400-8043-46e9-bbff-d924fcd41fd1"}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
			"message": "Contract created"
	}
}
```

## Retrieve the vault

Retrieve the vault id 

**Parameters**

**asset_id** REQUIRED

The identity of the token as represented on-chain (external ERC-20/ERC-721/ERC-1155 for deposit/withdraw goes through, correct quantization, etc)

**stark_keys** REQUIRED

A unique key that identifies the user in the off-chain state

```jsx
GET /v1/vaults
```

```jsx
curl -v 'https://api-dev.reddio.com/v1/vault?asset_id=0x4240e8b8c0b6E6464a13F555F6395BbfE1c4bdf1&stark_keys=0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"vault_id": 14
	}
}
```

## Withdrawal

Withdraw assets from layer 2 to layer 1

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**token_id** REQUIRED

Asset/token id

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens to be withdrawn to layer 1 from layer 2

```jsx
POST /v1/withdrawal
```

```jsx
curl -v  https://api-dev.reddio.com/v1/withdrawal  -H 'content-type: application/json'  -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "token_id":"1", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":10}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 10
	}
}

```

## Get nonce by stark_key

Retrieve the unique nonce by stark_key

**Parameters**

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

```jsx
GET /v1/nonce
```

```jsx
curl -v  'https://api-dev.reddio.com/v1/nonce?stark_key=0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda'
```

```jsx
RESPONSE
{
    "status": "OK",
    "error": "",
    "data": {
        "nonce": 0
    }
}
```

## Mint a ERC721 token

Mint ERC721 token on layer 2

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens mint on layer 2

```jsx
POST /v1/mints
```

```jsx
curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":"10"}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 11
	}
}
```

## Transfer

Transfer assets from sender to receiver on layer 2

**Parameters**

**token_id** REQUIRED

Asset/token id

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens to be transferred

**nonce** REQUIRED

a one-time code selected in a random or pseudo-random manner that is used to securely transmit a main password, preventing replay attacks. In layer 2, every transaction has a nonce. The nonce is the number of transactions sent from a given address.

**vault_id** REQUIRED

The vault id from the sender

**receiver** REQUIRED

The wallet address of the receiver

**receiver_vault_id** REQUIRED

The receiver's vault id

**expiration_timestamp**

The period to expire for the transfer, unit is seconds

**signature** REQUIRED

The signature to make sure the transaction is triggered by you.

```jsx
POST /v1/transfer
```

```jsx
curl -v  https://api-dev.reddio.com/v1/transfer  -H 'content-type: application/json'  -d '{ "asset_id":"0x284698644e92ad774d6e601d9f0cefa137872d0eeadc92ea3fe1fb973d32594", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":10, "nonce":100, "vault_id":1000, "receiver": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "receiver_vault_id":10,"expiration_timestamp":4194303, "signature":{"r":"0xab","s":"0xbb"}}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 12
	}
}
```

## WithdrawalTo

Withdrawal to another Ethereum address for ERC-20/ETH and ERC-721

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

asset**_id** REQUIRED

Asset id

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens to be transferred

token**_id** REQUIRED

Token id

**nounce** REQUIRED

?

**vault_id** REQUIRED

The vault id from the sender

**receiver** REQUIRED

The wallet address of the receiver

**receiver_vault_id** REQUIRED

The receiver's vault id

**expiration_timestamp**

The period to expire for the transfer, unit is seconds

**signature** REQUIRED

?

```jsx
POST /v1/withdrawalto
```

```jsx
curl -v  https://api-dev.reddio.com/v1/withdrawalto  -H 'content-type: application/json'  -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "asset_id":"0x284698644e92ad774d6e601d9f0cefa137872d0eeadc92ea3fe1fb973d32594", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":10, "token_id":"1" ,"nonce":100, "vault_id":1000, "receiver": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "receiver_vault_id":10,"expiration_timestamp":4194303, "signature":{"r":"0xab","s":"0xbb"}}'
```

```jsx

RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 13
	}
}

```

## Get Asset ID

Retrieve asset id based on contract address

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**type** REQUIRED

*Type of token*

Possible enum values

ETH, ERC20, ERC20M, ERC721, ERC721M

**token_id** REQUIRED

Asset/token id

```jsx
GET /v1/assetid
```

```jsx
curl -v  https://api-dev.reddio.com/v1/assetid?type=ERC20&contract_address=0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1&token_id=1 -H 'content-type: application/json'
```

```jsx
RESPONSE
{
    "status": "OK",
    "error": "",
    "data": {
        "asset_id": "0x264216e50c3b4cc251b5a220f1369bb7fe798b63f7837ae7240ad125cb00ab"
    }
}
```

## Get Balances

Retrieve account balances in batch based on the stark_key

**Parameters**

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

```jsx
GET /v1/balances
```

```jsx
curl -v  https://api-dev.reddio.com/v1/balances?stark_key=0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c  -H 'content-type: application/json'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": [
		{
			"asset_id": "0x1142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e",
			"contract_address": "eth",
			"balance_available": 400000000002400,
			"type": "ETH",
			"decimals": 18,
			"symbol": "",
			"quantum": 1,
			"display_value": "0.0004000000000024"
		}
	]
}
```

## Get Balance

Retrieve account balance based on the stark_key and asset_id

**Parameters**

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**asset_id** REQUIRED

The identity of the token as represented on-chain (external ERC-20/ERC-721/ERC-1155 for deposit/withdraw goes through, correct quantization, etc)

```jsx
GET /v1/balance
```

```jsx
curl -v  https://api-dev.reddio.com/v1/balance?stark_key=0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c&asset_id=0x1142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e -H 'content-type: application/json'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"asset_id": "0x1142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e",
		"contract_address": "eth",
		"balance_available": 400000000002400,
		"type": "ETH",
		"decimals": 18,
		"symbol": "",
		"quantum": 1,
		"display_value": "0.0004000000000024"
	}
}
```

## Get Records

Retrieve records based on start_key

**Parameters**

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

```jsx
GET /v1/records
```

```jsx
curl -v  https://api-dev.reddio.com/v1/records?stark_key=0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c  -H 'content-type: application/json'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": [
		{
			"stark_key": "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
			"sequence_id": 1,
			"reason": "",
			"status": 1,
			"command": {
					"amount": "1",
					"asset_id": "0x5c60f3aabcf75f1c9a23c3fadd93668b17db9a1ebfdf8581e62712eb01bcff",
					"expiration_timestamp": 4194303,
					"nonce": 1,
					"receiver": "0x92ae986e4c77117113d94266f9787a4d46c63305",
					"receiver_vault_id": 50159,
					"signature": {
							"r": "0x4aa896c67e6456779d290a7d009980e85bad9f8b2aa74f6c72b5d59ff4f13d6",
							"s": "0x181ee5bd39464cb3cfcdee258ee0e6f3f1dec7bed39c6a7ceb432b16b77caab"
					},
					"stark_key": "0xb137d0df14306f2dc643132ef5b4991a40f14224fdfaac4dbbc137430e732b",
					"vault_id": 50158
				}
		},
		{
			"stark_key": "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
			"sequence_id": 2,
			"reason": "",
			"status": 1,
			"command": {
					"amount": "1",
					"asset_id": "0x5c60f3aabcf75f1c9a23c3fadd93668b17db9a1ebfdf8581e62712eb01bcff",
					"expiration_timestamp": 4194303,
					"nonce": 2,
					"receiver": "0x92ae986e4c77117113d94266f9787a4d46c63305",
					"receiver_vault_id": 50159,
					"signature": {
							"r": "0x64a9bcb219a05892fc8a067fc07f314fdbcd38346f7909c9055e90dbb2a4a15",
							"s": "0x8ef245f09466a9c64bc74dc102b79f7b2ee2f5367ee9c5e136ec879656a95f"
					},
					"stark_key": "0xb137d0df14306f2dc643132ef5b4991a40f14224fdfaac4dbbc137430e732b",
					"vault_id": 50158
			}		
		}
	]
}
```

## Get Record

Retrieve record based on start_key and sequence id

**Parameters**

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**sequence_id** REQUIRED

Auto-increment ID for every transaction command.

```jsx
POST /v1/record
```

```jsx
curl -v  https://api-dev.reddio.com/v1/record?stark_key=0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c&sequence_id=2  -H 'content-type: application/json'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"stark_key": "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
		"sequence_id": 2,
		"reason": "",
		"status": 1,
		"command": {
				"amount": "1",
				"asset_id": "0x5c60f3aabcf75f1c9a23c3fadd93668b17db9a1ebfdf8581e62712eb01bcff",
				"expiration_timestamp": 4194303,
				"nonce": 2,
				"receiver": "0x92ae986e4c77117113d94266f9787a4d46c63305",
				"receiver_vault_id": 50159,
				"signature": {
						"r": "0x64a9bcb219a05892fc8a067fc07f314fdbcd38346f7909c9055e90dbb2a4a15",
						"s": "0x8ef245f09466a9c64bc74dc102b79f7b2ee2f5367ee9c5e136ec879656a95f"
				},
				"stark_key": "0xb137d0df14306f2dc643132ef5b4991a40f14224fdfaac4dbbc137430e732b",
				"vault_id": 50158
		}
	}
}
```


## Order

Place an order on Reddio.

**Parameters**

**amount** REQUIRED

The amount you wish to buy/sell.

**amount_buy** REQUIRED

The amount you wish to buy/sell, for buyer it's the token you wish to buy, for seller it's the price you want to sell.

**amount_sell** REQUIRED

The amount you wish to buy/sell, for buyer it's the currency you wish to give for the token.

**token_buy** REQUIRED

For buyer, it's token you wish to buy, for seller it's the amount currency you wish to sell.

**token_sell** REQUIRED

For seller, it's token you wish to sell, for buyer it's the amount currency you wish to give for the token.

**base_token** REQUIRED

For seller it's the currency used for selling the token.

**vault_id_buy** REQUIRED

For buyers, it’s the vault ID used to pay.

**vault_id_sell** REQUIRED

For sellers, it’s the vault ID used to sell.

**expiration_timestamp** REQUIRED

Expiration timestamp.

**nonce** REQUIRED

The nonce for account_id.

**signature** REQUIRED

The signature for the transaction, can be calculated by [https://github.com/reddio-com/red-py-sdk](https://github.com/reddio-com/red-py-sdk).

**account_id** REQUIRED

The account_id.

**direction** REQUIRED

The direction for transaction, 0 is for ASK, 1 is for BID.

**fee_info** REQUIRED

The currency used for order.

```jsx
POST /v1/order
```

Seller example

```jsx
curl https://api-dev.reddio.com/v1/order -H 'content-type: application/json' -d \
'{
   "amount":"1",
   "amount_buy":"1000",
   "amount_sell":"1",
   "token_buy":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "price":"1000",
   "token_sell":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "quote_token":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "base_token":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "vault_id_buy":"21535787",
   "vault_id_sell":"21639066",
   "expiration_timestamp":4194303,
   "nonce":52,
   "signature":{
      "r":"0x54a0add087576b75244236dc2d53befdaacd5e5bb01dd988f7b34d7349844e7",
      "s":"0x38c262afd2a0132759cd3c7eb37c52107bf29aa0438a7832c5be7cdbc7a9849"
   },
   "account_id":"0x13b314ccfe334151abc7e1ab50c4c5d77f8941777d1616cb381d9d9b2273bdb",
   "direction":0,
   "fee_info":{
        "fee_limit":5,
        "token_id":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
        "source_vault_id":21535787
        }
}'
```

Buyer example

```jsx
curl https://api-dev.reddio.com/v1/order -H 'content-type: application/json' -d \
'{
   "amount":"1",
   "amount_buy":"1",
   "amount_sell":"1000",
   "token_buy":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "price":"1000",
   "token_sell":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "quote_token":"0x400fcfa0889b788c49ecdbe90b494b4dc692532467466b88c1179779096a163",
   "base_token":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
   "vault_id_buy":"21648107",
   "vault_id_sell":"21433994",
   "expiration_timestamp":4194303,
   "nonce":52,
   "signature":{
      "r":"0x4d308e89375fb3d6eaea836aa6615f6e52a4842da3b2d2de73b53996da7e082",
      "s":"0x2d532e42c43756a179496245c124acf082418081f0b3f94522e9bc5fc0f914"
   },
   "account_id":"0x3d2161b60487fb223760e586efaf70004ddc018b53b8cdb39cb75ef4b4e25f7",
   "direction":1,
   "fee_info":{
	"fee_limit":5,
	"token_id":"0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
	"source_vault_id":21433994
	}
}'
```

## Marketplace

### For marketplace fee, there are some APIs and flow need to be taken care

1. Create a marketplace object with marketplace fee payee address, and fee rate using API(Javascript SDK will be supported soon)
    1. marketplace_fee (the fee rate paid for marketplace, it can be 0.015(that means 1.5% on the seller’s side. we do not charge buyer’s side)
    2. marketplace_pay_address: the stark key of marketplace’s fee receiver
    3. X-API-Key: get from dashboard 

```jsx
curl -X POST "https://api-dev.reddio.com/v1/marketplace" -d '{"marketplace_name":"Reddio2",
"marketplace_payee_address":"0x553d1d249b381e92649a6b8216ea91aad3b786a412536b82aa39f02177f897d",
"marketplace_fee":"0.015"}' \
-H 'X-API-Key:rk-1236d5fc-f4c1-4a19-a2ff-9c29e3a70e37' \
-H 'content-type: application/json'
```

It will return marketplace uuid

```jsx
{"status":"OK","data":{"message":"Marketplace created.","marketplace_uuid":"f11e414d-0b32-44d0-a36a-964f6e25b6c4"},"error":""}
```

1. Add marketplace uuid in buy order & sell order

[https://github.com/reddio-com/red-js-sdk/blob/main/src/utils/orderParams.ts#L20](https://github.com/reddio-com/red-js-sdk/blob/main/src/utils/orderParams.ts#L20)

1. After order deal. reddio will charge 0.5% fee, and marketplace will auto receive 1.5%(when set marketplace_fee to 0.015) immediately

### For cancel order.  the request need sign

the API is here, it need sign by stark_private_key [https://github.com/reddio-com/red-js-sdk/blob/main/src/api/order.ts#L47](https://github.com/reddio-com/red-js-sdk/blob/main/src/api/order.ts#L47)

### For NFT APIs

The endpoint like [https://api-dev.reddio.com/v1/nfts/0x941661bd1134dc7cc3d107bf006b8631f6e65ad5](https://api-dev.reddio.com/v1/nfts/0x941661bd1134dc7cc3d107bf006b8631f6e65ad5) will get nfts and related orders

it returns like

```jsx
{
	"status": "OK",
	"error": "",
	"error_code": 0,
	"data": [
			{
					"token_id": "213",
					"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
					"stark_key": "0x4c2d19ac0a343218cebcea5ab124440a0650744c081247b8e4146877d2a5cad",
					"symbol": "REDDIO721",
					"eth_address": "0x067ceABFb722CA0034f39b88EE4004dAbc8ef33b",
					"order": null
			},
			{
					"token_id": "214",
					"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
					"stark_key": "0x4c2d19ac0a343218cebcea5ab124440a0650744c081247b8e4146877d2a5cad",
					"symbol": "REDDIO721",
					"eth_address": "0x067ceABFb722CA0034f39b88EE4004dAbc8ef33b",
					"order": {
							"order_id": 300137,
							"stark_key": "0x4c2d19ac0a343218cebcea5ab124440a0650744c081247b8e4146877d2a5cad",
							"price": "200",
							"direction": 0,
							"amount": "1",
							"un_filled": "1",
							"symbol": {
									"base_token_asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
									"quote_token_asset_id": "0x245a4ba263774b82d45baa8b52b26e681ca161ac6aeef48597ddad160419736",
									"base_token_contract_addr": "eth",
									"quote_token_contract_addr": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
									"base_token_name": "ETH",
									"quote_token_name": "REDDIO721"
							},
							"fee_rate": "200",
							"token_type": "ERC721",
							"token_id": "214",
							"display_price": "0.0002"
					}
			}
	]
}
```

By default, there is no eth_address, we will provide user register on client(now we can use python script to register and not verify on eth_address(will using EIP-712 to sign it after holiday)

### For Collection APIs

we will add description/image_url/external_link/banner_image_url in dashboard, now can set we 

 

```jsx
curl -X POST "https://api-dev.reddio.com/v1/project/contract" -d '{
  "contract_address":"0x35b346a2bc5f90855340b50325f727083691063e",
  "contract_type":"ERC721",
  "contract_count": 2000,
  "project_uuid": "05a07400-8043-46e9-bbff-d924fcd41fd1",
  "name": "Some name",
  "description": "Some desc",
  "image_url": "https://example.com/image_url",
  "external_link": "https://example.com/image_url",
  "banner_image_url": "https://example.com/image_url"
}' \
-H 'X-API-Key:rk-1236d5fc-f4c1-4a19-a2ff-9c29e3a70e37' \
-H 'content-type: application/json'
```

Then we can query the collections like

[https://api-dev.reddio.com/v1/collection/0x35b346a2bc5f90855340b50325f727083691063e](https://api-dev.reddio.com/v1/collection/0x35b346a2bc5f90855340b50325f727083691063e)

It display like

```jsx
{
	"status": "OK",
	"data": {
		"contract_address": "0x35b346a2bc5f90855340b50325f727083691063e",
		"type": "ERC721",
		"count": 2000,
		"name": null,
		"decimals": 0,
		"symbol": "REDDIO721",
		"quantum": "1",
		"total_supply": "",
		"asset_type": "0x2d6e7b6a8e809f94ed4bef245e06437c18e033044a5787e15eda57be47929f",
		"asset_info": "0x0257179200000000000000000000000035b346a2bc5f90855340b50325f727083691063e",
		"metadata_url": null,
		"name": "Some name",
		"description": "Some desc",
		"image_url": "https://example.com/image_url",
		"external_link": "https://example.com/image_url",
		"banner_image_url": "https://example.com/image_url"
	},
	"error": ""
}
```
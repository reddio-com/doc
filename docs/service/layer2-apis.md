## **API Reference**

The Reddio API is organized around **[REST](http://en.wikipedia.org/wiki/Representational_State_Transfer)**. Our API has predictable resource-oriented URLs, accepts **[form-encoded](https://en.wikipedia.org/wiki/POST_(HTTP)#Use_for_submitting_web_forms)** request bodies, returns **[JSON-encoded](http://www.json.org/)** responses, and uses standard HTTP response codes, authentication, and verbs.

You can use the Reddio API in testnet at api-dev.reddio.com , which doesn't affect your live data or interact with the mainnet. And you can switch to [api.reddio.com](http://api.reddio.com) for production/mainnet.

## **Authentication**

The Reddio API uses **API keys** to authenticate requests. You can view and manage your API keys in **the Reddio Dashboard**.

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via bearer auth, use -H "x-api-key: rk-181872fb-4326-4b58-ae69-afb66cc487bc".

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

### Retrieve Project

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

### Register Token

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

### Retrieve the ****vault****

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

### Withdrawal

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

### ****Get nonce by stark_key****

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

### ****Mint a ERC721 token****

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

### ****Transfer****

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

The receiver’s vault id

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

### ****WithdrawalTo****

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

The receiver’s vault id

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

### ****Get Asset ID****

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
curl -v  https://api-dev.reddio.com/v1/assetid  -H 'content-type: application/json'  -d '{ "type":"ERC20", "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "token_id":"1"}'
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
curl -v  https://api-dev.reddio.com/v1/balances  -H 'content-type: application/json'  -d '{ "stark_key":"0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c"'
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
POST /v1/balance
```

```jsx
curl -v  https://api-dev.reddio.com/v1/balance  -H 'content-type: application/json'  -d '{ "stark_key":"0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c", "asset_id":"0x1142460171646987f20c714eda4b92812b22b811f56f27130937c267e29bd9e"}'

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
POST /v1/records
```

```jsx
curl -v  https://api-dev.reddio.com/v1/records  -H 'content-type: application/json'  -d '{ "stark_key":"0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c"}'
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

?

```jsx
POST /v1/record
```

```jsx
curl -v  https://api-dev.reddio.com/v1/record  -H 'content-type: application/json'  -d '{ "stark_key":"0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c", "sequence_id":"2"}'

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
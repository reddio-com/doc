# Balance

## Get balances

Retrieve account balances in batch based on the stark_key

**Parameters**

---

<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

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
	"error_code": 0,
	"data": {
		"list": [
			{
				"asset_id": "0x275e2efd2e4940ab9a8592588334f05986ccac4a3f70108f0515c06ca94246",
				"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
				"balance_available": 1,
				"balance_frozen": 0,
				"type": "ERC721",
				"decimals": 0,
				"symbol": "REDDIO721",
				"quantum": 1,
				"display_value": "1",
				"display_frozen": "0",
				"token_id": "610",
				"base_uri": ""
			},
			{
				"asset_id": "0x135caafee332f20a186073b49e12439d2e27ddfb2150d58110b1fd839c6cf78",
				"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
				"balance_available": 0,
				"balance_frozen": 0,
				"type": "ERC721",
				"decimals": 0,
				"symbol": "REDDIO721",
				"quantum": 1,
				"display_value": "0",
				"display_frozen": "0",
				"token_id": "671",
				"base_uri": ""
			}
		],
		"total": 2
	}
}
```

## Get balance

Retrieve account balance based on the stark_key and asset_id

**Parameters**

---

<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

<strong style='color:red'>*</strong>**asset_id** <strong style='color:#8792a2'>string</strong>

The identity of the token as represented on-chain (external ERC-20/ERC-721/ERC-1155 for deposit/withdraw goes through, correct quantization, etc)

```jsx
GET /v1/balance
```

```jsx
curl -v https://api-dev.reddio.com/v1/balance?stark_key=0x6ecaebbe5b9486472d964217e5470380782823bb0d865240ba916d01636310a&asset_id=0x385f3bf3fb3db6b4f152c84dd7a508d4b609caa97535725fe2828e8fe351b9d -H 'content-type: application/json'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"error_code": 0,
	"data": {
		"asset_id": "0x385f3bf3fb3db6b4f152c84dd7a508d4b609caa97535725fe2828e8fe351b9d",
		"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
		"balance_available": 0,
		"balance_frozen": 0,
		"type": "ERC721",
		"decimals": 0,
		"symbol": "REDDIO721",
		"quantum": 1,
		"display_value": "0",
		"display_frozen": "0",
		"token_id": "674",
		"base_uri": ""
	}
}
```
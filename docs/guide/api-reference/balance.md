# Balance

## Get balances

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

## Get balance

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
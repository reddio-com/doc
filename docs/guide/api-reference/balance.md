# Balance

## Get balances V1

Retrieve account balances in batch based on the stark_key

**Parameters**

---

<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

**limit** <strong style='color:#8792a2'>string</strong>

Limit entries for query records.

---

**page** <strong style='color:#8792a2'>string</strong>

Page for records.

---

**contract_address** <strong style='color:#8792a2'>string</strong>

Contract address of token (ERC20 or ERC721).

```jsx
GET /v1/balances
```

**`cURL` Example**
```sh
curl -v https://api-dev.reddio.com/v1/balances?stark_key=0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c  -H 'content-type: application/json'
```

**Example response**
```json
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
		"total": 1,
		"current_page": 1,
		"page_size": 100,
		"total_page": 1
	}
}
```

## Get balances V2

Retrieve account balances in batch based on the stark_key, this API aggregates tokens by `contract_address`.

**Parameters**

---

<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

**contract_address** <strong style='color:#8792a2'>string</strong>

Contract address of token (ERC20 or ERC721).

```jsx
GET /v2/balances
```

**`cURL` Example**
```sh
curl -v https://api-dev.reddio.com/v2/balances?stark_key=0x1c9d32ba737263bbdc274c474488179ce4bc09173339b7f4f495caf0040337c  -H 'content-type: application/json'
```

**Example response**
```json
{
	"status": "OK",
	"error": "",
	"error_code": 0,
	"data": [
		{
			"asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
			"contract_address": "eth",
			"balance_available": 291702,
			"balance_frozen": 2498,
			"type": "ETH",
			"decimals": 18,
			"symbol": "ETH",
			"quantum": 1000000000000,
			"display_value": "0.291702",
			"display_frozen": "0.002498"
		},
		{
			"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
			"balance_available": 21,
			"balance_frozen": 0,
			"type": "ERC721",
			"decimals": 0,
			"symbol": "REDDIO721",
			"quantum": 1,
			"display_value": "21",
			"display_frozen": "0",
			"available_token_ids": [
				"38",
				"73",
				"202",
				"203",
				"210",
				"211",
				"212",
				"213",
				"215",
				"216",
				"219",
				"220",
				"252",
				"312",
				"314",
				"318",
				"319",
				"320",
				"341",
				"349",
				"350"
			]
		},
		{
			"contract_address": "0xe4db0ced9cbe4a346fd3097bddf7ce1a8d079169",
			"balance_available": 1,
			"balance_frozen": 0,
			"type": "ERC721M",
			"decimals": 0,
			"symbol": "REDDIO",
			"quantum": 1,
			"display_value": "1",
			"display_frozen": "0",
			"available_token_ids": [
				"21000"
			]
		}
	]
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

**`cURL` Example**
```sh
curl -v https://api-dev.reddio.com/v1/balance?stark_key=0x6ecaebbe5b9486472d964217e5470380782823bb0d865240ba916d01636310a&asset_id=0x385f3bf3fb3db6b4f152c84dd7a508d4b609caa97535725fe2828e8fe351b9d -H 'content-type: application/json'
```

**Example response**
```json
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
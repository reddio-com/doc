# Balance

## getBalances

Retrieve account balances in batch based on the `stark_key`.

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

**limit** <strong style='color:#8792a2'>number</strong>

Limit entries for query records.

---

**page** <strong style='color:#8792a2'>number</strong>

Page for records.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

### Example

```tsx
// v1
const { data } = await reddio.apis.getBalances({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
  page: 1,
  limit: 10,
});
```

### Return

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
		"total": 2
	}
}
```

## getBalancesV2

> version > 0.4.1

Retrieve account balances in batch based on the stark_key, this API aggregates tokens by `contract_address`.

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

### Example

```tsx
const { data } = await reddio.apis.getBalancesV2({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
  page: 1,
  limit: 10,
});
```

### Return

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

## getBalance()

Retrieve account balance based on the `stark_key` and `asset_id`.

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

<strong style='color:red'>*</strong>**assetId** <strong style='color:#8792a2'>string</strong>

The identity of the token as represented on-chain (external ERC-20/ERC-721/ERC-1155 for deposit/withdraw goes through, correct quantization, etc).

### Example

```tsx
const { data } = await reddio.apis.getBalance({
  starkKey: "0x6ecaebbe5b9486472d964217e5470380782823bb0d865240ba916d01636310a",
  assetId: "0x385f3bf3fb3db6b4f152c84dd7a508d4b609caa97535725fe2828e8fe351b9d"
});
```

### Return 

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

# Record

## Get records

Retrieve records based on start_key

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
GET /v1/records
```

**`cURL` Example**
```sh
curl -v  https://api-dev.reddio.com/v1/records?stark_key=0x6736f7449da3bf44bf0f7bdd6463818e1ef272641d43021e8bca17b32ec2df0&limit=3&page=2  -H 'content-type: application/json'
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
				"amount": "1",
				"order": {
					"base_asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
					"base_asset_name": "ETH",
					"base_contract_address": "eth",
					"direction": 0,
					"display_price": "0.001",
					"fee_asset_name": "ETH",
					"fee_taken": "20",
					"fee_token_asset": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
					"filled": "1",
					"price": "1000",
					"quote_asset_id": "0xcd7426893d55aeb8aebb3e8cd4942d62f7566879ca013291c93fb2ed8b1fc1",
					"quote_asset_name": "REDDIO721",
					"quote_asset_type": "ERC721",
					"quote_contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
					"token_id": "499",
					"volume": "1000"
				},
				"record_type": 7,
				"sequence_id": 300517,
				"stark_key": "0x6736f7449da3bf44bf0f7bdd6463818e1ef272641d43021e8bca17b32ec2df0",
				"status": 1,
				"time": 1667786575
			},
			{
				"amount": "1",
				"order": {
					"base_asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
					"base_asset_name": "ETH",
					"base_contract_address": "eth",
					"direction": 0,
					"display_price": "0.001",
					"fee_asset_name": "ETH",
					"fee_taken": "20",
					"fee_token_asset": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
					"filled": "1",
					"price": "1000",
					"quote_asset_id": "0x212cc1ee0a97b49c5a308864e7aaea701fac36e5028b247f195a0a25631b162",
					"quote_asset_name": "REDDIO721",
					"quote_asset_type": "ERC721",
					"quote_contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
					"token_id": "496",
					"volume": "1000"
				},
				"record_type": 7,
				"sequence_id": 300505,
				"stark_key": "0x6736f7449da3bf44bf0f7bdd6463818e1ef272641d43021e8bca17b32ec2df0",
				"status": 1,
				"time": 1667802086
			}
		],
		"total": 76
	}
}
```

**Response Parameters**

---

**record_type** <strong style='color:#8792a2'>string</strong>

Record Type, available options are shown as below.

|Record Type| ID |
|---|---|
|`DepositRecordType`| 1 |
|`MintRecordType`| 2 |
|`TransferFromRecordType`| 3 |
|`WithdrawRecordType`| 4 |
|`ASKOrderRecordType`| 7 |
|`BIDOrderRecordType`| 8 |

---

**status** <strong style='color:#8792a2'>int</strong>

status, available options are shown as below.

|Status| ID |
|---|---|
|`SubmittedToReddio`| 0 |
|`AcceptedByReddio`| 1 |
|`FailedOnReddio`| 2 |
|`AcceptedOnL2`| 3 |
|`RejectedOnL2`| 4 |
|`Rolled`| 5 |
|`AcceptedOnL1`| 6 |

## Get record

Retrieve record based on start_key and sequence id

**Parameters**

---

<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

<strong style='color:red'>*</strong>**sequence_id** <strong style='color:#8792a2'>uint</strong>

Auto-increment ID for every transaction command.

```jsx
GET /v1/record
```

**`cURL` Example**
```sh
curl -v https://api-dev.reddio.com/v1/record?stark_key=0x6736f7449da3bf44bf0f7bdd6463818e1ef272641d43021e8bca17b32ec2df0&sequence_id=300517 -H 'content-type: application/json'
```

**Example response**
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
			"order.display_price": "0.001",
			"order.fee_asset_name": "ETH",
			"order.fee_taken": "20",
			"order.fee_token_asset": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
			"order.filled": "1",
			"order.price": "1000",
			"order.quote_asset_id": "0xcd7426893d55aeb8aebb3e8cd4942d62f7566879ca013291c93fb2ed8b1fc1",
			"order.quote_asset_name": "REDDIO721",
			"order.quote_asset_type": "ERC721",
			"order.quote_contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
			"order.volume": "1000",
			"record_type": 7,
			"sequence_id": 300517,
			"stark_key": "0x6736f7449da3bf44bf0f7bdd6463818e1ef272641d43021e8bca17b32ec2df0",
			"status": 1,
			"time": 1667786575,
			"token_id": "499"
		}
	]
}
```
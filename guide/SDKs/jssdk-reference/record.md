# Record

## getRecords

Retrieve records based on `start_key`.

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

**limit** <strong style='color:#8792a2'>string</strong>

Limit entries for query records.

---

**page** <strong style='color:#8792a2'>string</strong>

Page for records.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token (ERC20 or ERC721).

---

**recordType** <strong style='color:#8792a2'>number</strong>

Type for records, available options are shown as below.


|Record Type| ID |
|---|---|
|`All`| 0 |
|`DepositRecordType`| 1 |
|`MintRecordType`| 2 |
|`TransferFromRecordType`| 3 |
|`WithdrawRecordType`| 4 |
|`FullWithDrawRecordType`| 5 |
|`TransferAll`| 6 |
|`ASKOrderRecordType`| 7 |
|`BIDOrderRecordType`| 8 |
|`OrderRecordAll`| 9 |
|`OrderStateRecordType`| 10 |
|`NFTOwnerRecordType`| 11 |

### Example

```tsx
const { data } = await reddio.apis.getRecords({
  starkKey: "0x74ee2029ebbb9051e165d6628a4389f8f4f46c76352b47b45336ea3c760c841",
  page: 1,
  limit: 10,
  contractAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
  recordType: 0,
});
```

### Example Return
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

## getRecord

Retrieve record based on start_key and sequence id.

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>*</strong>**sequenceId** <strong style='color:#8792a2'>number</strong>

Auto-increment ID for every transaction command.

### Example

```tsx
const { data } = await reddio.apis.getRecord({
  starkKey: '0x6736f7449da3bf44bf0f7bdd6463818e1ef272641d43021e8bca17b32ec2df0',
  sequenceId: 300517
});
```

### Example response
```json
{
  "status": "OK",
  "error": "",
  "error_code": 0,
  "data": [
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
        "volume": "1000",
      },
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
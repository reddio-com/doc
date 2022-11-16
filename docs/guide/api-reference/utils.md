
# Utils

## Get nonce by stark_key

Retrieve the unique nonce by stark_key

**Parameters**

---
<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

```jsx
GET /v1/nonce
```

**`cURL` Example**
```sh
curl -v 'https://api-dev.reddio.com/v1/nonce?stark_key=0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda'
```

**Example response**
```json
{
	"status": "OK",
	"error": "",
	"error_code": 0,
	"data": {
		"nonce": 0
	}
}
```

## Get stark Wallets

Create pairs of stark wallets.

**Parameters**

---
**count** <strong style='color:#8792a2'>string</strong>

The count of wallets you wish to create.

```jsx
GET /v1/wallets?count=2
```

**Example response**
```json
{
	"wallets": [
		{
			"stark_key": "0x74e4c80dccb69cf21656aeb29d5c8dd18ff0fd6cd834903de5e99e335d9c2f3",
			"stark_private_key": "0x7c359bf53995b2292abf721c2e65201caa90094f5d32e6fdc03696804507882"
		},
		{
			"stark_key": "0x5d7f88eb7fcde391f616ca3be632c371ac0296de281bc486f7c1c740f0d4686",
			"stark_private_key": "0x4898bd13573234bbc3dba0e6e8b1425f6eca2d76217ffa017ad819d1ac821fd"
		}
	]
}
```
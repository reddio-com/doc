
# Record

## Get records

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

## Get record

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
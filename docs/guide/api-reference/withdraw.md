
# Withdraw

## Withdrawal to

Withdrawal to another Ethereum address for ERC-20/ETH and ERC-721

**Parameters**

---

<strong style='color:red'>*</strong>**asset_id** <strong style='color:#8792a2'>string</strong>

Asset id

---

<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

<strong style='color:red'>*</strong>**amount** <strong style='color:#8792a2'>string</strong>

Amount of tokens to be transferred


---

<strong style='color:red'>*</strong>**nonce** <strong style='color:#8792a2'>int</strong>

---

<strong style='color:red'>*</strong>**vault_id** <strong style='color:#8792a2'>string</strong>

The vault id from the sender

---

<strong style='color:red'>*</strong>**receiver** <strong style='color:#8792a2'>string</strong>

The wallet address of the receiver

---

<strong style='color:red'>*</strong>**receiver_vault_id** <strong style='color:#8792a2'>string</strong>

The receiver's vault id

---

**expiration_timestamp** <strong style='color:#8792a2'>int</strong>


The period to expire for the transfer, unit is seconds

---

<strong style='color:red'>*</strong>**signature** <strong style='color:#8792a2'>dict</strong>


```jsx
POST /v1/withdrawalto
```

**`cURL` Example**
```sh
curl -v  https://api-dev.reddio.com/v1/withdrawalto  -H 'content-type: application/json'  -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "asset_id":"0x284698644e92ad774d6e601d9f0cefa137872d0eeadc92ea3fe1fb973d32594", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":10, "token_id":"1" ,"nonce":100, "vault_id":1000, "receiver": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "receiver_vault_id":10,"expiration_timestamp":4194303, "signature":{"r":"0xab","s":"0xbb"}}'
```

**Example payload**
```json
{
	"contract_address": "0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1",
	"asset_id": "0x284698644e92ad774d6e601d9f0cefa137872d0eeadc92ea3fe1fb973d32594",
	"stark_key": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda",
	"amount": 10,
	"token_id": "1",
	"nonce": 100,
	"vault_id": 1000,
	"receiver": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda",
	"receiver_vault_id": 10,
	"expiration_timestamp": 4194303,
	"signature": {
		"r": "0xab",
		"s": "0xbb"
	}
}
```

**Example response**
```json
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 13
	}
}
```

## Withdrawal Status

Check if your asset is ready to withdraw to L1.

**Parameters**

---

<strong style='color:red'>*</strong>**stage** <strong style='color:#8792a2'>string</strong>

Withdraw stage, currently we only support `withdrawarea`.

---

<strong style='color:red'>*</strong>**ethaddress** <strong style='color:#8792a2'>string</strong>

ETH address.

```jsx
GET /v1/withdrawal/status
```

**`cURL` Example**
```sh
curl -v  https://api-dev.reddio.com/v1/withdrawal/status?ethaddress=0x067ceABFb722CA0034f39b88EE4004dAbc8ef33b&stage=withdrawarea -H 'content-type: application/json'
```

**Example response**
```json
{
  "status": "OK",
  "data": [
    {
      "contract_address": "eth",
      "asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
      "token_id": "",
      "type": "ETH",
      "asset_type": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
      "display_value": "0.011",
      "symbol": "ETH",
      "amount": 11000
    },
    {
      "contract_address": "0x57f3560b6793dcc2cb274c39e8b8eba1dd18a086",
      "asset_id": "0x348d9f01e42582dee55ba5db85b0ab036671786ca9e140642d7b7a010abb159",
      "token_id": "",
      "type": "ERC20",
      "asset_type": "0x348d9f01e42582dee55ba5db85b0ab036671786ca9e140642d7b7a010abb159",
      "display_value": "100",
      "symbol": "RDD20",
      "amount": 100000000
    },
    {
      "contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
      "asset_id": "0x36943f9a5f1e83ff2ed74e9d2c94088c3648c1cff7184f1b565a1890f2b640f",
      "token_id": "255",
      "type": "ERC721",
      "asset_type": "0x2b405eba724b638f4cf82ccadcd2741a120d2dbc69cb89a5fc315a9c443d592",
      "display_value": "1",
      "symbol": "REDDIO721",
      "amount": 1
    }
  ],
  "error": ""
}
```

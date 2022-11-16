# Mint an ERC721 token

Mint ERC721 token on layer 2

**Parameters**

---

<strong style='color:red'>*</strong>**contract_address** <strong style='color:#8792a2'>string</strong>

Contract address of token (ERC20 or ERC721)

---

<strong style='color:red'>*</strong>**stark_key** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

<strong style='color:red'>*</strong>**amount** <strong style='color:#8792a2'>string</strong>

Amount of tokens mint on layer 2

```jsx
POST /v1/mints
```

**`cURL` Example**
```sh
curl -v  https://api-dev.reddio.com/v1/mints -H 'content-type: application/json' -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":"10"}'
```

**Example payload**
```json
{
	"contract_address": "0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1",
	"stark_key": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda",
	"amount": "10"
}
```

**Example response**
```jsx
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 11
	}
}
```
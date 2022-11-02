
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

```jsx
curl -v  https://api-dev.reddio.com/v1/withdrawalto  -H 'content-type: application/json'  -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "asset_id":"0x284698644e92ad774d6e601d9f0cefa137872d0eeadc92ea3fe1fb973d32594", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":10, "token_id":"1" ,"nonce":100, "vault_id":1000, "receiver": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "receiver_vault_id":10,"expiration_timestamp":4194303, "signature":{"r":"0xab","s":"0xbb"}}'
```

```jsx

RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 13
	}
}

```
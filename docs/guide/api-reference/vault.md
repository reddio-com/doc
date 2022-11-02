# Vault

## Retrieve vault id

Retrieve the vault id 

**Parameters**

---

<strong style='color:red'>*</strong>**asset_id** <strong style='color:#8792a2'>string</strong>

The identity of the token as represented on-chain (external ERC-20/ERC-721/ERC-1155 for deposit/withdraw goes through, correct quantization, etc)

---

<strong style='color:red'>*</strong>**stark_keys** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

```jsx
GET /v1/vaults
```

```jsx
curl -v 'https://api-dev.reddio.com/v1/vaults?asset_id=0x4240e8b8c0b6E6464a13F555F6395BbfE1c4bdf1&stark_keys=0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"vault_id": 14
	}
}
```
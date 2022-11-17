# Asset

## Get asset ID

Retrieve asset id based on contract address.

Asset ID or known as `asset_id`, is calculated based on contract address and Token ID(if token is ERC721), used as an unique identifier for specific asset. 

**Parameters**

---

<strong style='color:red'>*</strong>**contract_address** <strong style='color:#8792a2'>string</strong>

Contract address of token (ERC20 or ERC721)

---

<strong style='color:red'>*</strong>**type** <strong style='color:#8792a2'>string</strong>

*Type of token*

Possible enum values

ETH, ERC20, ERC20M, ERC721, ERC721M

---

<strong style='color:red'>*</strong>**token_id** <strong style='color:#8792a2'>string</strong>

Asset/token id

---


```jsx
GET /v1/assetid
```

**`cURL` Example**
```sh
curl -v https://api-dev.reddio.com/v1/assetid?type=ERC20&contract_address=0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1&token_id=1 -H 'content-type: application/json'
```

**Example response**
```json
{
    "status": "OK",
    "error": "",
    "data": {
        "asset_id": "0x264216e50c3b4cc251b5a220f1369bb7fe798b63f7837ae7240ad125cb00ab"
    }
}
```
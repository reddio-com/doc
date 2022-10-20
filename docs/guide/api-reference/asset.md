# Asset
## Get asset ID

Retrieve asset id based on contract address

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**type** REQUIRED

*Type of token*

Possible enum values

ETH, ERC20, ERC20M, ERC721, ERC721M

**token_id** REQUIRED

Asset/token id

```jsx
GET /v1/assetid
```

```jsx
curl -v  https://api-dev.reddio.com/v1/assetid?type=ERC20&contract_address=0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1&token_id=1 -H 'content-type: application/json'
```

```jsx
RESPONSE
{
    "status": "OK",
    "error": "",
    "data": {
        "asset_id": "0x264216e50c3b4cc251b5a220f1369bb7fe798b63f7837ae7240ad125cb00ab"
    }
}
```

# Public Function

## Get nonce by stark_key

Retrieve the unique nonce by stark_key

**Parameters**

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

```jsx
GET /v1/nonce
```

```jsx
curl -v  'https://api-dev.reddio.com/v1/nonce?stark_key=0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda'
```

```jsx
RESPONSE
{
    "status": "OK",
    "error": "",
    "data": {
        "nonce": 0
    }
}
```
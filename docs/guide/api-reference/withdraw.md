
# Withdraw

## Withdrawal

Withdraw assets from layer 2 to layer 1

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**token_id** REQUIRED

Asset/token id

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens to be withdrawn to layer 1 from layer 2

```jsx
POST /v1/withdrawal
```

```jsx
curl -v  https://api-dev.reddio.com/v1/withdrawal  -H 'content-type: application/json'  -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "token_id":"1", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":10}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 10
	}
}

```

## Withdrawal to

Withdrawal to another Ethereum address for ERC-20/ETH and ERC-721

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**asset_id** REQUIRED

Asset id

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens to be transferred

**token_id** REQUIRED

Token id

**nonce** REQUIRED

**vault_id** REQUIRED

The vault id from the sender

**receiver** REQUIRED

The wallet address of the receiver

**receiver_vault_id** REQUIRED

The receiver's vault id

**expiration_timestamp**

The period to expire for the transfer, unit is seconds

**signature** REQUIRED


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
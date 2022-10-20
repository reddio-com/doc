# Transfer

## Transfer to

Transfer assets from sender to receiver on layer 2

**Parameters**

**token_id** REQUIRED

Asset/token id

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens to be transferred

**nonce** REQUIRED

a one-time code selected in a random or pseudo-random manner that is used to securely transmit a main password, preventing replay attacks. In layer 2, every transaction has a nonce. The nonce is the number of transactions sent from a given address.

**vault_id** REQUIRED

The vault id from the sender

**receiver** REQUIRED

The wallet address of the receiver

**receiver_vault_id** REQUIRED

The receiver's vault id

**expiration_timestamp**

The period to expire for the transfer, unit is seconds

**signature** REQUIRED

The signature to make sure the transaction is triggered by you.

```jsx
POST /v1/transfer
```

```jsx
curl -v  https://api-dev.reddio.com/v1/transfer  -H 'content-type: application/json'  -d '{ "asset_id":"0x284698644e92ad774d6e601d9f0cefa137872d0eeadc92ea3fe1fb973d32594", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":10, "nonce":100, "vault_id":1000, "receiver": "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "receiver_vault_id":10,"expiration_timestamp":4194303, "signature":{"r":"0xab","s":"0xbb"}}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 12
	}
}
```
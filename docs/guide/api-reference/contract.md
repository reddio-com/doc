
# Contract
## Register token

Register token on layer 2 contracts to your project generated from dashboard

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**contract_count** REQUIRED

Count of contract token 

**project_uuid** REQUIRED

The UUID of project for this contract to be created.

**metadata_url** OPTIONAL

The metadata URL for Tokens.

**name** OPTIONAL

The name for Tokens.

**description** OPTIONAL

The description for Tokens.

**image_url** OPTIONAL

The image URL for Tokens.

**external_link** OPTIONAL

The external URL for Tokens.

**banner_image** OPTIONAL

The banner image URL for Tokens.

**type** REQUIRED

*Type of token*

Possible enum values

ETH, ERC20, ERC721, ERC721M

```jsx
POST /v1/project/contract
```

```jsx
curl -v https://api-dev.reddio.com/v1/project/contract -H 'content-type: application/json' -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx' -d '{"contract_address":"0x35b346a2bc5f90855340b50325f727083691063e","contract_type":"ERC721","contract_count":2000,"project_uuid":"05a07400-8043-46e9-bbff-d924fcd41fd1"}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
			"message": "Contract created"
	}
}
```

## Mint an ERC721 token

Mint ERC721 token on layer 2

**Parameters**

**contract_address** REQUIRED

Contract address of token (ERC20 or ERC721)

**stark_key** REQUIRED

A unique key that identifies the user in the off-chain state

**amount** REQUIRED

Amount of tokens mint on layer 2

```jsx
POST /v1/mints
```

```jsx
curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -d '{ "contract_address":"0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1", "stark_key":"0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda", "amount":"10"}'
```

```jsx
RESPONSE
{
	"status": "OK",
	"error": "",
	"data": {
		"sequence_id": 11
	}
}
```
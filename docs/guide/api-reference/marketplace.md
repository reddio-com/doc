# Marketplace

## For marketplace fee, there are some APIs and flow need to be taken care

Create a marketplace object with marketplace fee payee address, and fee rate using API(Javascript SDK will be supported soon)
    * marketplace_fee (the fee rate paid for marketplace, it can be 0.015(that means 1.5% on the seller’s side. we do not charge buyer’s side)
    * marketplace_pay_address: the stark key of marketplace’s fee receiver
    * X-API-Key: get from dashboard 

**`cURL` Example**
```sh
curl -X POST "https://api-dev.reddio.com/v1/marketplace" -d '{"marketplace_name":"Reddio2",
"marketplace_payee_address":"0x553d1d249b381e92649a6b8216ea91aad3b786a412536b82aa39f02177f897d",
"marketplace_fee":"0.015"}' \
-H 'X-API-Key:rk-xxxxxx-4326-4b58-ae69-xxxxxxxx' \
-H 'content-type: application/json'
```

It will return marketplace uuid

```json
{
	"status": "OK",
	"data": {
		"message": "Marketplace created.",
		"marketplace_uuid": "f11e414d-0b32-44d0-a36a-964f6e25b6c4"
	},
	"error": ""
}
```

## Add marketplace uuid in buy order & sell order

[https://github.com/reddio-com/red-js-sdk/blob/main/src/utils/orderParams.ts#L20](https://github.com/reddio-com/red-js-sdk/blob/main/src/utils/orderParams.ts#L20).

## After order deal
After order deal, reddio will charge 0.5% fee, and marketplace will auto receive 1.5%(when set marketplace_fee to 0.015) immediately.

## For NFT APIs

The endpoint like [https://api-dev.reddio.com/v1/nfts/0x941661bd1134dc7cc3d107bf006b8631f6e65ad5](https://api-dev.reddio.com/v1/nfts/0x941661bd1134dc7cc3d107bf006b8631f6e65ad5) will get nfts and related orders

it returns like

```json
{
  "status": "OK",
  "error": "",
  "error_code": 0,
  "data": {
    "list": [
      {
        "token_id": "1",
        "contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
        "owner": "0x1ccc27877014bc1a81919fc855ebbd1b874603283c9ea93397d970b0704e581",
        "symbol": "REDDIO721",
        "asset_id": "0x26c914ae2db0f02306e8699e3bb3cfe27cc9f86f3f196835e428bf7a5106fa2"
      },
      {
        "token_id": "2",
        "contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
        "owner": "0x74ee2029ebbb9051e165d6628a4389f8f4f46c76352b47b45336ea3c760c841",
        "symbol": "REDDIO721",
        "asset_id": "0x1c2873bae9cd0c38a658c710393911df193eb58dd65b20dd3b6b016b77b19e0"
      },
      {
        "token_id": "3",
        "contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
        "owner": "0x1ccc27877014bc1a81919fc855ebbd1b874603283c9ea93397d970b0704e581",
        "symbol": "REDDIO721",
        "asset_id": "0x30795524239792b76df89a90744d539a69728b4467e946e295d0a8216607338"
      },
    ],
    "total": 3
  }
}
```

## For collection APIs

We will add description/image_url/external_link/banner_image_url in dashboard, now it can be set by.
 
**`cURL` Example**
```sh
curl -X POST "https://api-dev.reddio.com/v1/project/contract" -d '{
  "contract_address":"0x35b346a2bc5f90855340b50325f727083691063e",
  "contract_type":"ERC721",
  "contract_count": 2000,
  "project_uuid": "05a07400-8043-46e9-bbff-d924fcd41fd1",
  "name": "Some name",
  "description": "Some desc",
  "image_url": "https://example.com/image_url",
  "external_link": "https://example.com/image_url",
  "banner_image_url": "https://example.com/image_url",
  "metadata_url": "https://metadata.example.com/"
}' \
-H 'X-API-Key:rk-xxxxxx-4326-4b58-ae69-xxxxxxxx' \
-H 'content-type: application/json'
```

For more detailed API reference on creating contracts, please refer to [Contract](contract) page.

Then we can query the collections like

[https://api-dev.reddio.com/v1/collection/0x35b346a2bc5f90855340b50325f727083691063e](https://api-dev.reddio.com/v1/collection/0x35b346a2bc5f90855340b50325f727083691063e)

It displays like

```json
{
	"status": "OK",
	"data": {
		"contract_address": "0x35b346a2bc5f90855340b50325f727083691063e",
		"type": "ERC721",
		"count": 2000,
		"name": null,
		"decimals": 0,
		"symbol": "REDDIO721",
		"quantum": "1",
		"total_supply": "",
		"asset_type": "0x2d6e7b6a8e809f94ed4bef245e06437c18e033044a5787e15eda57be47929f",
		"asset_info": "0x0257179200000000000000000000000035b346a2bc5f90855340b50325f727083691063e",
		"metadata_url": "https://metadata.example.com/",
		"name": "Some name",
		"description": "Some desc",
		"image_url": "https://example.com/image_url",
		"external_link": "https://example.com/image_url",
		"banner_image_url": "https://example.com/image_url"
	},
	"error": ""
}
```
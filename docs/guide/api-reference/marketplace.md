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
-H 'X-API-Key:rk-1236d5fc-f4c1-4a19-a2ff-9c29e3a70e37' \
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

## Cancelling order
If you need to cancel your order, you can refer to [Order](order#Cancel an order) API.

## For NFT APIs

The endpoint like [https://api-dev.reddio.com/v1/nfts/0x941661bd1134dc7cc3d107bf006b8631f6e65ad5](https://api-dev.reddio.com/v1/nfts/0x941661bd1134dc7cc3d107bf006b8631f6e65ad5) will get nfts and related orders

it returns like

```json
{
	"status": "OK",
	"error": "",
	"error_code": 0,
	"data": [
			{
					"token_id": "213",
					"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
					"stark_key": "0x4c2d19ac0a343218cebcea5ab124440a0650744c081247b8e4146877d2a5cad",
					"symbol": "REDDIO721",
					"eth_address": "0x067ceABFb722CA0034f39b88EE4004dAbc8ef33b",
					"order": null
			},
			{
					"token_id": "214",
					"contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
					"stark_key": "0x4c2d19ac0a343218cebcea5ab124440a0650744c081247b8e4146877d2a5cad",
					"symbol": "REDDIO721",
					"eth_address": "0x067ceABFb722CA0034f39b88EE4004dAbc8ef33b",
					"order": {
							"order_id": 300137,
							"stark_key": "0x4c2d19ac0a343218cebcea5ab124440a0650744c081247b8e4146877d2a5cad",
							"price": "200",
							"direction": 0,
							"amount": "1",
							"un_filled": "1",
							"symbol": {
									"base_token_asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
									"quote_token_asset_id": "0x245a4ba263774b82d45baa8b52b26e681ca161ac6aeef48597ddad160419736",
									"base_token_contract_addr": "eth",
									"quote_token_contract_addr": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
									"base_token_name": "ETH",
									"quote_token_name": "REDDIO721"
							},
							"fee_rate": "200",
							"token_type": "ERC721",
							"token_id": "214",
							"display_price": "0.0002"
					}
			}
	]
}
```

By default, there is no eth_address, we will provide user register on client(now we can use python script to register and not verify on eth_address(will using EIP-712 to sign it after holiday)

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
  "banner_image_url": "https://example.com/image_url"
}' \
-H 'X-API-Key:rk-1236d5fc-f4c1-4a19-a2ff-9c29e3a70e37' \
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
		"metadata_url": null,
		"name": "Some name",
		"description": "Some desc",
		"image_url": "https://example.com/image_url",
		"external_link": "https://example.com/image_url",
		"banner_image_url": "https://example.com/image_url"
	},
	"error": ""
}
```
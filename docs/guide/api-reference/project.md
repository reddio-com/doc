
# Project

## Retrieve project

This endpoint can retrieve projects and the related UUIDs of each projects for further usage

```jsx
GET /v1/project
```

```jsx
curl -v https://api-dev.reddio.com/v1/project -H 'content-type: application/json' -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx'
```

```jsx
RESPONSE
{
    "status": "OK",
    "data": [
        {
            "project_name": "Test Project",
            "project_uuid": "8e179868-c7ca-49bc-afd7-c178b7b8cf15",
            "created_at": "2022-11-10T12:14:08.000000Z",
            "contracts": [
                {
                    "contract_uuid": "746806f1-3bd0-4e93-b6c7-d6bc089d0b34",
                    "contract_address": "0x78416ee8ea616ba5e1530007d9abc9766a24146a",
                    "type": "ERC721",
                    "count": "10000",
                    "description": null,
                    "image_url": null,
                    "external_link": null,
                    "banner_image_url": null,
                    "chain_status": "pending",
                    "name": null,
                    "decimals": null,
                    "symbol": null,
                    "quantum": "",
                    "total_supply": null,
                    "asset_type": null,
                    "asset_info": null,
                    "metadata_url": null,
                    "created_at": "2022-11-10T12:14:20.000000Z"
                }
            ]
        }
    ],
    "error": ""
}
```
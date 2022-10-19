
# Project

## Retrieve Project

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
            "project_name": "Dev Project on Testnet",
            "project_uuid": "05a07400-8043-46e9-bbff-d924fcd41fd1",
            "created_at": "2022-07-04T06:20:37.000000Z",
            "contracts": [
                {
                    "contract_uuid": "72b00726-33d4-44d4-821c-c1e53f5679c8",
                    "address": "0x4240e8b8c0b6e6464a13f555f6395bbfe1c4bdf1",
                    "type": "ERC20M",
                    "count": "2000",
                    "chain_status": "pending",
                    "name": null,
                    "decimals": null,
                    "symbol": null,
                    "quantum": "",
                    "total_supply": null,
                    "asset_type": null,
                    "asset_info": null,
                    "deleted_at": null,
                    "created_at": "2022-07-04T06:20:40.000000Z"
                }
            ]
        }
    ],
    "error": ""
}
```
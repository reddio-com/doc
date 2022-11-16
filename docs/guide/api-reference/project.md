
# Project

As a reddio user, you can create many projects and contracts, a project can contain several contracts, for contracts related APIs, please refer to [Contract](contract) .

## Retrieve project

This endpoint can retrieve projects and the related UUIDs of each projects for further usage.

Each project is uniquely indentified with `project_uuid`, and contracts are identified with `contract_uuid`.

```jsx
GET /v1/project
```

**`cURL` Example**

```jsx
curl -v https://api-dev.reddio.com/v1/project -H 'content-type: application/json' -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx'
```

**Example response**

```json
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

## Create project

For creating new projects.

```jsx
POST /v1/project
```

**Parameters**

---

<strong style='color:red'>*</strong>**project_name** <strong style='color:#8792a2'>string</strong>

The name of newly created project.

**Example payload**
```json
{
    "project_name": "A bigger project on reddio"
}
```

**Example response**
```json
{
    "status": "OK",
    "data": {
        "message": "Project created.",
        "project_uuid": "d5c0f8fe-f804-4675-9ac7-7091a11de0b6"
    },
    "error": ""
}
```

## Edit project name

For editing project name.

```jsx
POST /v1/project/edit_project
```

**Parameters**

---

<strong style='color:red'>*</strong>**new_project_name** <strong style='color:#8792a2'>string</strong>

The new project name.

---

<strong style='color:red'>*</strong>**project_uuid** <strong style='color:#8792a2'>string</strong>

The `project_uuid` of the project you wish to edit.

**Example payload**
```json
{
    "new_project_name": "New name for this project",
	"project_uuid": "d5c0f8fe-f804-4675-9ac7-7091a11de0b6"
}
```

**Example response**

```json
{
    "status": "OK",
    "data": {
        "message": "Project edited.",
        "project_uuid": "05a07400-8043-46e9-bbff-d924fcd41fd1"
    },
    "error": ""
}
```

## Remove project

Remove a project from you account, be sure to remove all the contracts within that project, otherwise this will fail.

```jsx
POST /v1/project/remove_project
```

**Parameters**

---

<strong style='color:red'>*</strong>**project_uuid** <strong style='color:#8792a2'>string</strong>

The `project_uuid` of the project you wish to remove.

**Example payload**
```json
{
    "project_uuid": "b7247a17-19bc-435d-91ed-8e021dd31473"
}
```

**Example response**

```json
{
    "status": "OK",
    "data": {
        "message": "Project removed."
    },
    "error": ""
}
```
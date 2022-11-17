
# Contract

## Create contract

This API can create a contract and add to one of your projects.

```jsx
POST /v1/project/contract
```

**Parameters**

---


<strong style='color:red'>*</strong>**contract_address** <strong style='color:#8792a2'>string</strong>

The contract address of your contract.

---

<strong style='color:red'>*</strong>**contract_type** <strong style='color:#8792a2'>string</strong>

The type of your contract, currently we support `ERC721`, `ERC20` and `ERC721M`.

For the type of `ERC721M`, our system will create two contracts internally.

---

<strong style='color:red'>*</strong>**project_uuid** <strong style='color:#8792a2'>string</strong>

The `project_uuid` of the project you wish to add this contract to.

---

**name** <strong style='color:#8792a2'>string</strong>

Name of your contract.

---

**description** <strong style='color:#8792a2'>string</strong>

Description of your contract, can be used on marketplace.

---

**image_url** <strong style='color:#8792a2'>string</strong>

Image URL of your contract, can be used on marketplace.

---

**external_link** <strong style='color:#8792a2'>string</strong>

External link of your contract, can be used on marketplace.

---

**banner_image_url** <strong style='color:#8792a2'>string</strong>

Banner image url of your contract, can be used on marketplace.


**Example payload**
```json
{
  "contract_address":"0x35b346a2bc5f90855340b50325f727083691063e",
  "contract_type":"ERC721",
  "contract_count": 2000,
  "project_uuid": "05a07400-8043-46e9-bbff-d924fcd41fd1",
  "name": "Some name",
  "description": "Some desc",
  "image_url": "https://example.com/image_url",
  "external_link": "https://example.com/image_url",
  "banner_image_url": "https://example.com/image_url"
}
```

**Example response**
```json
{
    "status": "OK",
    "data": {
        "message": "Contract created."
    },
    "error": ""
}
```

## Remove contract

Remove a contract.

```jsx
POST /v1/project/remove_contract
```

**Parameters**

---

<strong style='color:red'>*</strong>**contract_uuid** <strong style='color:#8792a2'>string</strong>

The UUID of your contract.

---

**Example payload**
```json
{
    "contract_uuid": "9ef31ed4-b533-4a49-bdd9-890d0891bf9f"
}
```

**Example response**
```json
{
    "status": "OK",
    "data": {
        "message": "Contract removed."
    },
    "error": ""
}
```

## Get contract info

Get contract info, this is a public API, can be used without authentication.

```jsx
GET /v1/contract_info?contract_address=0x03c555c770bb94bbffdeb94178b7a655d9963019
```

**Parameters**

---

<strong style='color:red'>*</strong>**contract_address** <strong style='color:#8792a2'>string</strong>

Contract address of contract.

**Example response**
```json
{
	"status": "OK",
	"data": {
		"contract_address": "0x03c555c770bb94bbffdeb94178b7a655d9963019",
		"type": "ERC721M",
		"count": 20000000,
		"name": null,
		"decimals": 0,
		"symbol": "REDDIO",
		"quantum": "1",
		"total_supply": "890268",
		"asset_type": "0x23aeb3f174da7bb0fbb60bab99959ef152e0ba39532579ca202c352f5698188",
		"asset_info": "0xb8b8667200000000000000000000000003c555c770bb94bbffdeb94178b7a655d9963019",
		"metadata_url": null,
		"description": null,
		"image_url": null,
		"external_link": null,
		"banner_image_url": null
	},
	"error": ""
}
```

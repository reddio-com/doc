# Storage

As reddio user you are able to upload metadata, files are under project's scope.

Note: This function is still in Alpha and we do not guarantee any SLA, upload file size limit is 100MiB.

## Upload file(s)

Uploading a single file is easy, just upload it!

If you'd like to upload a directory of files, you should convert them to [CAR](https://ipld.io/specs/transport/car/) format using `ipfs-car`, it's quite simple, just follow the following steps.

```
npm install -g ipfs-car
ipfs-car --pack /path/to/your/directory_name
```

Then a `directory_name.car` will be created, you can now just upload this file.


**Parameters**

---
<strong style='color:red'>*</strong>**file** <strong style='color:#8792a2'>file</strong>

The file you with to upload.

```jsx
POST /v1/project/<project_uuid>/storage
```

**`cURL` Example**
```sh
curl -v -X POST -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx' -F "file=@directory_name.car" https://api-dev.reddio.com/v1/project/8e179868-c7ca-49bc-afd7-c178b7b8cf15/storage
```

**Example response**
```json
{
    "status": "OK",
    "data": {
        "cid": "bafybeibs4sfygak2sfxxxxpytsuccmhjilcrwsmjus57ntxvyxxxxlpddq",
        "endpoints": [
            "https://bafybeibs4sfygak2sfxxxxpytsuccmhjilcrwsmjus57ntxvyxxxxlpddq.ipfs.nftstorage.link/"
        ]
    },
    "error": ""
}
```

## Get uploaded files

List uploaded files under related project.

```jsx
GET /v1/project/<project_uuid>/storage
```
**Parameters**


**limit** <strong style='color:#8792a2'>string</strong>

Limit entries for query records.

---

**page** <strong style='color:#8792a2'>string</strong>

Page for records.

---

**`cURL` Example**
```sh
curl -v -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx' https://api-dev.reddio.com/v1/project/8e179868-c7ca-49bc-afd7-c178b7b8cf15/storage
```

**Example response**
```json
{
    "status": "OK",
    "data": {
        "storages": [
            {
                "cid": "bafybeibs4sfygak2sfxxxxpytsuccmhjilcrwsmjus57ntxvyxxxxlpddq",
                "filename": "generate.jpg",
                "filesize": "173604",
                "created_at": "2022-12-26T03:17:35.000000Z",
                "endpoints": [
                    "https://bafybeibs4sfygak2sfxxxxpytsuccmhjilcrwsmjus57ntxvyxxxxlpddq.ipfs.nftstorage.link/"
                ]
            }
        ]
    },
    "error": ""
}
```

## Remove uploaded files

Remove uploaded files by CID.

```jsx
POST /v1/project/<project_uuid>/storage/remove
```

**Parameters**

---

<strong style='color:red'>*</strong>**cid** <strong style='color:#8792a2'>string</strong>

CID of the file

**Example payload**
```json
{
    "cid":"bafybeihfwm7c5n7ool3lhmsz52j5bbdmef4evin5zohkw7t6zy5gy6tk8u"
}
```

**Example response**
```json
{
    "status": "OK",
    "data": "File removed.",
    "error": ""
}
```
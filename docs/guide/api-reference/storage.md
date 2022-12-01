# Record

As reddio user you are able to upload metadata, files are under user's scope.

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
POST /v1/user/storage
```

**Example response**
```json
{
    "status": "OK",
    "data": {
        "cid": "bafybeibs4sfygak2sfxxxxpytsuccmhjilcrwsmjus57ntxvyxxxxlpddq"
    },
    "error": ""
}
```

## Get uploaded files

List all the uploaded files under you account.

```jsx
GET /v1/user/storage
```

**Example response**
```json
{
    "status": "OK",
    "data": {
        "storages": [
            {
                "cid": "bafybeibs4sfygak2sfxxxxpytsuccmhjilcrwsmjus57ntxvyxxxxlpddq",
                "filename": "cartest1.car",
                "created_at": "2022-12-01T06:37:45.000000Z"
            },
            {
                "cid": "bafybeibs4sfygak2sfxxxxpytsuccmhjilcrwsmjus57ntxvyxxxxlxxxx",
                "filename": "cartest2.car",
                "created_at": "2022-12-01T06:41:36.000000Z"
            }
        ]
    },
    "error": ""
}
```
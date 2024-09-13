# Upload Files To IPFS

## Introduction

In this guide, let’s upload files to IPFS. This guide contains the following steps:

1. Create a Reddio account
2. Upload files to IPFS by clicks
3. Upload files to IPFS by API calls

## Create a Reddio account

In order to access Reddio's IPFS service, you will need to create a Reddio account:

1. Go to the Reddio's dashboard at https://dashboard.reddio.com/
2. Click on the "Sign up" button in the buttom right of the page.
3. Fill in the registration form with your name, email address, and a password. 
4. Follow the instruction to input the verify code. Your account will be registered succesfully.
    
## Upload files to IPFS by clicks

Now that you have a Reddio account, you can upload files to IPFS using the dashboard. Here's how to do it:

1. Log in to your Reddio's dashboard at https://dashboard.reddio.com/.
2. Click on the "IPFS" page in the dashboard.
3. Click on the "Upload Files" button and select the file you want to upload.
4. After the file(s) is uploaded, clicking on the "Finished" button
5. Once the file is uploaded, you'll see a unique IPFS Content Identifier(CID) that represents the file. You can use this Content Identifier(CID) to retrieve the file from the IPFS network.

<p align="center">
  <img src="/IPFS-CID.png"/>
</p>

## Upload files to IPFS by API calls

If you prefer to use API calls to upload files to IPFS, you can do so using the Reddio API. Here's how:

1. Log in to your Reddio's dashboard at https://dashboard.reddio.com/.
2. Retrieve your dashboard ID by looking at URL. For example, https://dashboard.reddio.com/project?id=cc7ec516-4ff5-4626-9401-d38f343afc31 means the project id is "cc7ec516-4ff5-4626-9401-d38f343afc31".
Please keep this id.
3. Grab your API key from the Reddio dashboard. You can find it under "API Key" in the "Overview" page.
4. Prepare the file(s) you want to upload. If you'd like to upload a directory of files, you should convert them to [CAR](https://ipld.io/specs/transport/car/) format using `ipfs-car`:

``` javascript
// convert folder of files to CAR
npm install -g ipfs-car
ipfs-car --pack /path/to/your/directory_name
```

5. Call the `storage` API to upload file(s). You can use following `cURL` statement to upload file(s):


**Example: `cURL`**
```sh
curl -v -X POST -H 'x-api-key: {your API key}' -F "file=@{your file name}" https://api-dev.reddio.com/v1/project/{project id}/storage
```

**Example: `cURL` with parameters**
```sh
curl -v -X POST -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx' -F "file=@directory_name.car" https://api-dev.reddio.com/v1/project/8e179868-c7ca-49bc-afd7-c178b7b8cf15/storage
```

6. Check `cURL` response, a successful response will look like this:

**Example: `cURL` response**
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

## Next steps

- [Set up your metadata for your NFTs](/guide/getting-started/set-up-metadata-for-your-nfts)
- [Learn more about `storage` API](/guide/api-reference/storage) 

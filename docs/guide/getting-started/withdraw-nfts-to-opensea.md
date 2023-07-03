# Withdraw NFTs To Opensea From Layer 2

## Introduction

Welcome to this comprehensive guide on withdrawing your NFTs to layer 1, enabling you to trade them on popular marketplaces like OpenSea. By following the step-by-step instructions provided below, you'll gain the knowledge and skills required to successfully complete the process:

1. Deploy an ERC721 mintable contract
2. Mint some NFTs
3. Set up your metadata server
4. Check your NFTs 
5. Withdraw NFTs to layer 1

## Deploy an ERC721 mintable contract

You can effortlessly deploy an ERC721M smart contract on layer 1 using [Reddio's Dashboard](https://dashboard.reddio.com/). To get started, follow these simple steps:

1. Sign up on the Reddio Dashboard and log in to your account.
2. Go to the contracts page and locate the "Add Contracts" button.
3. Click on "Add Contracts" and choose ERC721 (Mintable and Recommended) from the options provided.

To ensure you have full control over the metadata hosting, disable the "Host Metadata on Reddio" switch. In this tutorial, we will be hosting the metadata ourselves. 

Next, you will need to provide the URI for storing the metadata. Make sure the URI is accessible via the internet, allowing others to access your metadata from the servers.
We will fill in http://123.206.xxx.xxx/tokens/, since we will use this for returning metadata.

Once you have entered all the necessary information for the contract, click on "OK" to proceed.

<p align="center">
  <img src="/opensea-1.png"/>
</p>

Then, your wallet will pop up to prompt you to sign the transaction. Once you have successfully signed all the transactions, your deployment will be processed.

After your deployment process is finished, you will see your new contract name under "Contracts" page:

<p align="center">
  <img src="/new_deploy_NFT.png"/>
</p>

To further explore the smart contract details on layer 1, you can refer to the comprehensive [guide](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-smart-contract-details-on-layer-1) provided by Reddio, which will guide you through the process of checking the smart contract details on Etherscan.


## Mint some NFTs

Minting NFTs on layer 2 is a simple and cost-free process. To begin, follow these steps:

1. Click on your contract name to navigate to the contract's detail page.

<p align="center">
  <img src="/opensea-2.png"/>
</p>

2. On the contract detail page, locate the "Mint NFTs" button and click on it. Specify the desired quantity of NFTs you wish to mint on layer 2.

3. After entering the desired quantity, click on the "OK" button to initiate the minting process.

<p align="center">
  <img src="/opensea-3.png"/>
</p>

4. Once the minting process is completed successfully, you will observe an increase in the "Total Supply" number under the "Statistics" section.

<p align="center">
  <img src="/opensea-4.png"/>
</p>


## Set up your metadata server

After minting NFTs. We need to attach our metadata to the NFTs. Although metadata doesn't have any specified standarads, you need to make sure your metadata follow Opensea's standarads so that your NFTs can display properly on marketplace like Opensea. To learn more about Opensea's metadata standarad, please [click here](https://docs.opensea.io/docs/metadata-standards).

Now, assuming we would like to make our NFTs' name like "Reddio NFT 1" and "Reddio NFT 2" ("1" and "2" are tokenId) with specific iamges and some other details:

<p align="center">
  <img src="/opensea-5.png"/>
</p>

To do that, we need to return following response on http://123.206.xxx.xxx/tokens/1:

```json
{
"description":"This is a reddio test NFT.",
"image":"https://i.seadn.io/gcs/files/e67d2f06bcaa24a5ebb328a6a60c4582.png",
"name":"Reddio NFT 1",
"background_color":"FF0000",
"attributes":
  [
  {"trait_type":"Tokenid","value":"1"}
  ]
}
```

Therefore, we need a metadata server that returning metadata according to the tokenId. Here is a Python sample code with FastAPI module to do such a task:

```python
from fastapi import FastAPI
import json
import uvicorn
from fastapi import FastAPI
from fastapi.responses import JSONResponse

@app.get("/tokens/{tokenId}")
def returnTokens(tokenId: int):
    data = {
  "description": "This is a reddio test NFT.", 
  "image": "https://i.seadn.io/gcs/files/e67d2f06bcaa24a5ebb328a6a60c4582.png", 
  "name": f"Reddio NFT {tokenId}",
  "background_color": "FF0000",
  "attributes": [
    {
      "trait_type": "Tokenid", 
      "value": f"{tokenId}"
    }, 
  ]
    }
    headers = {"X-Custom-Header": "Custom Value"}
    return JSONResponse(content=data, headers=headers, status_code=200)

if __name__ == '__main__':
    uvicorn.run(app,port=8000,host='0.0.0.0')

```


## Check your NFTs 

Now, you have successfully set up the metadata server. You can see if your NFTs have the right images through [Reddio's demo](https://demos.reddio.com/). After connecting your wallet with the demo page and go to the account page. You will see a list of tokens and NFTs on layer 2:

<p align="center">
  <img src="/opensea-6.png"/>
</p>

Simply select the NFTs symbol you just created, you will see the following images:

<p align="center">
  <img src="/opensea-7.png"/>
</p>

## Withdraw NFTs to layer 1

Now, you can withdraw your NFTs to layer 1 by clicking the "Withdraw" button on [Reddio's demo](https://demos.reddio.com/):

<p align="center">
  <img src="/opensea-8.png"/>
</p>

Then, you need to choose the right "Asset Type"、"ETH Address"、 and "Token Id" to proceed:

<p align="center">
  <img src="/opensea-9.png"/>
</p>

After about 4 hour waiting, you can see your NFTs are available for withdrawing to layer 1 on Withdraw Area:

<p align="center">
  <img src="/opensea-10.png"/>
</p>

Now you can withdraw it to layer 1, this process will be done in seconds. After that, you will able to see the NFTs on [Opensea](https://testnets.opensea.io/collection/20230620-opensea-test).







## Next steps

- [Check your ERC721M balance and collection on layer 2](https://docs.reddio.com/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-erc721-erc721m-balance-on-layer-2)
- [Upload files to IPFS](/guide/getting-started/upload-files-to-ipfs)
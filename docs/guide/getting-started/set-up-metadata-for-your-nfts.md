# Set Up Metadata For Your NFTs

## Set Up BaseURI For Your Contract

You need to first set up your BaseURI for your contract. For example, suppose you want to show your #1 NFT’s metadata on [https://metadata.reddio.com/api/tokens/1](https://metadata.reddio.com/api/tokens/1) and your #8 NFT’s metadata on [https://metadata.reddio.com/api/tokens/8](https://metadata.reddio.com/api/tokens/8). You need to set up your BaseURI as [https://metadata.reddio.com/api/tokens/](https://metadata.reddio.com/api/tokens/). You can use [Reddio’s contract deployment tool](https://deploy-contract.reddio.com/) to quick deploy a ERC721M contract. Remember to type in your BaseURI.

::: warning
You can only use URI that starts with “https://”,”http://”.
:::

After you have created your contract address on layer 1 with specfic BaseURI. You need to bind your contract address and BaseURI with your project. You can check [this guide](https://docs.reddio.com/guide/getting-started/mint-nfts-on-layer-2.html#binding-smart-contract-with-project) to see how to do it. 

## Set Up Metadata For Your NFTs

After set up the BaseURI for your contract, dApps like Opensea will query your  BaseURI for your NFTs’ metadata. For example, if your BaseURI is [https://metadata.reddio.com/api/tokens/](https://metadata.reddio.com/api/tokens/), and you  want to assign your #1 NFT’s “image” metadata to “[https://testing-data.reddio.com/images/1.png](https://testing-data.reddio.com/images/1.png)". You should set your [https://metadata.reddio.com/api/tokens/1](https://metadata.reddio.com/api/tokens/1) return a specific json data like this:

```json
{"image": "https://testing-data.reddio.com/images/1.png"}
```

If you want to circulate your NFTs through different marketplaces, there are some metadata standards that need you to follow. We will only list some common metadatas and their meanings here. Please refer to the specific marketplace’s documentation for more details.

```json
{
"image":"URL to the image of the item.",
"external_url":"When click on the image in some marketplaces, users will go to this URL.",
"name":"Name of this NFT",
"description":"Description of the NFT"
}
```

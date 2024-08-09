# Set Up Metadata For Your NFTs

## Introduction

Welcome to this comprehensive guide on setting up metadata for your contracts. It's important to note that different contract types may require different approaches to managing metadata. This guide covers the following setting up metadata scenarios:

1. RedSonic-hosted metadata with ERC721 mintable
2. Self-hosted metadata with ERC721 mintable and ERC721 traditional
3. Independent TokenURI ERC721's metadata

Now let's dive into each scenario and learn how to effectively manage metadata for your contracts.


## RedSonic-hosted metadata with ERC721 mintable

If you choose to host metadata on RedSonic, then you don't need to worry much about setting up the metadata. All your metadata will be store under BaseURI(see picture below): 

<p align="center">
  <img src="/metadata-1.png"/>
</p>

To access and view your metadata for specific token, all you need to do is click on the link provided in your dashboard:

<p align="center">
  <img src="/metadata-2.png"/>
</p>

By following these steps, you can easily manage and access your metadata hosted on RedSonic without any hassle.

## Self-hosted metadata with ERC721 mintable and ERC721 traditional

If you want to self-host metadata with ERC721 mintable and ERC721 traditional. You need to first set up your BaseURI for your contract in contract deploying form:

<p align="center">
  <img src="/metadata-3.png"/>
</p>

Suppose you want to show your #1 NFT’s metadata on [https://metadata.reddio.com/api/tokens/1](https://metadata.reddio.com/api/tokens/1) and your #8 NFT’s metadata on [https://metadata.reddio.com/api/tokens/8](https://metadata.reddio.com/api/tokens/8). You need to set up your BaseURI as [https://metadata.reddio.com/api/tokens/](https://metadata.reddio.com/api/tokens/). 

::: warning
You can only use URI that starts with “https://”,”http://”.
:::

After set up the BaseURI for your contract, dApps like Opensea will query your BaseURI for your NFTs’ metadata. For example, if your BaseURI is [https://metadata.reddio.com/api/tokens/](https://metadata.reddio.com/api/tokens/), and you  want to assign your #1 NFT’s "image" metadata to "[https://testing-data.reddio.com/images/1.png](https://testing-data.reddio.com/images/1.png)". You should set your [https://metadata.reddio.com/api/tokens/1](https://metadata.reddio.com/api/tokens/1) return a specific json data like this:

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

## Independent TokenURI ERC721's metadata

For ERC721 contracts with independent TokenURI, it is necessary to assign a specific TokenURI for each token during the minting process. However, please note that this feature is currently in the experimental phase. If you are interested in utilizing this feature, we recommend reaching out to us for further information and support. Please feel free to [contact us](https://discord.gg/wTv3h38pZ3) via our Discord channel. Our team will be happy to assist you and provide any necessary guidance regarding the usage of this experimental feature.

## Next steps

- [Mint NFTs On Layer 2](/guide/getting-started/mint-nfts-on-layer-2)
- [Upload files to IPFS](/guide/getting-started/upload-files-to-ipfs)
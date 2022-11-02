# Place Orders On Layer 2
::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://goerlifaucet.com/ to get more credit to test
:::

::: tip
You can access our sample code of JS SDK integration here, https://github.com/reddio-com/red-js-sdk
:::
## Init SDK

[Click here](/guide/jssdk-reference/initiate-sdk) to check how to initiate the SDK.

## Place buy orders
```jsx
const buy = async () => {
    if (starkTokenId === -1) {
      alert('choose starkex tokenId');
      return;
    }
    const params = await reddio.utils.getOrderParams({
      keypair: {
        privateKey:
          '{Your_privatekey}',
        publicKey:
          '{Your_publicKey}}',
      },
      amount: '1',
      tokenAddress: contractAddress,
      tokenId: starkTokenId,
      orderType: 'buy',
      tokenType: 'ERC721',
      price: sellPrice,
    });
    const { data } = await reddio.apis.order(params);
    setSellSequenceId(data.data.sequence_id);
  };
  ```

## Place sell orders

```jsx
 const sell = async () => {
    if (starkTokenId === -1) {
      alert('choose starkex tokenId');
      return;
    }
    const params = await reddio.utils.getOrderParams({
      keypair: {
        privateKey,
        publicKey: starkKey,
      },
      amount: '1',
      tokenAddress: contractAddress,
      tokenId: starkTokenId,
      orderType: 'sell',
      tokenType: 'ERC721',
      price: sellPrice,
    });
    const { data } = await reddio.apis.order(params);
    setSellSequenceId(data.data.sequence_id);
  };
  ```

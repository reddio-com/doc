# Place Orders On Layer 2
::: tip
To make sure the sample code works, please install Metamask with Goerli network chosen, you can visit https://faucet.paradigm.xyz/ to get more credit to test
:::

::: tip
You can access our sample code of JS SDK integration here, https://github.com/reddio-com/red-js-sdk
:::

## Install

```sh
$ yarn add @reddio.com/js
```

## Init SDK

```tsx
const initReddio = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  return new Reddio({
    provider,
		// get from dashboard
		apiKey: '{your_api_key}'
    // The development environment uses `test`, the production environment uses `main`
    env: 'test',
  });
};
```
::: tip
Get the API key from dashboard page; To get access the dashboard, please leave your email by joining the waitlist at www.reddio.com, we will send you the invitation link
:::

![Dashboard](/dashboard-quickstart.png)

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

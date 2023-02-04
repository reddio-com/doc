# Initiate SDK

## Install

```sh
$ yarn add @reddio.com/js
```


## new Reddio()

**Parameters**

---

**env** <strong style='color:#8792a2'>'test' | 'main'</strong>

SDK environment variables.

---

**provider** <strong style='color:#8792a2'>[JsonRpcProvider](https://docs.ethers.org/v5/api/providers/jsonrpc-provider/#JsonRpcProvider)</strong>

The JSON-RPC API is a popular method for interacting with Ethereum and is available in all major Ethereum node implementations as well as many third-party web services.

### Example

```tsx
const provider = new ethers.providers.Web3Provider(window.ethereum);
const reddio = new Reddio({
  provider,
  env: 'test',
});
```

::: tip
You can get the API key from dashboard page https://dashboard.reddio.com
:::

![Dashboard](/dashboard-quickstart.png)
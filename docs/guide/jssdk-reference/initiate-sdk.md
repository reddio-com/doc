# Initiate SDK

## Install

```sh
$ yarn add @reddio.com/js
```


## new Reddio()

- **Type**

```tsx
interface ReddioCoreOptions {
    env?: 'test' | 'main';
    provider: JsonRpcProvider;
}
declare class ReddioCore {
    constructor(options: ReddioCoreOptions);
}
```

- **Example**

```tsx
const provider = new ethers.providers.Web3Provider(window.ethereum);
const reddio = new Reddio({
  provider,
  env: 'test',
});
```

::: tip
You can get the API key from dashboard page https://dashboard.reddio.com/login
:::

![Dashboard](/dashboard-quickstart.png)
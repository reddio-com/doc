# Init SDK
## new Reddio()

- **Type**

```tsx
interface ReddioCoreOptions {
    env?: 'test' | 'main';
    apiKey?: string;
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
  apiKey: 'xxx'
});
```
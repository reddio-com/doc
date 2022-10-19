# getVaultID()

- **Type**

```tsx
interface VaultParams {
  assetId: string;
  starkKeys: string | string[];
}
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface VaultResponse {
  vault_ids: string[];
}
declare const getVaultID = (args: VaultParams) => Promise<AxiosResponse<Response<VaultResponse>>>
```

- **Example**

```tsx
const { data } = await reddio.apis.getVaultID({
  // Originator and recipient starkKey
  starkKeys: [starkKey, transferAddress],
  assetId,
});
```
# transfer()

- **Type**

```tsx
interface SignParams {
  starkKey: string;
  privateKey: string;
  assetId: string;
  // use with ETH and ERC20
  amount?: number | string;
  vaultId: string;
  receiver: string;
  receiverVaultId: string;
  expirationTimestamp?: number;
}
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface TransferResponse {
  sequence_id: number;
}
declare const transfer: (data: SignParams) => Promise<AxiosResponse<Response<TransferResponse>>>
```

- **Example**

```tsx
const { data } = await reddio.apis.transfer({
  // Originator's starkKey and privateKey
  starkKey,
  privateKey,
  assetId,
  vaultId: data.data.vault_ids[0],
  receiver: transferAddress,
  receiverVaultId: data.data.vault_ids[1],
});
```

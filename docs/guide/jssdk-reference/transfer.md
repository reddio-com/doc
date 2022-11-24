# Transfer

## transfer()

- **Type**

```tsx
enum Types {
  ETH = 'ETH',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC721M = 'ERC721M',
}
interface SignTransferParams {
  starkKey: string;
  privateKey: string;
  amount?: number | string;
  contractAddress?: string;
  tokenId?: string | number;
  type: `${Types}`;
  receiver: string;
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
declare const transfer: (data: SignTransferParams) => Promise<AxiosResponse<Response<TransferResponse>>>
```

- **Example**

```tsx
const { data } = await reddio.apis.transfer({
  // Originator's starkKey and privateKey
  starkKey,
  privateKey,
  contractAddress,
  amount,
  tokenId,
  type,
  receiver: transferAddress,
  expirationTimestamp,
});
```

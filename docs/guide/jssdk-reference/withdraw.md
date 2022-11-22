# Withdraw

## withdrawalFromL2()

- **Type**

```tsx
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
interface WithdrawalResponse {
  sequence_id: number;
}
declare const withdrawalFromL2: (data: SignTransferParams) => Promise<AxiosResponse<Response<WithdrawalResponse>>>
```

- **Example**

```tsx
const { data: res } = await reddio.apis.withdrawalFromL2({
  // small with transfer
  starkKey,
  privateKey,
  ...
});
``` 

## withdrawalFromL1()

- **Type**

```tsx
enum Types {
  ETH = 'ETH',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC721M = 'ERC721M',
}
interface WithdrawalFromL1Params {
  starkKey: string;
  assetType: string;
  type: `${Types}`
  // use with ERC721
  tokenId?: number;
}
declare const withdrawalFromL1: (params: WithdrawalFromL1Params) => Promise<TransactionResponse>;
```

[TransactionResponse API](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse).

- **Example**

```tsx
await reddio.apis.withdrawalFromL1({
  starkKey,
  assetType,
  type: 'ETH',
});
```
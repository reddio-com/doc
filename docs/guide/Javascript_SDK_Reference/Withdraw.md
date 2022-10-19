# withdrawalFromL2()

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
interface WithdrawalParams extends SignParams {
  // use with ERC20 and ERC721
  contractAddress?: string;
  // use with ERC721
  tokenId?: string;
}
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface WithdrawalResponse {
  sequence_id: number;
}
declare const withdrawalFromL2: (data: WithdrawalParams) => Promise<AxiosResponse<Response<WithdrawalResponse>>>
```

- **Example**

```tsx
const { data: res } = await reddio.apis.withdrawalFromL2({
  // small with transfer
  starkKey,
  privateKey,
  assetId,
  vaultId: data.data.vault_ids[0],
  receiver: transferAddress,
  receiverVaultId: data.data.vault_ids[1],
  // your layer 1 tokenAddress
  contractAddress,
  tokenId: "The NFT token id owned by the user",
});
```

## withdrawalFromL1()

- **Type**

```tsx
enum Types {
  ETH = 'ETH',
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
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
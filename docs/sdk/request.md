# Request

## getVaultID()

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

## depositETH()

- **Type**

```tsx
interface DepositParams {
  starkKey: string;
  assetType: string;
  vaultId: string;
  quantizedAmount: number | string;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  // Blockchain specific contextual infos
  raw: Record<string, any>;
}
declare const depositERC20: (params: DepositParams) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositETH({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  quantizedAmount: "deposit amount",
});
```

## depositERC20()

- **Type**

```tsx
interface DepositParams {
  starkKey: string;
  assetType: string;
  vaultId: string;
  quantizedAmount: number | string;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  // Blockchain specific contextual infos
  raw: Record<string, any>;
}
declare const depositERC20: (params: DepositParams) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositERC20({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  quantizedAmount: "deposit amount",
});
```

## depositERC721()

- **Type**

```tsx
interface Deposit721Params {
  starkKey: string;
  assetType: string;
  vaultId: string;
  tokenId: number;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  // Blockchain specific contextual infos
  raw: Record<string, any>;
}
declare const depositERC721: (params: Deposit721Params) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositERC721({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  tokenId,
});
```

## transfer()

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

## withdrawalFromL2()

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

## getBalances()

- **Type**

```tsx
type StarkKeyParams = Pick<RequestCommonParams, 'starkKey'>;
interface PageParams {
  page: number;
  limit: number;
}
type BalancesParams = StarkKeyParams & Partial<PageParams>;
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface BalanceResponse {
  asset_id: string;
  contract_address: string;
  balance_available: number;
  type: string;
  decimals: number;
  symbol: string;
  quantum: number;
  display_value: string;
}
declare function getBalances(params: BalancesParams): Promise<AxiosResponse<Response<BalanceResponse[]>>>

```

- **Example**

```tsx
const { data } = await reddio.apis.getBalances({
  starkKey,
  page: 1,
  limit: 10,
});
```

## getBalance()

- **Type**

```tsx
type StarkKeyParams = Pick<RequestCommonParams, 'starkKey'>;
interface BalanceParams extends StarkKeyParams {
  assetId?: string;
}
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface BalanceResponse {
  asset_id: string;
  contract_address: string;
  balance_available: number;
  type: string;
  decimals: number;
  symbol: string;
  quantum: number;
  display_value: string;
}
declare function getBalance(params: BalanceParams): Promise<AxiosResponse<Response<BalanceResponse>>>

```

- **Example**

```tsx
const { data } = await reddio.apis.getBalance({
  starkKey,
  assetId
});
```

## getRecords()

- **Type**

```tsx
type StarkKeyParams = Pick<RequestCommonParams, 'starkKey'>;
interface PageParams {
  page: number;
  limit: number;
}
type RecordsParams = StarkKeyParams & Partial<PageParams>;
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface RecordResponse {
  stark_key: string;
  sequence_id: number;
  reason: string;
  status: number;
  extra_data: {
    token_id: string;
  };
}
declare function getRecords(params: RecordsParams): Promise<AxiosResponse<Response<RecordResponse[]>>>
```

- **Example**

```tsx
const { data } = await reddio.apis.getRecords({
  starkKey,
  page: 1,
  limit: 10,
});
```

## getRecord()

- **Type**

```tsx
type StarkKeyParams = Pick<RequestCommonParams, 'starkKey'>;
interface RecordParams extends StarkKeyParams {
  sequenceId?: number;
}
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface RecordResponse {
  stark_key: string;
  sequence_id: number;
  reason: string;
  status: number;
  extra_data: {
    token_id: string;
  };
}
declare function getRecord(params: RecordParams): Promise<AxiosResponse<Response<RecordResponse>>>

```

- **Example**

```tsx
const { data } = await reddio.apis.getRecord({
  starkKey,
  sequenceId
});
```
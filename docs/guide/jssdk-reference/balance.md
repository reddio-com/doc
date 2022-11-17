# Balance

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
// v1
const { data } = await reddio.apis.getBalances({
  starkKey,
  page: 1,
  limit: 10,
});

```

## getBalancesV2()

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
type BalanceV2EthType = {
  asset_id: string;
  contract_address: string;
  balance_available: number;
  balance_frozen: number;
  type: 'ETH';
  decimals: number;
  symbol: string;
  quantum: number;
  display_value: string;
  display_frozen: string;
}

type BalanceV2ERC721Type = {
  contract_address: string;
  balance_available: number;
  balance_frozen: number;
  type: 'ERC721' | 'ERC721M',
  decimals: number;
  symbol: string;
  quantum: number;
  display_value: string;
  display_frozen: string;
  available_token_ids: number[];
}

type BalancesV2Response = BalanceV2EthType | BalanceV2ERC721Type;

declare function getBalancesV2(params: BalancesParams): Promise<AxiosResponse<Response<BalancesV2Response[]>>>

```

- **Example**

```tsx

const { data } = await reddio.apis.getBalancesV2({
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
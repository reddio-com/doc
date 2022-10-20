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
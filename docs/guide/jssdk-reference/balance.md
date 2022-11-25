# Balance

## getBalances()

- **Type**

```tsx
interface RequestCommonParams {
    contractAddress?: string;
    starkKey: string;
}
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

> version > 0.4.1

- **Type**

```tsx
interface RequestCommonParams {
    contractAddress?: string;
    starkKey: string;
}
type StarkKeyParams = Pick<RequestCommonParams, 'starkKey'>;
interface BalancesV2Params extends StarkKeyParams {
  type?: string;
  baseUri?: string;
  contractAddress?: string;
}
interface Response<T> {
  data: T;
  status: string;
  error: string;
}

interface BalancesV2Response {
  contract_address: string;
  balance_available: number;
  balance_frozen: number;
  decimals: number;
  symbol: string;
  quantum: number;
  display_value: string;
  display_frozen: string;
  type: `${Types}`;
  asset_id: string;
  available_token_ids: number[] | null;
  frozen_token_ids: number[] | null;
  base_uri: string;
}


declare function getBalancesV2(params: BalancesV2Params): Promise<AxiosResponse<Response<BalancesV2Response[]>>>

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
  balance_frozen: number;
  type: `${Types}`;
  decimals: number;
  symbol: string;
  quantum: number;
  display_value: string;
  display_frozen: string;
  token_id: string;
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
# Order

## order()

- **Type**

```tsx
interface OrderRequestParams {
  amount: string;
  amount_buy: string;
  amount_sell: string;
  token_buy: number;
  token_sell: string;
  price: string;
  quote_token: string;
  base_token: number;
  vault_id_buy: string;
  vault_id_sell: string;
  expiration_timestamp: number;
  nonce: number;
  signature: SignatureLike;
  stark_key: string;
  direction: number;
  fee_info: {
    fee_limit: number;
    token_id: string;
    source_vault_id: number;
  };
  marketplace_uuid: string;
}

interface OrderResponse {
  sequence_id: number;
}


declare function order(params: OrderRequestParams): Promise<AxiosResponse<Response<OrderResponse>>>

```

- **Example**

```tsx
// v1
const { data } = await reddio.apis.order({
   ...params
});

```

## orderList()

- **Type**

```tsx
interface PageParams {
  page: number;
  limit: number;
}

interface OrderListRequestParams extends Partial<PageParams> {
  starkKey?: string;
  contractAddress?: string;
  direction?: number;
}

interface PaginateResponse<T> {
  data: {
    list: T,
    total: number,
  };
  status: string;
  error: string;
}

interface OrderResponse {
  sequence_id: number;
}


declare function orderList(params: OrderListRequestParams): Promise<AxiosResponse<PaginateResponse<OrderResponse>>>

```

- **Example**

```tsx

const { data } = await reddio.apis.orderList({
  starkKey,
  contractAddress,
  direction,
  page: 1,
  limit: 10,
});

```

## cancelOrder()

- **Type**

```tsx
interface CancelOrderRequestParams {
  starkKey: string;
  privateKey: string;
  orderId: number;
}

interface SequenceIdResponse {
  sequence_id: number;
}

declare function cancelOrder(params: CancelOrderRequestParams): Promise<AxiosResponse<Response<SequenceIdResponse>>>

```

- **Example**

```tsx
const { data } = await reddio.apis.cancelOrder({
  starkKey,
  privateKey,
  orderId,
});
```
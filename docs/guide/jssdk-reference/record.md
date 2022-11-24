# Record

## getRecords()

- **Type**

```tsx
type StarkKeyParams = Pick<RequestCommonParams, 'starkKey'>;
interface PageParams {
  page: number;
  limit: number;
}
interface RecordsParams extends StarkKeyParams, Partial<PageParams> {
    contractAddress?: string;
    recordType?: number;
}
interface Response<T> {
  data: T;
  status: string;
  error: string;
}
interface TransferRecordResponse {
    stark_key: string;
    amount: string;
    asset_id: string;
    asset_type: `${Types}`;
    asset_name: string;
    contract_address: string;
    record_type: number;
    sequence_id: number;
    reason: string;
    status: number;
    time: number;
    display_value: string;
    token_id?: string;
    from?: string;
    to?: string;
    resp?: string;
}
interface OrderRecordInfoResponse {
    direction: number;
    filled: string;
    volume: string;
    price: string;
    fee_taken: string;
    fee_token_asset: string;
    fee_asset_name: string;
    quote_asset_name: string;
    quote_asset_id: string;
    base_asset_name: string;
    base_asset_id: string;
    base_contract_address: string;
    quote_contract_address: string;
    quote_asset_type: `${Types}`;
    token_id?: string;
    display_price: string;
}
interface OrderRecordResponse {
    amount: string;
    record_type: number;
    sequence_id: number;
    stark_key: string;
    time: number;
    status: number;
    order: OrderRecordInfoResponse;
    resp?: string;
}
declare type RecordResponse = TransferRecordResponse | OrderRecordResponse;
declare function getRecords(params: RecordsParams): Promise<AxiosResponse<Response<[RecordResponse]>>>
```

- **Example**

```tsx
const { data } = await reddio.apis.getRecords({
  starkKey,
  page: 1,
  limit: 10,
  contractAddress,
  recordType,
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
interface TransferRecordResponse {
    stark_key: string;
    amount: string;
    asset_id: string;
    asset_type: `${Types}`;
    asset_name: string;
    contract_address: string;
    record_type: number;
    sequence_id: number;
    reason: string;
    status: number;
    time: number;
    display_value: string;
    token_id?: string;
    from?: string;
    to?: string;
    resp?: string;
}
interface OrderRecordInfoResponse {
    direction: number;
    filled: string;
    volume: string;
    price: string;
    fee_taken: string;
    fee_token_asset: string;
    fee_asset_name: string;
    quote_asset_name: string;
    quote_asset_id: string;
    base_asset_name: string;
    base_asset_id: string;
    base_contract_address: string;
    quote_contract_address: string;
    quote_asset_type: `${Types}`;
    token_id?: string;
    display_price: string;
}
interface OrderRecordResponse {
    amount: string;
    record_type: number;
    sequence_id: number;
    stark_key: string;
    time: number;
    status: number;
    order: OrderRecordInfoResponse;
    resp?: string;
}
declare type RecordResponse = TransferRecordResponse | OrderRecordResponse;
declare function getRecord(params: RecordParams): Promise<AxiosResponse<Response<RecordResponse>>>

```

- **Example**

```tsx
const { data } = await reddio.apis.getRecord({
  starkKey,
  sequenceId
});
```
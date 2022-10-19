# getRecords()

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
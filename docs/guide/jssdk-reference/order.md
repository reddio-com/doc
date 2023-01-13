# Order

## getOrderParams

Easy access to the parameters required for the order interface.

**Parameters**

---

<strong style='color:red'>*</strong>**keypair** <strong style='color:#8792a2'>{privateKey: string, publicKey: string}</strong>

privateKey and publicKey.

---

<strong style='color:red'>*</strong>**price** <strong style='color:#8792a2'>string</strong>

The price for transaction.

---

<strong style='color:red'>*</strong>**amount** <strong style='color:#8792a2'>string</strong>

The amount you wish to buy/sell.

---

<strong style='color:red'>*</strong>**tokenType** <strong style='color:#8792a2'>'ETH' | 'ERC20' | 'ERC721' | 'ERC721M'</strong>

The token type for transaction.

---

<strong style='color:red'>*</strong>**orderType** <strong style='color:#8792a2'>'buy' | 'sell'</strong>

The type for transaction.

---

**tokenAddress** <strong style='color:#8792a2'>string</strong>

The contract address for transaction.

---

**tokenId** <strong style='color:#8792a2'>string</strong>

tokenId of ERC721 or ERC721M.

---

**marketplaceUuid** <strong style='color:#8792a2'>string</strong>

uuid of marketplace.

### Example

```jsx
const params = await reddio.utils.getOrderParams({
  keypair: {
    privateKey:
      '{Your_privatekey}',
    publicKey:
      '{Your_publicKey}}',
  },
  amount: '1',
  tokenAddress: '0x941661bd1134dc7cc3d107bf006b8631f6e65ad5',
  tokenId: "1",
  orderType: 'buy',
  tokenType: 'ERC721',
  price: '0.01',
});
```

## order()

Place an order on Reddio.

**Parameters**

::: tip
Too many parameters, please use the `getOrderParams` function to generate.
:::

### Example

```tsx
const params = await reddio.utils.getOrderParams({
  keypair: {
    privateKey:
      '{Your_privatekey}',
    publicKey:
      '{Your_publicKey}}',
  },
  amount: '1',
  tokenAddress: '0x941661bd1134dc7cc3d107bf006b8631f6e65ad5',
  tokenId: "1",
  orderType: 'buy',
  tokenType: 'ERC721',
  price: '0.01',
});
const { data } = await reddio.apis.order({
   ...params
});
```

### Return

```json
{
	"status": "OK",
	"error": "",
	"error_code": 0,
	"data": {
		"sequence_id": 302120
	}
}
```

## orderList()

List orders.

**Parameters**

---

**limit** <strong style='color:#8792a2'>string</strong>

Limit entries for query records.

---

**page** <strong style='color:#8792a2'>string</strong>

Page for records.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address.

---

**direction** <strong style='color:#8792a2'>number</strong>

The direction for transaction, 0 is for ASK, 1 is for BID.

---

**token_ids** <strong style='color:#8792a2'>string</strong>

Comma seperated ids, e,g: `165,152`.

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

### Example

```tsx
const { data } = await reddio.apis.orderList({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
  contractAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
  direction: 0,
  page: 1,
  limit: 10,
});
```

### Return

```json
{
  "status": "OK",
  "error": "",
  "error_code": 0,
  "data": {
    "list": [
      {
        "order_id": 302539,
        "stark_key": "0x74ee2029ebbb9051e165d6628a4389f8f4f46c76352b47b45336ea3c760c841",
        "price": "1000",
        "direction": 0,
        "amount": "1",
        "un_filled": "1",
        "symbol": {
          "base_token_asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
          "quote_token_asset_id": "0xfad619eb58897729c9817e1cc05e824b6b501ab29f2e937ef06b8ac5e98cb2",
          "base_token_contract_addr": "eth",
          "quote_token_contract_addr": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
          "base_token_name": "ETH",
          "quote_token_name": "REDDIO721"
        },
        "fee_rate": "200",
        "token_type": "ERC721",
        "token_id": "152",
        "display_price": "0.001"
      }
    ],
    "total": 1
  }
}
```

## cancelOrder()

Cancel an existing order.

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>*</strong>**privateKey** <strong style='color:#8792a2'>string</strong>

Generating a signature requires.

---

<strong style='color:red'>*</strong>**orderId** <strong style='color:#8792a2'>number</strong>

Order ID for cancellation.

### Example

```tsx
const { data } = await reddio.apis.cancelOrder({
  starkKey: '0x74ee2029ebbb9051e165d6628a4389f8f4f46c76352b47b45336ea3c760c841',
  privateKey: '{Your_publicKey}',
  orderId: 1,
});
```

### Return

```json
{
	"status": "OK",
	"error": "",
	"error_code": 0,
	"data": {
		"sequence_id": 302124
	}
}
```
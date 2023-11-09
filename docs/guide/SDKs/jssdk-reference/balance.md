# Balance

## getBalancesV2

Retrieve account balances in batch based on the stark_key, this API aggregates tokens by `contract_address`.

Recommend use [getBalancesV3](#getbalancesv3).

**Parameters**

---

<strong style='color:red'>\*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

---

<strong style='color:red'>\*</strong>**type** <strong style='color:#8792a2'>'ETH' | 'ERC20' | 'ERC721' | 'ERC721M' | 'ERC721MC'</strong>

The token type.

### Example

```tsx
const { data } = await reddio.apis.getBalancesV2({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
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
  "data": [
    {
      "asset_id": "",
      "contract_address": "0x0b26f9dBbEeF0636e90a98651a693Ceb1769d16B",
      "balance_available": 1,
      "balance_frozen": 0,
      "withdraw_frozen": 0,
      "type": "ERC721M",
      "decimals": 0,
      "symbol": "11",
      "quantum": 1,
      "display_value": "1",
      "display_frozen": "0",
      "display_withdraw": "0",
      "available": "1",
      "frozen": "0",
      "withdraw": "0",
      "available_token_ids": ["5"],
      "frozen_token_ids": [],
      "base_uri": "http://1"
    }
  ]
}
```

## getBalancesV3

Retrieve account balances in batch based on the stark_key, this API aggregates tokens by `contract_address`.

**Parameters**

---

<strong style='color:red'>\*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

---

<strong style='color:red'>\*</strong>**type** <strong style='color:#8792a2'>'ETH' | 'ERC20' | 'ERC721' | 'ERC721M' | 'ERC721MC'</strong>

The token type.

### Example

```tsx
const { data } = await reddio.apis.getBalancesV3({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
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
  "data": [
    {
      "asset_id": "",
      "contract_address": "0x0b26f9dBbEeF0636e90a98651a693Ceb1769d16B",
      "balance_available": 1,
      "balance_frozen": 0,
      "withdraw_frozen": 0,
      "type": "ERC721M",
      "decimals": 1,
      "symbol": "11",
      "quantum": 1,
      "available_tokens": [
        {
          "token_id": "5",
          "token_uri": "http://1/5",
          "asset_id": "0x40035fedbf656c2e84b262bed7ce69976e085ed5cd00ed73458644a9cdc5dc6"
        }
      ],
      "frozen_tokens": [],
      "withdraw_frozen_tokens": [],
      "base_uri": "http://1"
    }
  ]
}
```

## getBalance()

Retrieve account balance based on the `stark_key` and `asset_id`.

**Parameters**

---

<strong style='color:red'>\*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state

---

<strong style='color:red'>\*</strong>**assetId** <strong style='color:#8792a2'>string</strong>

The identity of the token as represented on-chain (external ERC-20/ERC-721/ERC-1155 for deposit/withdraw goes through, correct quantization, etc).

### Example

```tsx
const { data } = await reddio.apis.getBalance({
  starkKey: "0x6ecaebbe5b9486472d964217e5470380782823bb0d865240ba916d01636310a",
  assetId: "0x385f3bf3fb3db6b4f152c84dd7a508d4b609caa97535725fe2828e8fe351b9d",
});
```

### Return

```json
{
  "status": "OK",
  "error": "",
  "error_code": 0,
  "data": {
    "asset_id": "0x385f3bf3fb3db6b4f152c84dd7a508d4b609caa97535725fe2828e8fe351b9d",
    "contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
    "balance_available": 0,
    "balance_frozen": 0,
    "type": "ERC721",
    "decimals": 0,
    "symbol": "REDDIO721",
    "quantum": 1,
    "display_value": "0",
    "display_frozen": "0",
    "token_id": "674",
    "base_uri": ""
  }
}
```

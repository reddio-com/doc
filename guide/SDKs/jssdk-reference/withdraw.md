# Withdraw

## withdrawalFromL2

:::tip
You need to wait about 4 hours to see the assets available for withdrawal in the withdraw area.
:::

Withdrawal to another Ethereum address for ERC-20/ETH and ERC-721.

**Parameters**

---

<strong style='color:red'>\*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>\*</strong>**privateKey** <strong style='color:#8792a2'>string</strong>

Generating a signature requires.

---

<strong style='color:red'>\*</strong>**type** <strong style='color:#8792a2'>'ETH' | 'ERC20' | 'ERC721' | 'ERC721M' | 'ERC721MC'</strong>

The token type.

---

<strong style='color:red'>\*</strong>**receiver** <strong style='color:#8792a2'>string</strong>

The wallet address of the receiver.

---

**amount** <strong style='color:#8792a2'>string | number</strong>

Amount of tokens to be transferred.

---

**contractAddress** <strong style='color:#8792a2'>string</strong>

Contract address.

---

**tokenId** <strong style='color:#8792a2'>string | number</strong>

tokenId of token.

---

**expirationTimestamp** <strong style='color:#8792a2'>number</strong>

The period to expire for the transfer, unit is seconds.

---

**tokenUrl** <strong style='color:#8792a2'>string</strong>

Token url of ERC721. If your contract type is ERM721MC, this parameter must be passed.

### Example

```tsx
const { data: res } = await reddio.apis.withdrawalFromL2({
  starkKey: "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda",
  privateKey: "",
  contractAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
  tokenId: 1,
  type: "ERC721",
  receiver: "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda",
  expirationTimestamp: 4194303,
});
```

### Example return

```json
{
  "status": "OK",
  "error": "",
  "data": {
    "sequence_id": 13
  }
}
```

## withdrawalFromL1

:::tip
You can only call the `withdrawalFromL1` funcation for the asset of withdrawal area, which means you must first call the `withdrawalFromL2` function and wait about 4 hours.
:::

**Parameters**

---

<strong style='color:red'>\*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>\*</strong>**assetType** <strong style='color:#8792a2'>string</strong>

The asset type.

---

<strong style='color:red'>\*</strong>**type** <strong style='color:#8792a2'>'ETH' | 'ERC20' | 'ERC721' | 'ERC721M' | 'ERC721MC'</strong>

The token type.

---

**tokenId** <strong style='color:#8792a2'>string | number</strong>

tokenId of token.

---

**tokenUrl** <strong style='color:#8792a2'>string</strong>

Token url of ERC721. If your contract type is ERM721MC, this parameter must be passed.

### Example

```tsx
await reddio.apis.withdrawalFromL1({
  starkKey: "0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda",
  assetType: "0x2d6e7b6a8e809f94ed4bef245e06437c18e033044a5787e15eda57be47929f",
  type: "ETH",
});
```

### Example return

[TransactionResponse API](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse).

## withdrawalStatus

Check if your asset is ready to withdraw to L1.

**Parameters**

---

<strong style='color:red'>\*</strong>**stage** <strong style='color:#8792a2'>string</strong>

Withdraw stage, currently we only support `withdrawarea`.

---

<strong style='color:red'>\*</strong>**ethaddress** <strong style='color:#8792a2'>string</strong>

ETH address.

### Example

```ts
const { data } = reddio.apis.withdrawalStatus({
  ethaddress: "0xC664B68aFceD392656Ed8c4adaEFa8E8ffBF65DC",
  stage: "withdrawarea",
});
```

### Example return

```json
{
  "status": "OK",
  "data": [
    {
      "contract_address": "0x0b26f9dBbEeF0636e90a98651a693Ceb1769d16B",
      "asset_id": "0x400558804d40a71b6b8e41bbacbb05c37c36d749b5dcdf6590421c4c9c66d89",
      "token_id": "1",
      "type": "ERC721M",
      "asset_type": "0x5836f15aead555b938a0d56b156fed17836162412ccc77a2e675bcb66336e6",
      "display_value": "",
      "symbol": "11",
      "amount": 1,
      "token_uri": null,
      "sequence_ids": [null]
    },
    {
      "contract_address": "0x0b26f9dBbEeF0636e90a98651a693Ceb1769d16B",
      "asset_id": "0x400c8cfab3df79d45d2dfdd979fd9e1ba5bd40cbf0c8d4a85b2a2f0ea6540dd",
      "token_id": "2",
      "type": "ERC721M",
      "asset_type": "0x5836f15aead555b938a0d56b156fed17836162412ccc77a2e675bcb66336e6",
      "display_value": "",
      "symbol": "11",
      "amount": 1,
      "token_uri": null,
      "sequence_ids": [null]
    },
  ],
  "error": null
}
```

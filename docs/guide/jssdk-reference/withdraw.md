# Withdraw

## withdrawalFromL2

:::tip
You need to wait about 4 hours to see the assets available for withdrawal in the withdraw area.
:::

Withdrawal to another Ethereum address for ERC-20/ETH and ERC-721.

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>*</strong>**privateKey** <strong style='color:#8792a2'>string</strong>

Generating a signature requires.

---

<strong style='color:red'>*</strong>**type** <strong style='color:#8792a2'>'ETH' | 'ERC20' | 'ERC721' | 'ERC721M'</strong>

The token type.

---

<strong style='color:red'>*</strong>**receiver** <strong style='color:#8792a2'>string</strong>

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

### Example

```tsx
const { data: res } = await reddio.apis.withdrawalFromL2({
  starkKey: '0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda',
  privateKey: '',
  contractAddress: '0x941661bd1134dc7cc3d107bf006b8631f6e65ad5',
  tokenId: 1,
  type: 'ERC721',
  receiver: '0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda',
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

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>*</strong>**assetType** <strong style='color:#8792a2'>string</strong>

The asset type.

---

<strong style='color:red'>*</strong>**type** <strong style='color:#8792a2'>'ETH' | 'ERC20' | 'ERC721' | 'ERC721M'</strong>

The token type.

---

**tokenId** <strong style='color:#8792a2'>string | number</strong>

tokenId of token.

### Example

```tsx
await reddio.apis.withdrawalFromL1({
  starkKey: '0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda',
  assetType: '0x2d6e7b6a8e809f94ed4bef245e06437c18e033044a5787e15eda57be47929f',
  type: 'ETH',
});
```

### Example return

[TransactionResponse API](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse).

## withdrawalStatus

Check if your asset is ready to withdraw to L1.

**Parameters**

---

<strong style='color:red'>*</strong>**stage** <strong style='color:#8792a2'>string</strong>

Withdraw stage, currently we only support `withdrawarea`.

---

<strong style='color:red'>*</strong>**ethaddress** <strong style='color:#8792a2'>string</strong>

ETH address.

### Example

```ts
const { data } = reddio.apis.withdrawalStatus({
  ethaddress: '0x067ceABFb722CA0034f39b88EE4004dAbc8ef33b',
  stage: 'withdrawarea',
});
```

### Example return

```json
{
  "status": "OK",
  "data": [
    {
      "contract_address": "eth",
      "asset_id": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
      "token_id": "",
      "type": "ETH",
      "asset_type": "0x352f9ffd821a525051de2d71126113505a7b0a73d98dbc0ac0ff343cfbdef5e",
      "display_value": "0.011",
      "symbol": "ETH",
      "amount": 11000
    },
    {
      "contract_address": "0x57f3560b6793dcc2cb274c39e8b8eba1dd18a086",
      "asset_id": "0x348d9f01e42582dee55ba5db85b0ab036671786ca9e140642d7b7a010abb159",
      "token_id": "",
      "type": "ERC20",
      "asset_type": "0x348d9f01e42582dee55ba5db85b0ab036671786ca9e140642d7b7a010abb159",
      "display_value": "100",
      "symbol": "RDD20",
      "amount": 100000000
    },
    {
      "contract_address": "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
      "asset_id": "0x36943f9a5f1e83ff2ed74e9d2c94088c3648c1cff7184f1b565a1890f2b640f",
      "token_id": "255",
      "type": "ERC721",
      "asset_type": "0x2b405eba724b638f4cf82ccadcd2741a120d2dbc69cb89a5fc315a9c443d592",
      "display_value": "1",
      "symbol": "REDDIO721",
      "amount": 1
    }
  ],
  "error": ""
}
```
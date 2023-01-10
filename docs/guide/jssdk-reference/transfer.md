# Transfer

## transfer

Transfer assets from sender to receiver on layer 2.

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
const { data } = await reddio.apis.transfer({
  starkKey: '0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda',
  privateKey: '',
  contractAddress: '0x941661bd1134dc7cc3d107bf006b8631f6e65ad5',
  tokenId: 1,
  type: 'ERC721',
  receiver: '0x761f1709a72a7e1d9a503faf2a1067686f315acdc825a804e1281fbd39accda',
  expirationTimestamp: 4194303,
});
```

# Contract

## ERC20
### approve()

**Parameters**

---

<strong style='color:red'>*</strong>**tokenAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

---

<strong style='color:red'>*</strong>**amount** <strong style='color:#8792a2'>string | number</strong>

Amount of tokens approve.

### Example

```tsx
const tx = await reddio.erc20.approve({
  tokenAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
  amount: "1",
});
```

### Return

[TransactionResponse](https://docs.ethers.org/v5/api/providers/types/#providers-TransactionResponse).

### allowance()

**Parameters**

---

<strong style='color:red'>*</strong>**tokenAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

### Example

```tsx
const tx = await reddio.erc20.allowance({
  tokenAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
});
```

### Return

[TransactionResponse](https://docs.ethers.org/v5/api/providers/types/#providers-TransactionResponse).

## ERC721
### approve()

**Parameters**

---

<strong style='color:red'>*</strong>**tokenAddress** <strong style='color:#8792a2'>string</strong>

Contract address of token.

---

<strong style='color:red'>*</strong>**tokenId** <strong style='color:#8792a2'>string | number</strong>

tokenId of token.


### Example

```tsx
const tx = await reddio.erc20.approve({
  tokenAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
  tokenId: "1",
});
```

### Return

[TransactionResponse](https://docs.ethers.org/v5/api/providers/types/#providers-TransactionResponse).
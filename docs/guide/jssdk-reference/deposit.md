# Deposit

## depositETH

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>*</strong>**quantizedAmount** <strong style='color:#8792a2'>string | number</strong>

Amount of ETH.

### Example

```tsx
await reddio.apis.depositETH({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
  quantizedAmount: "0.01",
});
```

## depositERC20

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>*</strong>**quantizedAmount** <strong style='color:#8792a2'>string | number</strong>

Amount of ERC20.

---

<strong style='color:red'>*</strong>**tokenAddress** <strong style='color:#8792a2'>string</strong>

Contract address of ERC20.

### Example

```tsx
await reddio.apis.depositERC20({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
  tokenAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
  quantizedAmount: "1",
});
```

## depositERC721

**Parameters**

---

<strong style='color:red'>*</strong>**starkKey** <strong style='color:#8792a2'>string</strong>

A unique key that identifies the user in the off-chain state.

---

<strong style='color:red'>*</strong>**tokenId** <strong style='color:#8792a2'>number</strong>

tokenId of ERC721.

---

<strong style='color:red'>*</strong>**tokenAddress** <strong style='color:#8792a2'>string</strong>

Contract address of ERC721.

---

**tokenUrl** <strong style='color:#8792a2'>string</strong>

Token url of ERC721. If your contract type is ERM721MC, this parameter must be passed.

### Example

```tsx
await reddio.apis.depositERC721({
  starkKey: "0x38cae143fe6d2b8bdb7051f211744017d98f7e6a67e45a5dfc08759c119cf3c",
  tokenAddress: "0x941661bd1134dc7cc3d107bf006b8631f6e65ad5",
  tokenId: 1,
  tokenUrl: "https://reddiousermetadata.reddio.com/25ab1cda-42b6-4451-8200-c8c4c4756daa/3",
});
```
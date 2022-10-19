# Contract

## ERC20
### approve()

- **Type**

```tsx
interface ErcCommonParams {
  tokenAddress: string;
}
interface ApproveErc20Params extends ErcCommonParams {
  amount: string | number;
}
declare const approve: (params: ApproveErc20Params) => Promise<TransactionResponse>;
```

[TransactionResponse API](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse).

- **Example**

```tsx
await reddio.erc20.approve({
  tokenAddress: "your layer 1 tokenAddress",
  amount: "approve amount",
});
```

### allowance()

- **Type**

```tsx
interface ErcCommonParams {
  tokenAddress: string;
}
export declare const allowance: (params: ErcCommonParams) => Promise<TransactionResponse>;
```

[TransactionResponse API](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse).

- **Example**

```tsx
await reddio.erc20.allowance({
  tokenAddress: "your layer 1 tokenAddress",
});
```

## ERC721
### approve()

- **Type**

```tsx
interface ErcCommonParams {
  tokenAddress: string;
}
interface ApproveErc721Params extends ErcCommonParams {
  tokenId: string | number;
}
declare const approve: (params: ApproveErc721Params) => Promise<TransactionResponse>;
```

[TransactionResponse API](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionResponse).

- **Example**

```tsx
await reddio.erc20.approve({
  tokenAddress: "your layer 1 tokenAddress",
  tokenId: "The NFT token id owned by the user",
});
```
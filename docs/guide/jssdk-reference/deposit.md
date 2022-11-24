# Deposit

## depositETH()

- **Type**

```tsx
interface DepositERC20Params {
  starkKey: string;
  quantizedAmount: number | string;
  tokenAddress: string;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  raw: Record<string, any>;
}
declare const depositERC20: (params: DepositERC20Params) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositETH({
  starkKey,
  tokenAddress,
  quantizedAmount: "deposit amount",
});
```

## depositERC20()

- **Type**

```tsx
interface DepositERC20Params {
  starkKey: string;
  quantizedAmount: number | string;
  tokenAddress: string;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  raw: Record<string, any>;
}
declare const depositERC20: (params: DepositERC20Params) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositERC20({
  starkKey,
  tokenAddress,
  quantizedAmount: "deposit amount",
});
```

## depositERC721()

- **Type**

```tsx
interface Deposit721Params {
  starkKey: string;
  tokenId: number;
  tokenAddress: string;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  raw: Record<string, any>;
}
declare const depositERC721: (params: Deposit721Params) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositERC721({
  starkKey,
  tokenAddress,
  tokenId,
});
```
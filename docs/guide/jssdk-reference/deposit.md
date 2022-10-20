# Deposit

## depositETH()

- **Type**

```tsx
interface DepositParams {
  starkKey: string;
  assetType: string;
  vaultId: string;
  quantizedAmount: number | string;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  // Blockchain specific contextual infos
  raw: Record<string, any>;
}
declare const depositERC20: (params: DepositParams) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositETH({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  quantizedAmount: "deposit amount",
});
```

## depositERC20()

- **Type**

```tsx
interface DepositParams {
  starkKey: string;
  assetType: string;
  vaultId: string;
  quantizedAmount: number | string;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  // Blockchain specific contextual infos
  raw: Record<string, any>;
}
declare const depositERC20: (params: DepositParams) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositERC20({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  quantizedAmount: "deposit amount",
});
```

## depositERC721()

- **Type**

```tsx
interface Deposit721Params {
  starkKey: string;
  assetType: string;
  vaultId: string;
  tokenId: number;
}
interface LogDeposit {
  depositorEthKey: string;
  starkKey: BigNumber;
  vaultId: BigNumber;
  assetType: BigNumber;
  nonQuantizedAmount: BigNumber;
  quantizedAmount: BigNumber;
  // Blockchain specific contextual infos
  raw: Record<string, any>;
}
declare const depositERC721: (params: Deposit721Params) => Promise<LogDeposit>;
```

- **Example**

```tsx
await reddio.apis.depositERC721({
  starkKey,
  assetType,
  vaultId: data.data.vault_ids[0],
  tokenId,
});
```
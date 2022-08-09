# Keypair

## generateFromEthSignature()

- **Type**

```tsx
// If you want to use object types, please refer to EIP-712
declare const generateFromEthSignature: (content: string | Record<string, any>) => Promise<{
    privateKey: string;
    publicKey: string;
}>;
```

- **Example**

```tsx
await reddio.keypair.generateFromEthSignature('Sign');
```
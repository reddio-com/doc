# Utils

## generateFromEthSignature

Generate starkKey and privateKey.

### Example

```tsx
await reddio.keypair.generateFromEthSignature();
```

### Example return

```json
{
  "publicKey": "0x503756893a0a80b4e650b7bbb6fe3485b04c3a68e2bf31161e55ae43a23d100",
  "privateKey": "14453a2ee2d834e23779278899e8a992f2be51f52690f2e859f08cd6671f7ec"
}
```

## generateFromSignTypedData

Generate starkKey and privateKey from signTypedData. If you want to custom typedMessage.

### Example

```tsx
const value = {
  domain: {
    chainId: 5,
  },
  message: {
    contents: "Generate layer 2 key",
  },
  primaryType: "Reddio",
  types: {
    EIP712Domain: [{ name: "chainId", type: "uint256" }],
    Reddio: [{ name: "contents", type: "string" }],
  },
};
const result = await signTypedData({
  domain: value.domain,
  value: value.message,
  types: value.types,
});
await reddio.keypair.generateFromSignTypedData(result);
```

### Example return

```json
{
  "publicKey": "0x503756893a0a80b4e650b7bbb6fe3485b04c3a68e2bf31161e55ae43a23d100",
  "privateKey": "14453a2ee2d834e23779278899e8a992f2be51f52690f2e859f08cd6671f7ec"
}
```

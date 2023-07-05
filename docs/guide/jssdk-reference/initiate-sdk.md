# Initiate SDK

## Install

```sh
$ yarn add @reddio.com/js
```

sdk relies on wagmi and ethers, two npm packages that you need.

## new Reddio()

**Parameters**

---

**env** <strong style='color:#8792a2'>'test' | 'main'</strong>

sdk environment variables.

### Example

```tsx
const reddio = new Reddio({
  env: 'test',
});
```
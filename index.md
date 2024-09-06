---
layout: home

hero:
  name: The Unrivaled Parallel zkEVM
  tagline: High performance parallel Ethereum-compatible Layer 2, leveraging zero-knowledge technology to achieve unrivaled computation scale with Ethereum-level security.
  actions:
    - theme: brand
      text: Get Started
      link: /zkevm/overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/reddio-com
features:
  - title: Multi-thread Parallel Execution
    details: Enables all transactions within the same block to be executed in parallel optimistically across multiple threads, leveraging the multi-core servers to achieve high throughput and low transaction fees.
  - title: GPU Acceleration Optimization
    details: Using NVIDIA’s CUDA parallel computing engine, the EVM instruction set has been optimized to accelerate its execution on GPU machines, resulting in performance that is magnitudes higher than the original multithreaded parallel execution.
  - title: Highly Secure by ZK and Ethereum
    details: The first L2 that can achieve parallel acceleration for zkEVM, ensuring high performance of our L2 while  providing the most reliable validity proofs on Ethereum
  - title: EVM Compatibility
    details: Bytecode level compatibility enables smooth transition to Layer 2 with all of your solidity smart contract code.
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg,#fb9386 0%,#e63537 70.82%,#526cfd 100%);
}
.action:first-child > a {
  background: linear-gradient(92.55deg, #FA9487 0.84%, #E63537 55.46%, #E53539 55.47%, #8858B4 100%) !important;
  border: none;
}
</style>

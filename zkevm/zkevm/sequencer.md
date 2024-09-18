# Modular Sequencer

Developed on the modular [Yu framework](https://github.com/yu-org/yu) and written in Golang by the Reddio team, the Modular Sequencer offers unparalleled flexibility and customization for developers. This open-source sequencer offers robust scaling solutions for decentralized application deployment.

![framework](/framework.png)

## Key Features

- **Modular Customization**

    The Modular Sequencer simplifies blockchain development, akin to building a web service, allowing easy integration of various modules such as multiple virtual machines (VMs) and Data Availability (DA) layers.

- **Multiple VM and DA Support**

    The Modular Sequencer supports EVM, Parallel EVM and CairoVM out of the box, and is designed to support a variety of VMs, including but not limited to Solana Virtual Machine (SVM), zkWASM, RISC0 and MoveVM without resource conflicts. It supports integration with multiple DA layers like Ethereum, Avail, Celestia, and more.

- **Advanced Prover and Anti-MEV Capabilities** 

    The Modular Sequencer aggregates multiple proving systems and coordinates zk proving tasks, enhancing security and offering specialized anti-Maximal Extractable Value (MEV) features to protect all DeFi dApp users on the platform.

- **Special L2 Consensus**

    The Modular Sequencer’s unique L2 consensus protocol is designed for high throughput and inherits the security and permissionless nature of L1, setting new standards in blockchain operations. Meanwhile Itachi supports integration with mainstream consensus like PoW, PoS, PBFT,dBFT, HotStuff, etc. Developers can also customize their own consensus protocols for more high-performance and customization.

- **High Performance**

    The Modular Sequencer excels in performance, delivering high transaction throughput (TPS) data under various testing conditions and hardware setups.

- **Layer 3 Appchain Compatibility**

    For projects with specific needs that L2 cannot satisfy, The Modular Sequencer facilitates the development of custom L3 Appchains, enhancing real-time performance and throughput as required by applications like RTT games.

- **Interoperability Across dApps**

    The Modular Sequencer ensures low-latency and reduced gas fees for cross-dApp interactions, enabling transactions such as a DeFi dApp triggering an action in a full-chain game, exemplifying seamless interoperability on the The Modular Sequencer.

To help developer scale their dApp whenever they need to launch their own Appchain on L2/L3, we open source it and you can refer to the [The Modular Sequencer SDK](/zkevm/sequencer/overview) on how to get started.
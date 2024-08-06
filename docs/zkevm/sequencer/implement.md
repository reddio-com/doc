# Building the Sequencers

Now, let's take a look at the process and components of building a sequencer with the Yu framework.

![sequencerimplement](/sequencer-implement.png)

1. When a transaction is initiated from the client to the blockchain, it first undergoes a check by the txpool. Only after passing this check is it entered into the transaction pool and then broadcast to other blockchain nodes. Transactions broadcast from other nodes received via the P2P network are checked and, if approved, placed into the txpool (without being broadcast further).

2. The process of land running begins with the generation of blocks, which involves a series of procedures: mining and creating blocks, broadcasting, validating blocks from other nodes, executing transactions within the blocks, and storing the blocks in the chain, among others. There is a great deal of flexibility in this process; you can implement any consensus protocol you prefer, set block times, decide how transactions are packaged, and choose when transactions are executed, etc. Interactions with the blockchain, txdb and state also occur during this process.

After each block goes through the logic of all custom tripod within the land, it enters the next block phase, where the next block is generated and processed, thus continuing in a cycle.

![internalprocess](/internal-process.png)

<center>Internal Process Diagram of the Land</center>
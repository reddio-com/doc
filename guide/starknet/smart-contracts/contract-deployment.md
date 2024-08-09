# Smart Contracts Deployment

This guide will show you how to deploy smart contract templates to the Starknet network.

By the end, you'll learn how to deploy it to the Starknet testnet, and mint ERC20 token on the smart contract.

Let's get started!

## Pull the smart contrct repo

You can get the contracts by,

```bash
git clone git@github.com:reddio-com/cairo.git
```

## Contract compilation

Let’s compile and deploy the contract. Starting from Starknet v0.11.0, Cairo 1.0 contracts can be deployed.

Before you start,  Starknet development tools need to be installed:

<ul style="padding-left: 40px;">
        <li>Starkli: A CLI tool for interacting with Starknet.</li>
        <li>Scarb: Cairo’s package manager that compiles code to Sierra, a mid-level language between Cairo and CASM.</li>
</ul>

### Install Starkli

If you're on Linux/macOS/WSL/Android, you can install stakrliup by running the following command:

```bash
curl https://get.starkli.sh | sh
```

You might need to restart your shell session for the starkliup command to become available. Once it's available, run the starkliup command:

```bash
starkliup
```

Running the commands installs starkli for you, and upgrades it to the latest release if it's already installed.

starkliup detects your device's platform and automatically downloads the right prebuilt binary. It also sets up shell completions. You might need to restart your shell session for the completions to start working.

### Install Scarb

```bash
curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh
```

For Windows, follow manual setup in the [Scarb documentation](https://docs.swmansion.com/scarb/download.html?ref=blog.reddio.com#windows).

Restart the terminal and check if Scarb is installed correctly:

```bash
scarb --version
```

### Compile & Build

```bash
scarb build
```

Then you will get the target directory, which contains the compiled sierra files.

## Account Creation

Generate keystore:

```bash
starkli signer keystore new /path/to/keystore
```

then a keystore file will be created at /path/to/keystore.

You can then use it via the --keystore `<PATH>` option for commands expecting a signer.

Alternatively, you can set the STARKNET_KEYSTORE environment variable to make command invocations easier:

```bash
export STARKNET_KEYSTORE="/path/to/keystore"
```

Before creating an account, you must first decide on the variant to use. As of this writing, the only supported variant is oz, the OpenZeppelin account contract.

All variants come with an init subcommand that creates an account file ready to be deployed. For example, to create an oz account:

```bash
starkli account oz init /path/to/account
```

## Account deployment

Once you have an account file, you can deploy the account contract with the starkli account deploy command. This command sends a DEPLOY_ACCOUNT transaction, which requires the account to be funded with some ETH for paying for the transaction fee.

*Note: You can get some test funds [here](https://faucet.goerli.starknet.io/?ref=blog.reddio.com).*

For example, to deploy the account we just created:

```bash
starkli account deploy /path/to/account
```

When run, the command shows the address where the contract will be deployed on, and instructs the user to fund the account before proceeding. Here's an example command output:

```
The estimated account deployment fee is 0.000011483579723913 ETH. 
However, to avoid failure, fund at least: 0.000017225369585869 ETH 
to the following address: 
0x01cf4d57ba01109f018dec3ea079a38fc08b789e03de4df937ddb9e8a0ff853a 
Press [ENTER] once you've funded the address.
```
Once the account deployment transaction is confirmed, the account file will be update to reflect the deployment status. It can then be used for commands where an account is expected. You can pass the account either with the --account parameter, 
or with the STARKNET_ACCOUNT environment variable.

## Declaring classes

In Starknet, all deployed contracts are instances of certain declared classes. Therefore, the first step of deploying a contract is declaring a class, if it hasn't been declared already.

With Starkli, this is done with the starkli declare command.

Before declare, you should set environment variables for Starkli:

```bash
export STARKNET_RPC="https://starknet-goerli.reddio.com"
export STARKNET_ACCOUNT=/path/to/keystore 
export STARKNET_KEYSTORE=/path/to/account
```

*Notes: To make the deployment easier, you can declare STARKNET_RPC to be Reddio's [RPC node](/guide/node/starknet) for Starknet testnet.*

After scarb build, you will get the *.json file in the target directory, which we'll use to declare the contract class:

starkli declare *.json

such as:

```bash
starkli declare target/dev/reddio_cairo_ERC20.contract_class.json
```

If you encounter the following error:

```
Error: No such file or directory (os error 2)
```

The chance is you are not defining environment variables correctly, make sure you use absolute path for the file path.

If you get an error like this:

```
Not declaring class as it's already declared.
```

This is because the class has been declared by someone else before and a class cannot be declared twice in Starknet. You can just deploy it using the current declared class or write a new unique contract.

Once the declaration is successful, Starkli displays the class hash declared. The class hash is needed for deploying contracts as below,

```
Enter keystore password:
Sierra compiler version not specified. Attempting to automatically decide version to use...
Network detected: goerli-1. 
Using the default compiler version for this network: 2.1.0. Use the --compiler-version flag to choose a different version.
Declaring Cairo 1 class: 0x004d09cf179b98c6551ac5114c10f21674b8955fdd6104dbc7c79b75177da690
Compiling Sierra class to CASM with compiler version 2.1.0...
CASM class hash: 0x04e224312aea85f8a343cd5e7d6ae7a063a6151cf809a8c9dbc3bc022b0e83bb
Contract declaration transaction: 0x07d6d3559e939f282b59048473effe52321bd204faff72d56dd4286bef934046
Class hash declared:
0x004d09cf179b98c6551ac5114c10f21674b8955fdd6104dbc7c79b75177da690
```

## Deploying the ERC20 contract

Once you obtain a class hash by declaring a class, it's ready to deploy instances of the class.

With Starkli, this is done with the starkli deploy command.

To deploy a contract with class hash `<CLAS_HASH>`, simply run:

```bash
starkli deploy <CLASS_HASH> <CONSTRUCTOR_INPUTS>
```

where `<CONSTRUCTOR_INPUTS>` is the list of constructor arguments, if any.

Note that string parameters should be cast to hexadecimal in CLI. So we need to convert a short string to a felt252 format. We can use the to-cairo-string command for this:

```bash
starkli to-cairo-string <STRING>
```

In this case, we'll use the string "reddiotoken" as the name and the symbol:

```bash
starkli to-cairo-string reddiotoken
```

The output:

```
0x72656464696f746f6b656e
```

We will define decimals as 0x12, which is 18, to align with ETH and ERC20 convention.

Now deploy using a class hash and constructor input:

```bash
starkli deploy 0x004d09cf179b98c6551ac5114c10f21674b8955fdd6104dbc7c79b75177da690 0x72656464696f746f6b656e 0x72656464696f746f6b656e 0x12
```

The output should appear similar to:

```
Deploying class 
0x004d09cf179b98c6551ac5114c10f21674b8955fdd6104dbc7c79b75177da690 
with salt 
0x046c071e77a7d09a3e2a9684ab7c59ff8bccc6cec23ede033cee82f75e50f2cc...
The contract will be deployed at address 
0x007dda0853091a7f359b17eeb5ea234c9a626da5f389837c4cbeba9ff88e5bb6
Contract deployment transaction: 
0x0264dd8f0bfdf373dcd78932676cd4ca987e33313521100c6ef8e286048c2b4e
Contract deployed:
0x007dda0853091a7f359b17eeb5ea234c9a626da5f389837c4cbeba9ff88e5bb6
```

*NOTE: The deployed address received will differ for every user. Retain this address, as it will replace instances in subsequent TypeScript files to match the specific contract address.*

Well done! The Cairo ERC20 smart contract has been deployed successfully on Starknet. You can find the deployed token at [Starkscan](https://testnet.starkscan.co/contract/0x007dda0853091a7f359b17eeb5ea234c9a626da5f389837c4cbeba9ff88e5bb6?ref=blog.reddio.com).

## Interacting with the Contract

Starkli enables interaction with smart contracts via two primary methods: call for read-only functions and invoke for write functions that modify the state.

### Invoking contracts

With Starkli, this is done with the starkli invoke command.

The basic format of a starkli invoke command is the following:

```bash
starkli invoke <ADDRESS> <SELECTOR> <ARGS>
```

For example, to mint 1,000,000 tokens for ERC20 contract to 0x4e1f5590b0fc94f4ba6b563937ec652a9cbfc7b7372433fb4f1eaf2464a3de, you can run:

```bash
starkli invoke 0x007dda0853091a7f359b17eeb5ea234c9a626da5f389837c4cbeba9ff88e5bb6 mint 0x4e1f5590b0fc94f4ba6b563937ec652a9cbfc7b7372433fb4f1eaf2464a3de u256:100000
```

### Calling a Read Function

The call command enables you to query a smart contract function without sending a transaction. For instance, to find out who the current name of the contract is, you can use the get_owner function, which requires no arguments.


```bash
starkli call 0x007dda0853091a7f359b17eeb5ea234c9a626da5f389837c4cbeba9ff88e5bb6 get_name
```

Replace <CONTRACT_ADDRESS> with the address of your contract. The command will return the ERC20 token name, which was initially set during the contract’s deployment:

```
[
    "0x00000000000000000000000000000000000000000072656464696f746f6b656e"
]
```

Similarly, to query the total supply after you invoke the mint function,

```bash
starkli call 0x007dda0853091a7f359b17eeb5ea234c9a626da5f389837c4cbeba9ff88e5bb6 get_total_supply
```

Here's the returned result,

```
[
    "0x00000000000000000000000000000000000000000000000000000000000f4240",
    "0x0000000000000000000000000000000000000000000000000000000000000000"
]
```
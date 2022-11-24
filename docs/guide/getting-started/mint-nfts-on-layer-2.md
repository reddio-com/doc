# Mint NFTs On Layer 2

## Create ERC721M smart contract on layer 1

You can create ERC721M smart contract on layer 1 in two ways. First, you can use Reddio's contract deployment tool at https://deploy-contract.reddio.com/ to create smart contract with single click. Second, if you want to deploy smart contract yourself, you can check our ERC721M contract through [github repo](https://github.com/reddio-com/contract_demo/blob/main/src/contracts/ERC721MintFor.sol).

To make sure the sample code works, please install Metamask with Goerli network. Deploying ERC721M smart contract will need some credits as gas fee. If you want to deploy it on the Görli Network (testnet), you can get some test credit through https://goerlifaucet.com/.

::: warning
Please keep the smart contract address after creation. We will use it as Token Address later on layer2.
:::

## View your smart contract on layer 1
After you have your smart contract address, you can view your contract detail through etherscan.io.

If you are deploying to Görli Network, you can view your contract at`https://goerli.etherscan.io/address/{your_smart_contract_address}` . 

If you are deploying to mainnet, you can view your contract at `https://etherscan.io/address/{your_smart_contract_address}`. 
 
 For example, if your smart contract address is `0x4240e8xxxxxxxxxxxxxxxxx1` and you are using goerli network. 
 
 A valid URL would be `https://goerli.etherscan.io/address/0x4240e8xxxxxxxxxxxxxxxxx1`.

 ## Binding smart contract with project
You need to bind your contract address with your project  on dashboard. To do that, you need to have a Reddio account. If you don’t have an account, you can get one by registring through https://dashboard.reddio.com/.

To bind your contract address with project, go to https://dashboard.reddio.com/.  And you can see the project management tab on the top left of the dashboard page. 
<p align="center">
  <img src="/mintNFT1.png" alt="mintNFT1"/>
</p>

You can either select the project you want to choose or create a new project. After that, you shall click “Edit Project” button. A window will appear to ask for your input. We will explain what’s the meaning of each word.
<p align="center" >
  <img style="max-width:55%;" src="/mintNFT2.png" alt="mintNFT2"/>
</p>
“Project Name” is the project name of your project. You can change to any name you like.

“Contract Address” is the smart contract address you get through deployment.

“Contract Type” is the type our your smart contract. Since we are minting NFTs in this tutorial, you need to select ERC721M.

“Base Uri” stores your contract’s metadata. 

After you finish typing in all the things above, you can click “Edit the Project” button to save the data.

## Connect wallet and get public key on layer 2
To mint on layer 2, you will need to create a wallet on layer 2. Like how wallet works in layer 1, layer 2 wallet has its own public key and private key.  You will need the public key or stark_key to mint on layer 2.

We offer three ways to do that. But we only recommend first two ways since you can check your NFTs later on our demos by first two methods.

First, you can use Javascript SDK with MetaMask to generate the wallet.

```jsx
const connect = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', [])
}

const generateKey = async () => {
  return await reddio.keypair.generateFromEthSignature();
};
```
Second, you can go to our demo application to see your stark_key pairs. To do that, you need to first go to https://demos.reddio.com/ and login in with your own MetaMask. Then, open the developer tools or console on your browser. You will see two lines on your console. The first line is stark_key. The second line is stark_private_key. 

<p align="center">
  <img src="/mintNFT3.png" alt="mintNFT3"/>
</p>

Third, you can simply go to https://api.reddio.com/v1/wallets. A stark_key and stark_private_key will be provided for you. Details can be found here https://docs.reddio.com/guide/api-reference/utils.html. However, you will not able to see your NFTs through demo by this method.

## Grab your API key
An API key is required for minting, since Reddio needs to authorize your identity while minting. To get your API key, simply go to https://dashboard.reddio.com/. API key is shown on the top right down below the navigation bar. You can click on the API key input form, API key will be copied to your clipboard automatically.
<p align="center">
  <img src="/mintNFT4.png" alt="mintNFT4"/>
</p>

## Mint ERC721M tokens on layer 2

There are two ways to mint your ERC721M tokens. Curl and SDK.

If you use Mac/Linux, you can use follwing codes to mint your ERC721M tokens:

```shell
$ curl -v  https://api-dev.reddio.com/v1/mints  -H 'content-type: application/json' -H 'X-API-Key: {your_api_key}'  -d '{ "contract_address":"{smart_contract_address}", "stark_key":"{your_starkkey}", "amount":"10"}'
```
If you use Windows system, you can use follwing codes to mint your ERC721M tokens:

```shell
curl -v https://api-dev.reddio.com/v1/mints -H "content-type: application/json" -H "X-API-Key: {your_api_key}" -d "{ \"contract_address\":\"{smart_contract_address}\", \"stark_key\":\"{your_starkkey}\", \"amount\":\"10\"}"
```

Carefully replace {your_api_key}、{smart_contract_address}、{your_starkkey} parameters with your own parameters.  

For example, suppose your `contract_address` is `0x4240e8xxxxxxxxxxxxxxxxx1and` your `stark_key` is `0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda`, you can use the following `cURL` command to send a mint request to our backend if you are using Mac/Linux:

```shell
curl -v  https://api-dev.reddio.com/v1/mints -H 'content-type: application/json' -d '{ "contract_address":"0x4240e8xxxxxxxxxxxxxxxxx1", "stark_key":"0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda", "amount":"10"}' -H 'x-api-key: rk-xxxxxx-4326-4b58-ae69-xxxxxxxx'
```

You can also use our SDKs to mint ERC721M tokens. Please consult with our SDK pages to see more. You can check our SDK [here](/guide/jssdk-reference/initiate-sdk.html).

## Check your ERC721M balance and collection
You can query the balance with Reddio’s API through `https://api-dev.reddio.com/v1/balances?stark_key={your_starkkey}&page=1&limit=100`. 

Carefully replace {your_starkkey} with your own stark_key. Suppose your stark_key is `0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda`. 

A valid URL would be `https://api-dev.reddio.com/v1/balances?stark_key=0x761f170xxxxxxxxxxxxxxxxxxxxxxxxxxxfbd39accda&page=1&limit=100`. 

You can view your ERC721M collections with Reddio’s API through  `https://api-dev.reddio.com/v1/nfts/{smart_contract_address}`.

Carefully replace {smart_contract_address} parameters with your own smart contract address. Suppose your contract address is `0x4240e8xxxxxxxxxxxxxxxxx1`. 

A valid URL would be `https://api-dev.reddio.com/v1/nfts/0x4240e8xxxxxxxxxxxxxxxxx1`.

Finally, you can check your NFTs through Reddio’s demo. Just go to [https://demos.reddio.com/](https://demos.reddio.com/) and login in with your own wallet. You will see your NFTs right there only if you use javascript SDK to generate your stark_key pairs or get stark_key pairs from demo application.
import { defineConfig } from 'vitepress'
// import { generateSitemap as sitemap } from "sitemap-ts";
import fs from 'fs'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Reddio',
  description: 'Reddio Developer Documentations',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  scrollOffset: 'header',

  head: [
    ['meta', { name: 'keywords', content: 'reddio,reddio doc,parallel zkevm' }],
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-DZPN2FT3DF',
        async: '',
      },
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/google.js'),
        'utf-8'
      ),
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.svg',
      },
    ],
  ],
  
  sitemap: {
    hostname: 'https://docs.reddio.com',
  },

  themeConfig: {
    nav: nav(),
    logo: '/logo.svg',
    sidebar: {
      '/guide/': sidebarService(),
      '/zkevm/': sidebarZkevm(),
    },

    footer: {
      copyright: `Copyright © 2022-${new Date().getFullYear()} Reddio`,
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '6CHRL3MCD9',
        apiKey: '3c694d2add3aef6cd4fcba30fbfa7bcd',
        indexName: 'reddio',
      },
    },

    outline: {
      label: 'TABLE OF CONTENTS',
    },
  },
})

function nav() {
  return [
    { text: 'zkEVM', link: '/zkevm/overview', activeMatch: '/zkevm/' },
    {
      text: 'Platform',
      link: '/guide/zkvm/overview',
      activeMatch: '/guide/',
    },
    { text: 'Dashboard', link: 'https://dashboard.reddio.com/' },
    { text: 'API References', link: 'https://api-docs.reddio.com/' },
    { text: 'Changelog', link: '/guide/introduction/changelog' },
  ]
}

function sidebarService() {
  return [
      /*
    {
      text: 'REDSONIC',
      collapsible: true,
      items: [
        {
          text: 'GETTING STARTED',
          collapsible: true,
          items: [
            { text: 'Overview', link: '/guide/introduction/overview' },
            { text: 'Features', link: '/guide/introduction/feature' },
            { text: 'Concepts', link: '/guide/introduction/concepts' },
          ],
        },
        {
          text: 'NFTs',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Create metadata',
              link: '/guide/getting-started/set-up-metadata-for-your-nfts',
            },
            {
              text: 'Mint NFTs from dashboard',
              link: '/guide/getting-started/mint-nfts-on-layer-2',
            },
            {
              text: 'Mint NFTs with APIs',
              link: '/guide/getting-started/mint-nfts-with-api-calls-on-layer-2.md',
            },
            {
              text: 'Check NFTs balance',
              link: '/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-erc721-erc721m-balance-on-layer-2',
            },
            {
              text: 'Layer 1 and Layer 2 bridge',
              link: '/guide/getting-started/transfer-nfts-between-layer-1-and-layer-2',
            },
            {
              text: 'Withdraw to Layer 1 with Javascript SDK',
              link: '/guide/getting-started/withdraw-nfts-to-layer-1-with-jssdk.md',
            },
            {
              text: 'Launch on mainnet',
              link: '/guide/getting-started/publish-your-erc721-project-to-mainnet.md',
            },
          ],
        },
        {
          text: 'Fungible Tokens',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Issue ERC20 on Layer 2',
              link: '/guide/getting-started/issue-tokens-on-layer2',
            },
            {
              text: 'Check ERC20 balance',
              link: '/guide/getting-started/check-your-eth-erc20-nft-balance.html#view-eth-erc20-balance-on-layer-2',
            },
            {
              text: 'Launch on mainnet',
              link: '/guide/getting-started/publish-your-erc20-project-to-mainnet.md',
            },
            {
              text: 'Integrate USDC payment to your App',
              link: '/guide/getting-started/integrate-payment-service-for-web2-projects-with-reddio.md',
            },
          ],
        },
        {
          text: 'NFT Marketplace',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Build In-app Marketplace',
              link: '/guide/getting-started/build-in-app-marketplace-on-layer-2',
            },
            {
              text: 'Withdraw to Opensea',
              link: '/guide/getting-started/withdraw-nfts-to-opensea',
            },
            {
              text: 'Withdraw to Opensea with self-hosted metadata',
              link: '/guide/getting-started/withdraw-nfts-to-opensea-with-self-hosted-metadata',
            },
          ],
        },
        {
          text: 'Smart Contract Operations',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Import contracts',
              link: '/guide/getting-started/import-contracts-to-reddio',
            },
          ],
        },
        {
          text: 'Javascript SDK',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Initiate SDK',
              link: '/guide/SDKs/jssdk-reference/initiate-sdk',
            },
            { text: 'Utils', link: '/guide/SDKs/jssdk-reference/utils' },
            { text: 'Deposit', link: '/guide/SDKs/jssdk-reference/deposit' },
            { text: 'Withdraw', link: '/guide/SDKs/jssdk-reference/withdraw' },
            { text: 'Transfer', link: '/guide/SDKs/jssdk-reference/transfer' },
            { text: 'Balance', link: '/guide/SDKs/jssdk-reference/balance' },
            { text: 'Record', link: '/guide/SDKs/jssdk-reference/record' },
            { text: 'Contract', link: '/guide/SDKs/jssdk-reference/contract' },
            { text: 'Order', link: '/guide/SDKs/jssdk-reference/order' },
          ],
        },
        {
          text: 'Java Helper Library',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Introduction',
              link: '/guide/javasdk-reference/java-introduction',
            },
            {
              text: 'Getting started',
              link: '/guide/javasdk-reference/java-getting-started-tutorial',
            },
            {
              text: 'Watching transaction events',
              link: '/guide/javasdk-reference/java-watch-eth-events',
            },
          ],
        },
        {
          text: 'REFERENCES',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'How does Layer 2 work',
              link: '/guide/reference/how-does-layer-2-works',
            },
            {
              text: 'How does Reddio work',
              link: '/guide/reference/how-does-reddio-works',
            },
            {
              text: 'How does marketplace work',
              link: '/guide/reference/how_orderbook_and_marketplace_work',
            },
            {
              text: 'Which blockchain to use',
              link: '/guide/reference/which_blockchain_network_should_i_use',
            },
            { text: 'FAQs', link: '/guide/reference/faq' },
          ],
        },
      ],
    },

       */
    {
      text: 'REDDIO ZKVM LAYER 2',
      collapsible: true,
      items: [
        {
          text: 'Overview',
          link: '/guide/zkvm/overview',
        },
        // {
        //   text: "Unity SDK",
        //   collapsed: true,
        //   collapsible: true,
        // },
      ],
    },
    {
      text: 'STARKNET',
      collapsible: true,
      items: [
        {
          text: 'Smart Contracts',
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: 'Overview',
              link: '/guide/starknet/smart-contracts/overview',
            },
            {
              text: 'Contract Depolyment',
              link: '/guide/starknet/smart-contracts/contract-deployment',
            },
            {
              text: 'Web Sample App',
              link: '/guide/starknet/smart-contracts/token-sample-app',
            },
          ],
        },
        // {
        //   text: "Unity SDK",
        //   collapsed: true,
        //   collapsible: true,
        // },
      ],
    },

    // {
    //   text: "API Reference",
    //   collapsed: true,
    //   collapsible: true,
    //   items: [
    //     { text: "API reference", link: "/guide/api-reference/api-reference" },
    //   ],
    // },

    {
      text: 'INFRASTRUCTURE',
      collapsible: true,
      items: [
        {
          text: 'StarkNet node',
          link: '/guide/node/starknet',
        },
        {
          text: 'Ethereum node',
          link: '/guide/node/ethereum',
        },
        {
          text: 'Storage to IPFS',
          link: '/guide/getting-started/upload-files-to-ipfs',
        },
      ],
    },
  ]
}

function sidebarZkevm() {
  return [
    {
      text: 'INTRODUCTION TO REDDIO',
      collapsible: true,
      items: [
        {
          text: 'Overview',
          link: '/zkevm/overview',
        },
        {
          text: 'Parallel Execution',
          link: '/zkevm/parallel',
        },
        {
          text: 'GPU Acceleration',
          link: '/zkevm/gpuacceleration',
        },
        {
          text: 'Modular Sequencer',
          link: '/zkevm/sequencer',
        },
        // {
        //   text: "Unity SDK",
        //   collapsed: true,
        //   collapsible: true,
        // },
      ],
    },
    {
      text: 'REDDIO SEPOLIA DEVNET',
      collapsible: true,
      items: [
        {
          text: 'User Guide',
          link: '/zkevm/userguide',
        },
        {
          text: 'Developer Guide',
          link: '/zkevm/developerguide',
        },
      ],
    },
    {
      text: 'MODULAR SEQUENCER SDK',
      collapsible: true,
      items: [
        {
          text: 'Overview',
          link: '/zkevm/sequencer/overview',
        },
        {
          text: 'The Sequencer Composition',
          link: '/zkevm/sequencer/composition',
        },
        {
          text: 'Building the Sequencer',
          link: '/zkevm/sequencer/implement',
        },
        {
          text: 'Components of Yu Framework',
          link: '/zkevm/sequencer/yucomponents',
        },
        {
          text: 'Configure Your Blockchain',
          link: '/zkevm/sequencer/configurechain',
        },
        // {
        //   text: "Unity SDK",
        //   collapsed: true,
        //   collapsible: true,
        // },
      ],
    },
    {
      text: 'POINTS AND STAKING',
      collapsible: true,
      items: [
        {
          text: 'Overview',
          link: '/zkevm/points',
        },
        {
          text: 'Staking',
          link: '/zkevm/staking',
        },
      ],
    },
  ]
}

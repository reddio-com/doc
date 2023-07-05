import fs from "fs";
import path from "path";
import { generateSitemap as sitemap } from "sitemap-ts";
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Reddio",
  description: "Reddio Developer Documentations",
  scrollOffset: "header",
  lastUpdated: true,

  head: [
    ["meta", { name: "keywords", content: "reddio,reddio doc,starkex" }],
    [
      "script",
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-DZPN2FT3DF",
        async: "",
      },
    ],
    [
      "script",
      {},
      fs.readFileSync(
        path.resolve(__dirname, "./inlined-scripts/google.js"),
        "utf-8"
      ),
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/logo.svg",
      },
    ],
  ],

  buildEnd: () => {
    let dynamicRoutes = [];
    const files = fs.readdirSync(path.resolve(__dirname, "../guide"), {
      withFileTypes: true,
    });
    const directoriesInDirectory = files
      .filter((item) => item.isDirectory())
      .map((item) => item.name);

    directoriesInDirectory.forEach((dirPath) => {
      const files = fs.readdirSync(
        path.resolve(__dirname, "../guide/" + dirPath)
      );
      dynamicRoutes = dynamicRoutes.concat(
        files.map((file) => {
          if (
            dirPath === "api-reference" &&
            file.split(".md")[0] !== "api-reference"
          ) {
            return "";
          }
          return `/guide/${dirPath}/${file.split(".md")[0]}`;
        })
      ).filter((item) => item !== "");
    });
    sitemap({
      hostname: "https://docs.reddio.com",
      outDir: "/docs/.vitepress/dist",
      extentions: ["html"],
      dynamicRoutes,
    });
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide": sidebarService(),
    },

    footer: {
      license: {
        text: "MIT License",
        link: "https://opensource.org/licenses/MIT",
      },
      copyright: `Copyright © 2022-${new Date().getFullYear()} Reddio`,
    },

    search: {
      provider: "algolia",
      options: {
        appId: "6CHRL3MCD9",
        apiKey: "3c694d2add3aef6cd4fcba30fbfa7bcd",
        indexName: "reddio",
      },
    },
  },
});

function nav() {
  return [
    { text: "Dashboard", link: "https://dashboard.reddio.com/" },
    { text: "API References", link: "https://api-docs.reddio.com/" },
  ];
}

function sidebarService() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [
        { text: "Overview", link: "/guide/introduction/overview" },
        { text: "Features", link: "/guide/introduction/feature" },
        { text: "Concepts", link: "/guide/introduction/concepts" },
      ],
    },
    {
      text: "Basic Guide",
      collapsible: true,
      items: [
        {
          text: "Import Contracts To Reddio",
          link: "/guide/getting-started/import-contracts-to-reddio",
        },
        {
          text: "Upload Files to IPFS",
          link: "/guide/getting-started/upload-files-to-ipfs",
        },
        {
          text: "Set up metadata for your NFTs",
          link: "/guide/getting-started/set-up-metadata-for-your-nfts",
        },
        {
          text: "Mint NFTs on layer 2",
          link: "/guide/getting-started/mint-nfts-on-layer-2",
        },
        {
          text: "Check your ETHs/ERC20s/NFTs balance",
          link: "/guide/getting-started/check-your-eth-erc20-nft-balance",
        },
        {
          text: "Transfer NFTs between layer 1 and layer 2",
          link: "/guide/getting-started/transfer-nfts-between-layer-1-and-layer-2",
        },
        {
          text: "Issue ERC20 Tokens on layer 2",
          link: "/guide/getting-started/issue-tokens-on-layer2",
        },
        {
          text: "Withdraw NFTs To Opensea From Layer 2",
          link: "/guide/getting-started/withdraw-nfts-to-opensea",
        }
      ],
    },
    {
      text: "Advanced Guide",
      collapsible: true,
      collapsed: true,
      items: [
        {
          text: "Build In-app Marketplace on layer 2",
          link: "/guide/getting-started/build-in-app-marketplace-on-layer-2",
        },
        {
          text: "Withdraw NFTs To Opensea From Layer 2 With Self-Hosted Metadata Server",
          link: "/guide/getting-started/withdraw-nfts-to-opensea-with-self-hosted-metadata",
        }
        
      ],
    },
    {
      text: "API Reference",
      collapsed: true,
      collapsible: true,
      items: [
        { text: "API reference", link: "/guide/api-reference/api-reference" },
      ],
    },
    {
      text: "Javascript SDK",
      collapsed: true,
      collapsible: true,
      items: [
        { text: "Initiate SDK", link: "/guide/jssdk-reference/initiate-sdk" },
        { text: "Utils", link: "/guide/jssdk-reference/utils" },
        { text: "Deposit", link: "/guide/jssdk-reference/deposit" },
        { text: "Withdraw", link: "/guide/jssdk-reference/withdraw" },
        { text: "Transfer", link: "/guide/jssdk-reference/transfer" },
        { text: "Balance", link: "/guide/jssdk-reference/balance" },
        { text: "Record", link: "/guide/jssdk-reference/record" },
        { text: "Contract", link: "/guide/jssdk-reference/contract" },
        { text: "Order", link: "/guide/jssdk-reference/order" },
      ],
    },
    {
      text: "Java SDK",
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: "Introduction to the Reddio Java SDK",
          link: "/guide/javasdk-reference/java-introduction",
        },
        {
          text: "Getting started with Reddio Java SDK",
          link: "/guide/javasdk-reference/java-getting-started-tutorial",
        },
        {
          text: "Watching transaction events using the Reddio Java SDK",
          link: "/guide/javasdk-reference/java-watch-eth-events",
        },
      ],
    },
    {
      text: "Reference",
      collapsed: true,
      collapsible: true,
      items: [
        {
          text: "Layer 2 introduction",
          link: "/guide/reference/layer-2-introduction",
        },
        {
          text: "How does layer 2 works",
          link: "/guide/reference/how-does-layer-2-works",
        },
        {
          text: "How does Reddio works",
          link: "/guide/reference/how-does-reddio-works",
        },
        {
          text: "How orderbook and marketplace work",
          link: "/guide/reference/how_orderbook_and_marketplace_work",
        },
        {
          text: "Which blockchain network should I use",
          link: "/guide/reference/which_blockchain_network_should_i_use",
        },
        { text: "Terminology", link: "/guide/reference/terminology" },
        { text: "FAQ", link: "/guide/reference/faq" },
      ],
    },
  ];
}

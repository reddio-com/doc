import { headerPlugin } from "./headerMdPlugin";
import fs from "fs";
import path from "path";
import { generateSitemap as sitemap } from "sitemap-ts";

export default {
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
        rel: "canonical",
        href: "https://docs.reddio.com/",
      },
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
    ["../api", "../sdk", "../service"].forEach((dirPath) => {
      const files = fs.readdirSync(path.resolve(__dirname, dirPath));
      dynamicRoutes = dynamicRoutes.concat(
        files.map(
          (file) => `/${dirPath.split("../")[1]}/${file.split(".md")[0]}`
        )
      );
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

    // editLink: {
    //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //     text: 'Edit this page on GitHub'
    // },

    // socialLinks: [
    //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      license: {
        text: "MIT License",
        link: "https://opensource.org/licenses/MIT",
      },
      copyright: `Copyright © 2022-${new Date().getFullYear()} Reddio`,
    },

    markdown: {
      config(md) {
        md.use(headerPlugin);
      },
    },
  },
};

function nav() {
  return [
    { text: "Dashboard", link: "https://dashboard.reddio.com/" },
    // { text: 'SDK', link: '/guide/jssdk-reference/initiate-sdk.html', activeMatch: '/guide/jssdk-reference/initiate-sdk.html' },
    // { text: 'APIs', link: '/guide/api-reference/API_Reference.html', activeMatch: '/guide/api-reference/API_Reference.html' },
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
        { text: "Changelog", link: "/guide/introduction/changelog" },
      ],
    },
    {
      text: "Getting started",
      collapsible: true,
      items: [
        {
          text: "Mint NFTs on layer 2",
          link: "/guide/getting-started/mint-nfts-on-layer-2",
        },
        {
          text: "Set up metadata for your NFTs",
          link: "/guide/getting-started/set-up-metadata-for-your-nfts",
        },
        {
          text: "Transfer NFTs between layer 1 and layer 2",
          link: "/guide/getting-started/transfer-nfts-between-layer-1-and-layer-2",
        },
        {
          text: "Transfer ETHs between layer 1 and layer 2",
          link: "/guide/getting-started/transfer-eths-between-layer-1-and-layer-2",
        },
        {
          text: "Transfer ERC20s between layer 1 and layer 2",
          link: "/guide/getting-started/transfer-erc20s-between-layer-1-and-layer-2",
        },
        {
          text: "Check your ETHs/ERC20s/NFTs balance",
          link: "/guide/getting-started/check-your-eth-erc20-nft-balance",
        },
        {
          text: "In-app marketplace demo",
          link: "/guide/getting-started/marketplace-demo",
        },
      ],
    },
    {
      text: 'Java SDK',
      collapsed: true,
      collapsible: true,
      items: [
       { text: 'Introduction to the Reddio Java SDK', link: '/guide/javasdk-reference/java-introduction' },
       { text: 'Getting started with Reddio Java SDK', link: '/guide/javasdk-reference/java-getting-started-tutorial' },
       { text: 'Watching transaction events using the Reddio Java SDK', link: '/guide/javasdk-reference/java-watch-eth-events' },
     ],
    },    
    {
      text: "JS SDK",
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
      text: "API Reference",
      collapsed: true,
      collapsible: true,
      items: [
        { text: "API reference", link: "/guide/api-reference/api-reference" },
        { text: "Utils", link: "/guide/api-reference/utils" },
        { text: "Project", link: "/guide/api-reference/project" },
        { text: "Withdraw", link: "/guide/api-reference/withdraw" },
        { text: "Transfer", link: "/guide/api-reference/transfer" },
        { text: "Balance", link: "/guide/api-reference/balance" },
        { text: "Record", link: "/guide/api-reference/record" },
        { text: "Vault", link: "/guide/api-reference/vault" },
        { text: "Contract", link: "/guide/api-reference/contract" },
        { text: "Order", link: "/guide/api-reference/order" },
        { text: "Marketplace", link: "/guide/api-reference/marketplace" },
        { text: "Asset", link: "/guide/api-reference/asset" },
        { text: "Mints", link: "/guide/api-reference/mints" },
        { text: "Sign", link: "/guide/api-reference/sign" },
        { text: "Storage", link: "/guide/api-reference/storage" },
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
        { text: "Terminology", link: "/guide/reference/terminology" },
        { text: "FAQ", link: "/guide/reference/faq" },
      ],
    },
  ];
}

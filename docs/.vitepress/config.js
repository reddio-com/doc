import { headerPlugin } from './headerMdPlugin'
import fs from 'fs'
import path from 'path'
import { generateSitemap as sitemap } from 'sitemap-ts'

export default {
    lang: 'en-US',
    title: 'Reddio',
    description: 'Reddio Developer Documentations',
    scrollOffset: 'header',
    lastUpdated: true,

    head: [
        ['meta', { name: 'keywords', content: 'reddio,reddio doc,starkex'}],
        [
            'script',
            {
                src: 'https://www.googletagmanager.com/gtag/js?id=G-DZPN2FT3DF',
                async: ''
            }
        ],
        [
            'script',
            {},
            fs.readFileSync(
                path.resolve(__dirname, './inlined-scripts/google.js'),
                'utf-8'
            )
        ],
        [
            'link',
            {
                rel: 'canonical',
                href: 'https://docs.reddio.com/',
            },
        ],
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/logoicon.ico',
            },
        ]
    ],

    buildEnd: () => {
        let dynamicRoutes = [];
        ['../api', '../sdk', '../service'].forEach(dirPath => {
            const files = fs.readdirSync(path.resolve(__dirname, dirPath))
            dynamicRoutes = dynamicRoutes.concat(files.map(file => `/${dirPath.split('../')[1]}/${file.split('.md')[0]}`))
        })
        sitemap({
            hostname: "https://docs.reddio.com",
            outDir: '/docs/.vitepress/dist',
            extentions: ["html"],
            dynamicRoutes
        })
    },

    themeConfig: {
        nav: [],

        sidebar: {
            '/guide': sidebarService(),
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
                text: 'MIT License',
                link: 'https://opensource.org/licenses/MIT'
            },
            copyright: `Copyright © 2022-${new Date().getFullYear()} Reddio`
        },

        markdown: {
            config(md) {
                md.use(headerPlugin)
            }
        },
    }
}

function nav() {
    return [
        { text: 'SDK', link: '/guide/Javascript_SDK_Reference/Initiate_SDK.html', activeMatch: '/guide/Javascript_SDK_Reference/Initiate_SDK.html' },
        { text: 'APIs', link: '/guide/Restful_API_Reference/API_Reference.html', activeMatch: '/guide/Restful_API_Reference/API_Reference.html' },
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Overview', link: '/guide/introduction/overview' },
            ]
        },
        {
            text: 'SDK Reference',
            collapsible: true,
            items: [
                { text: 'Init SDK', link: '/sdk/init' },
                { text: 'KeyPair', link: '/sdk/keypair' },
                { text: 'Request', link: '/sdk/request' },
                { text: 'Utils', link: '/sdk/utils' },
                { text: 'Contract', link: '/sdk/contract' },
            ]
        }
    ]
}

function sidebarService() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Overview', link: '/guide/introduction/overview' },
                { text: 'Feature', link: '/guide/introduction/features'  }
            ]
        },
        {
            text: 'Getting Started',
            collapsible: true,
            items: [
                { text: 'Check Marketplace Demo', link: '/guide/getting-started/market-place-demo' },
                { text: 'Mint NFT on Layer 2', link: '/guide/getting-started/mint-nft-on-layer-2'  },
                { text: 'Place Order on Layer 2', link: '/guide/getting-started/place-order-on-layer-2' },
                { text: 'Transfer NFT Between Layer 2', link: '/guide/getting-started/transfer-nft-between-layer-2'  },
                { text: 'Transfer ETH Between Layer 2', link: '/guide/getting-started/transfer-eth-between-layer-2' },
                { text: 'Transfer ERC20 Between Layer 2', link: '/guide/getting-started/transfer-erc20-between-layer-2' },
                
            ]
        },
        {
            text: 'Restful API Reference',
            collapsed: true,
            collapsible: true,
            items: [
                { text: 'API Reference', link: '/guide/Restful_API_Reference/API_Reference' },
                { text: 'Authentication', link: '/guide/Restful_API_Reference/Authentication' },
                { text: 'Endpoint', link: '/guide/Restful_API_Reference/Endpoint' },
                { text: 'Errors', link: '/guide/Restful_API_Reference/Errors' },
                { text: 'Public Function', link: '/guide/Restful_API_Reference/Public_Function' },
                { text: 'Project', link: '/guide/Restful_API_Reference/Project' },
                { text: 'Withdraw', link: '/guide/Restful_API_Reference/Withdraw' },
                { text: 'Transfer', link: '/guide/Restful_API_Reference/Transfer' },
                { text: 'Balance', link: '/guide/Restful_API_Reference/Balance' },
                { text: 'Record', link: '/guide/Restful_API_Reference/Record' },
                { text: 'Vault', link: '/guide/Restful_API_Reference/Vault' },
                { text: 'Contract', link: '/guide/Restful_API_Reference/Contract' },
                { text: 'Order', link: '/guide/Restful_API_Reference/Order' },
                { text: 'Marketplace', link: '/guide/Restful_API_Reference/Marketplace' },
                { text: 'Asset', link: '/guide/Restful_API_Reference/Asset' },
            ]
        },
        {
            text: 'Javascript SDK Reference',
            collapsed: true,
            collapsible: true,
            items: [
                { text: 'Initiate SDK', link: '/guide/Javascript_SDK_Reference/Initiate_SDK' },
                { text: 'Public Function', link: '/guide/Javascript_SDK_Reference/Public_Function' },
                { text: 'Deposit', link: '/guide/Javascript_SDK_Reference/Deposit' },
                { text: 'Withdraw', link: '/guide/Javascript_SDK_Reference/Withdraw' },
                { text: 'Transfer', link: '/guide/Javascript_SDK_Reference/Transfer' },
                { text: 'Balance', link: '/guide/Javascript_SDK_Reference/Balance' },
                { text: 'Record', link: '/guide/Javascript_SDK_Reference/Record' },
                { text: 'Vault', link: '/guide/Javascript_SDK_Reference/Vault' },
                { text: 'Contract', link: '/guide/Javascript_SDK_Reference/contract' },
                { text: 'Orders', link: '/guide/Javascript_SDK_Reference/orders' },
            ]
        },
        {
            text: 'Reference',
            collapsed: true,
            collapsible: true,
            items: [
                { text: 'Layer 2 Introduction', link: '/guide/Reference/Layer_2_Introduction' },
                { text: 'How does Layer 2 works？', link: '/guide/Reference/How_does_Layer_2_works' },
                { text: 'How does Reddio works？', link: '/guide/Reference/How_does_Reddio_works' },
                { text: 'Terminology', link: '/guide/Reference/Terminology' },
            ]
        }
    ]
}

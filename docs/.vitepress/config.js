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
        nav: nav(),

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
        { text: 'Dashboard', link: 'https://dashboard.reddio.com/login' },
       // { text: 'SDK', link: '/guide/jssdk-reference/initiate-sdk.html', activeMatch: '/guide/jssdk-reference/initiate-sdk.html' },
       // { text: 'APIs', link: '/guide/api-reference/API_Reference.html', activeMatch: '/guide/api-reference/API_Reference.html' },
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
            text: 'SDK reference',
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
                { text: 'Feature', link: '/guide/introduction/feature'  }
            ]
        },
        {
            text: 'Getting Started',
            collapsible: true,
            items: [
                { text: 'Marketplace Demo', link: '/guide/getting-started/marketplace-demo' },
                { text: 'Mint NFTs On Layer 2', link: '/guide/getting-started/mint-nfts-on-layer-2'  },
                { text: 'Place Orders On Layer 2', link: '/guide/getting-started/place-orders-on-layer-2' },
                { text: 'Move NFTs Between Layers', link: '/guide/getting-started/move-nfts-between-layers'  },
                { text: 'Move ETHs Between Layers', link: '/guide/getting-started/move-eths-between-layers' },
                { text: 'Move ERC20s Between Layers', link: '/guide/getting-started/move-erc20s-between-layers' },
                
            ]
        },
        {
            text: 'JS SDK',
            collapsed: true,
            collapsible: true,
            items: [
                { text: 'Initiate SDK', link: '/guide/jssdk-reference/initiate-sdk' },
                { text: 'Public Function', link: '/guide/jssdk-reference/public-function' },
                { text: 'Deposit', link: '/guide/jssdk-reference/deposit' },
                { text: 'Withdraw', link: '/guide/jssdk-reference/withdraw' },
                { text: 'Transfer', link: '/guide/jssdk-reference/transfer' },
                { text: 'Balance', link: '/guide/jssdk-reference/balance' },
                { text: 'Record', link: '/guide/jssdk-reference/record' },
                { text: 'Vault', link: '/guide/jssdk-reference/vault' },
                { text: 'Contract', link: '/guide/jssdk-reference/contract' },
                { text: 'Order', link: '/guide/jssdk-reference/order' },
            ]
        },
        {
            text: 'API Reference',
            collapsed: true,
            collapsible: true,
            items: [
                { text: 'API Reference', link: '/guide/api-reference/api-reference' },
                { text: 'Authentication', link: '/guide/api-reference/authentication' },
                { text: 'Endpoint', link: '/guide/api-reference/endpoint' },
                { text: 'Error', link: '/guide/api-reference/error' },
                { text: 'Public Function', link: '/guide/api-reference/public-function' },
                { text: 'Project', link: '/guide/api-reference/project' },
                { text: 'Withdraw', link: '/guide/api-reference/withdraw' },
                { text: 'Transfer', link: '/guide/api-reference/transfer' },
                { text: 'Balance', link: '/guide/api-reference/balance' },
                { text: 'Record', link: '/guide/api-reference/record' },
                { text: 'Vault', link: '/guide/api-reference/vault' },
                { text: 'Contract', link: '/guide/api-reference/contract' },
                { text: 'Order', link: '/guide/api-reference/order' },
                { text: 'Marketplace', link: '/guide/api-reference/marketplace' },
                { text: 'Asset', link: '/guide/api-reference/asset' },


            ]
        },
        {
            text: 'Reference',
            collapsed: true,
            collapsible: true,
            items: [
                { text: 'Layer 2 Introduction', link: '/guide/reference/layer-2-introduction' },
                { text: 'How Does Layer 2 Works', link: '/guide/reference/how-does-layer-2-works' },
                { text: 'How Does Reddio Works', link: '/guide/reference/how-does-reddio-works' },
                { text: 'Terminology', link: '/guide/reference/terminology' },
            ]
        }
    ]
}

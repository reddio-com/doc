import { headerPlugin } from './headerMdPlugin'
import fs from 'fs'
import path from 'path'

export default {
    lang: 'en-US',
    title: 'Docs',
    description: 'Reddio Developer Documentations',
    scrollOffset: 'header',
    lastUpdated: true,

    head: [
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
        ]
    ],

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/sdk/': sidebarGuide(),
            '/service': sidebarService(),
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

        algolia: {
            appId: '7A2B60ZRYU',
            apiKey: 'b2ad15f65554f29ad97ab2c7ccadeb25',
            indexName: 'blog'
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
        //{ text: 'SDK', link: '/sdk/getting-started', activeMatch: '/sdk/' },
        { text: 'Docs', link: '/service/overview', activeMatch: '/overview/' },
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Getting Started', link: '/sdk/getting-started' },
            ]
        },
        {
            text: 'API Reference',
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
            collapsible: false,
            items: [
                { text: 'Overview', link: '/service/overview' },
                { text: 'Components', link: '/service/components' },
                { text: 'Layer 2 Introduction', link: '/service/layer2introduction' },
            ]
        },
        {
            text: 'Get Started',
            collapsible: false,
            items: [
                { text: 'User Onboarding', link: '/service/user-onboarding' },
                { text: 'NFT Backend Integration', link: '/service/nft-backend' },
                { text: 'NFT Javascript Integration', link: '/service/nft-jssdk' },
            ]
        },
        {
            text: 'API Reference',
            collapsible: false,
            items: [
                { text: 'Layer 2 APIs', link: '/service/layer2-apis' },
            ]
        },
        {
            text: 'Reference',
            collapsible: false,
            items: [
                { text: 'Terminology', link: '/service/terminology' },
            ]
        }
    ]
}

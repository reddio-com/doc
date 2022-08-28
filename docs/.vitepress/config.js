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

        markdown: {
            config(md) {
                md.use(headerPlugin)
            }
        },
    }
}

function nav() {
    return [
        { text: 'SDK', link: '/sdk/overview', activeMatch: '/sdk/' },
        { text: 'APIs', link: '/api/layer2-apis', activeMatch: '/api/' },
        { text: 'Docs', link: '/service/overview', activeMatch: '/service/' },
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'Overview', link: '/sdk/overview' },
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
                { text: 'ERC20 Javascript Integration', link: '/service/erc20-jssdk' },
                { text: 'ETH Javascript Integration', link: '/service/eth-jssdk' },
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

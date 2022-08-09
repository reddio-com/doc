import { headerPlugin } from './headerMdPlugin'

export default {
    lang: 'en-US',
    title: 'Reddio',
    description: 'Just playing around.',
    scrollOffset: 'header',
    lastUpdated: true,

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
        { text: 'SDK', link: '/sdk/getting-started', activeMatch: '/sdk/' },
        { text: 'Service', link: '/service/overview', activeMatch: '/overview/' },
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
            ]
        },
        {
            text: 'API Reference',
            collapsible: false,
            items: [
                { text: 'Layer 2 APIs', link: '/service/layer2-apis' },
            ]
        }
    ]
}

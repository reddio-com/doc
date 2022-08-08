export default {
    lang: 'en-US',
    title: 'Reddio',
    description: 'Just playing around.',

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

        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2019-present Evan You'
        // },

        algolia: {
            appId: '7A2B60ZRYU',
            apiKey: 'b2ad15f65554f29ad97ab2c7ccadeb25',
            indexName: 'blog'
        }
    }
}

function nav() {
    return [
        { text: 'SDK', link: '/sdk/getting-started', activeMatch: '/sdk/' },
        { text: 'Service', link: '/service/getting-started', activeMatch: '/service/' },
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
        }
    ]
}

function sidebarService() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'overview', link: '/service/overview' },
                { text: 'getting-started', link: '/service/getting-started' },
            ]
        }
    ]
}

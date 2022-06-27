export default {
    lang: 'en-US',
    title: 'VitePress',
    description: 'Just playing around.',

    lastUpdated: true,

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/guide/': sidebarGuide(),
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

        // algolia: {
        //     appId: '8J64VVRP8K',
        //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        //     indexName: 'vitepress'
        // }
    }
}

function nav() {
    return [
        { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'getting-started', link: '/guide/getting-started' },
            ]
        }
    ]
}
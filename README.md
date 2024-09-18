## How to edit the docs

Visit root directory，add in `md` files and edit them based on Markdown format. You can also refer to [Vitepress Documentation](https://vitepress.vuejs.org/guide/markdown.html) to learn more.

## How to preview the docs

- Install [node](https://nodejs.org/en/)
- Go to the root directory, `npm install` to install all the dependency
- Run `npm run docs:dev` in the root directory to start the service

## Add in images

Save images to `/public` folder, and access them via `![](/xxx.png)` in the Markdown files.

## How to configure

Visit `.vitepress` directory and look for `config.mts` file, find `sidebarService` functions.

```js
[
    // Each object represents one group
    {
        // group title
        text: 'Introduction',
        collapsible: true,
        // multiple timers under each group
        items: [
            { text: 'getting-started', link: '/service/getting-started' },
        ]
    }
]
```

To understand the meaning of each parameter, just preview the docs

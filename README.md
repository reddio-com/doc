## 如何编写文档

进入 `docs/service` 目录，新增 `md` 文件后按照 Markdown 格式即可。也可以参考 [Vitepress 文档](https://vitepress.vuejs.org/guide/markdown.html) 了解支持的特性。

## 如何预览文档

- 安装 [node](https://nodejs.org/en/)
- 根目录执行 `npm install` 用以安装依赖
- 根目录执行 `npm run docs:dev` 启动服务

## 如何修改配置

进入 `docs/.vitepress` 目录兵找到 `config.js` 文件，拉到底部可以找到 `sidebarService` 函数。

```js
[
    // 每个 object 代表一个 group
    {
        // group 的 title
        text: 'Introduction',
        collapsible: true,
        // group 下包含多少个内容
        items: [
            { text: 'getting-started', link: '/service/getting-started' },
        ]
    }
]
```

预览一下文档应该就清除每个字段所代表的含义了。
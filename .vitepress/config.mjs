import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import { createContentLoader } from 'vitepress';

const base = '/blog/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tom's Blog",
  lang: 'zh-CN',
  base: base,
  description: "Tom's Blog",
  markdown: {
    anchor: {
      level: [1, 2, 3],
    },
    theme: 'github-light-default',
    math: true
  },
  sitemap: {
    hostname: 'https://tompan-1901.github.io/blog/'
  },
  async buildEnd(siteConfig) {
    fs.readdirSync('./posts', { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map(async d => {
        const posts = await createContentLoader(`posts/${d.name}/**/*.md`).load()
        // 写入一个 JSON 文件用于客户端动态加载
        fs.writeFileSync(`.vitepress/dist/archives/${d.name}.json`, JSON.stringify(posts, null, 2), {
        })
      })
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'mjx-container' || tag == 'mjx-assistive-mml'
      }
    }
  },
  head: [
    ['meta', { name: 'msvalidate.01', content: '143C3D6D8AD7E9A7822E8772A4AC0E72' }],
    ['script', { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "bf24c213a96f4789acdec9e3af0a6bff"}'},],
  ]
})

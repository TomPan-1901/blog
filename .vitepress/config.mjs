import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import { createContentLoader } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tom's Blog",
  lang: 'zh-CN',
  base: '/blog/',
  description: "Tom's Blog",
  markdown: {
    anchor: {
      level: [1, 2, 3],
    },
    theme: 'github-light-default',
    math: true
  },
  sitemap: {
    hostname: 'https://tompan-1901.github.io/blog'
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
    ['script', { type: 'text/javascript' }, `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "plzs4t84xf");`],
    ['script', { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "bf24c213a96f4789acdec9e3af0a6bff"}'},],
    ['script', { type: 'text/javascript'}, `window.onload = () => window.clarity('consent')`],
    ['script', { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6864290273818399', 'crossorigin': 'anonymous'},],
    ['script', { type: 'text/javascript'}, `(adsbygoogle = window.adsbygoogle || []).push({});`],
  ]
})

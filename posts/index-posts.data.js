// posts.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/**/*.md', {
  excerpt: true,    // 包含摘录?
  includeSrc: true,
  transform(rawData) {
    // 根据需要对原始数据进行 map、sort 或 filter
    // 最终的结果是将发送给客户端的内容
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map((page) => ({
        excerpt: page.excerpt,
        frontmatter: page.frontmatter,
        url: page.url
    })).slice(0, 10)
  }
})
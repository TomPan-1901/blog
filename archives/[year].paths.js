import fs from 'node:fs'
import { createContentLoader } from 'vitepress'

export default {
  paths() {
    const dir = fs.readdirSync('./posts', { withFileTypes: true }).filter(d => d.isDirectory())
    // 提取每年所有 Markdown 文件的元数据


    return dir.map(d => ({
      params: {
        year: d.name,
      },
    }
    ))
  }
}
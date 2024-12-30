import fs from 'node:fs'


export default {
  load() {
    const dir = fs.readdirSync('./posts', { withFileTypes: true }).filter(d => d.isDirectory())
    return dir.map(d => d.name).sort((a, b) => b - a).map(name => {
      return {
        name,
        postCount: fs.readdirSync(`./posts/${name}`, { recursive: true, withFileTypes: true }).filter(v => v.isFile()).length
      }
    })
  }
}
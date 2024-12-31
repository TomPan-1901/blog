---
title: 博文归档
---

<h1>{{ $params.year }}</h1>

<ul>
  <li v-for="post of posts" class="flex border-b-2 border-b-gray-200 my-3 md:flex-row flex-col">
    <div class="md:w-1/4 px-2 py-3 text-gray-400">
      {{ new Date(post.frontmatter.date).toDateString() }}
    </div>
    <BlogItem :post="post" />
  </li>
</ul>

<script setup>
import { useData } from 'vitepress'
import { onMounted, ref } from 'vue'
import BlogItem from '../.vitepress/theme/BlogItem.vue'
const data = useData()

const posts = ref()

onMounted(()=> {
  fetch(data.site.value.base + `archives/${data.params.value.year}.json`).then(v => v.json()).then(v=>posts.value = v)
})
</script>
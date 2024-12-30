
<h1>{{ $params.year }}</h1>

<ul>
  <li v-for="post of posts" class="flex border-b-2 border-b-gray-200 my-3 md:flex-row flex-col">
    <div class="md:w-1/4 px-2 py-3 text-gray-400">
      {{ new Date(post.frontmatter.date).toDateString() }}
    </div>
    <div class="flex-1">
      <a :href="post.url"
        class="px-2 py-3 text-4xl hover:underline hover:text-gray-500 transition-all duration-300">{{
          post.frontmatter.title }}</a>
      <div class="px-2 py-3 text-4xl text-gray-600" v-if="post.exerpt">{{ post.exerpt }}</div>
      <div class="px-2 py-3 text-gray-600" v-else>文章无简介</div>
      <div class="px-2 py-3 text-gray-600" v-if="post.frontmatter.tags">
        <span v-for="tag in post.frontmatter.tags" class="mx-1 px-3 bg-gray-200 rounded-full">
          {{ tag }}
        </span>
      </div>
    </div>
  </li>
</ul>

<script setup>
import { useData } from 'vitepress'
import { onMounted, ref } from 'vue'
const data = useData()

const posts = ref()

onMounted(()=> {
    fetch(data.site.value.base + `archives/${data.params.value.year}.json`).then(v => v.json()).then(v=>posts.value = v)
})
</script>
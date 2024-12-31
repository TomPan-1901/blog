<template>
  <div>
    <a :href="site.base.slice(0, -1)+props.post.url"
      class="px-2 py-3 md:text-3xl text-xl sm:text-2xl hover:underline hover:text-gray-500 transition-all duration-300">{{
      props.post.frontmatter.title }}</a>
    <div class="px-2 py-3 text-gray-600 blog-content" v-if="props.post.excerpt" v-html="props.post.excerpt"></div>
    <div class="px-2 py-3 text-gray-400" v-else>文章无简介</div>
    <div class="px-2 py-3 text-gray-600" v-if="props.post.frontmatter.tags">
      <span v-for="tag in props.post.frontmatter.tags" class="mx-1 px-3 bg-gray-200 rounded-full">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="js">
import { useData } from 'vitepress'

const { site } = useData()
const props = defineProps(['post'])
</script>
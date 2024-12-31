<script setup lang="js">
import { useData } from 'vitepress'
import { data as posts } from '../../posts/index-posts.data'
import BlogContent from './BlogContent.vue'
import BlogItem from './BlogItem.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="bg-[#fcfcfc] w-full min-h-screen">
    <header class="p-3 border-b-2 border-b-gray-200">
      <div class="text-4xl font-bold flex justify-between items-center">
        <a :href="site.base">
          {{ site.title }}
        </a>
        <a :href="site.base+'archives'" class="font-normal text-xl px-2">博文归档</a>
      </div>
    </header>
    <div v-if="frontmatter.home">
      <div class="container mx-auto px-5 md:px-0">
        <ul>
          <li v-for="post of posts" class="flex border-b-2 border-b-gray-200 my-3 md:flex-row flex-col">
            <div class="md:w-1/4 px-2 py-3 text-gray-400">
              {{ new Date(post.frontmatter.date).toDateString() }}
            </div>
            <BlogItem :post="post" class="flex-1"/>
          </li>
        </ul>
      </div>
    </div>
    <div v-else-if="$frontmatter.archives">
      <div class="container mx-auto px-5 md:px-0">
        <h1 class="text-3xl font-bold pt-5">归档</h1>
        <Content/>
      </div>
    </div>
    <div v-else>
      <BlogContent />
    </div>
  </div>
</template>

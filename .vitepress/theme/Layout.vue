<script setup lang="js">
import { useData } from 'vitepress'
import { data as posts } from '../../posts/index-posts.data'
import BlogContent from './BlogContent.vue'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div class="bg-[#fcfcfc] w-full min-h-screen">
    <header class="p-3 border-b-2 border-b-gray-200">
      <h1 class="text-4xl font-bold flex justify-between items-center">
        <a :href="site.base">
          {{ site.title }}
        </a>
        <a :href="site.base+'archives'" class="font-normal text-xl px-2">博文归档</a>
      </h1>
    </header>
    <div v-if="frontmatter.home">
      <div class="container mx-auto px-5 md:px-0">
        <ul>
          <li v-for="post of posts" class="flex border-b-2 border-b-gray-200 my-3 md:flex-row flex-col">
            <div class="md:w-1/4 px-2 py-3 text-gray-400">
              {{ new Date(post.frontmatter.date).toDateString() }}
            </div>
            <div class="flex-1">
              <a :href="site.base.slice(0, -1)+post.url"
                class="px-2 py-3 text-4xl hover:underline hover:text-gray-500 transition-all duration-300">{{
                  post.frontmatter.title }}</a>
              <div class="px-2 py-3 text-gray-600 blog-content" v-if="post.excerpt" v-html="post.excerpt"></div>
              <div class="px-2 py-3 text-gray-400" v-else>文章无简介</div>
              <div class="px-2 py-3 text-gray-600" v-if="post.frontmatter.tags">
                <span v-for="tag in post.frontmatter.tags" class="mx-1 px-3 bg-gray-200 rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
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

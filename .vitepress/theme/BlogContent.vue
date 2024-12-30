<template>
  <div class="w-full">
    <div class="blog-content container mx-auto px-5 md:px-0">
      <h1>{{ $frontmatter.title }}</h1>
      <Content />
      <div class="px-2 py-3 text-gray-600" v-if="$frontmatter.tags">
        <span v-for="tag in $frontmatter.tags" class="mx-1 px-3 bg-gray-200 rounded-full">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

---
archives: true
---

<script setup>
import { data } from './byyear.data.js'    
</script>

<ul>
  <a v-for="params in data" class="flex border-b-2 border-b-gray-200 px-4 py-5 my-4 flex-row items-baseline hover:bg-[#f0f0f0] hover:text-gray-500 transition-all duration-300" :href="params.name">
    <div class="text-3xl">
      {{params.name}}
    </div>
    <div class="ml-auto text-gray-500">共{{ params.postCount }}篇博文</div>
  </a>
</ul>

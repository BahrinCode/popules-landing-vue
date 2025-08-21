
<script setup lang="ts">
import type { FeedItem } from '../types'
defineProps<{ item: FeedItem }>()
const formatDate = (v?: any) => {
  if (!v) return ''
  try {
    const d = new Date(v)
    if (isNaN(d.getTime())) return ''
    return d.toLocaleString()
  } catch {
    return ''
  }
}
</script>

<template>
  <article class="bg-white rounded-2xl shadow-soft overflow-hidden hover:-translate-y-0.5 transition">
    <img v-if="item.thumbnail" :src="item.thumbnail" alt="" class="w-full h-56 object-cover line-clamp-3">
     
    </img>
    <div class="p-5 flex flex-col gap-5">
      <h3 class="text-lg font-semibold leading-snug line-clamp-3">
        {{ item.title ?? item.text  }}
      </h3>
      <p v-if="item.summary || item.text" class="text-sm text-gray-600 line-clamp-3">
        {{ item.summary ?? item.text }}
      </p>
      <div class="flex items-center justify-between text-xs text-gray-500">
        
        <span v-if="formatDate(item.createdAt)">{{ formatDate(item.createdAt) }}</span>

      </div>
      <div v-if="item.user" class="flex items-center mt-3 space-x-2">
        <img v-if="item.user.logo_url" :src="item.user.logo_url" class="w-8 h-8 rounded-full" /> 
        <span class="text-sm text-gray-700">By {{ item.user.username }}</span>
      </div>
      <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" class="text-sm font-medium text-brand-accent hover:underline">
        Read more
      </a>
    </div>
  </article>
</template>

<style scoped>
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
</style>

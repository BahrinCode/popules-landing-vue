<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useFeedStore } from './stores/feed'
import FeedCard from './components/FeedCard.vue'
import SkeletonCard from './components/SkeletonCard.vue'
import HeroHeader from './components/HeroHeader.vue'
import AsideMenu from './components/Asidemenu.vue' 

const feed = useFeedStore()
const items = computed(() => feed.items)

onMounted(() => {
  feed.loadInitial()
})
</script>

<template>
  <div class="flex">
    <AsideMenu />

    <div class="flex-1 ml-20 md:ml-64">
      <HeroHeader />

      <main class="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeedCard
            v-for="item in items"
            :key="item.id ?? item.url ?? JSON.stringify(item)"
            :item="item"
          />
          <SkeletonCard v-if="feed.loading" v-for="n in 6" :key="'s'+n" />
        </section>

        <div class="flex justify-center my-8">
          <button class="px-4 py-2 rounded-xl bg-brand-accent text-gray-900 font-semibold shadow-soft hover:opacity-90"
            @click="feed.loadMore()">
            Load more
          </button>
        </div>

        <div ref="sentinel" class="h-8"></div>

        <p v-if="feed.error" class="text-red-600 text-center mt-6">
          Error: {{ feed.error }}
        </p>
        <p
          v-else-if="feed.loading && items.length === 0"
          class="text-gray-600 text-center mt-6"
        >
          No items.
        </p>
      </main>

      <footer class="max-w-6xl mx-auto px-6 py-12 text-sm text-gray-500">
        <p>
          Unofficial demo for Popules.com feed. Built with Vue 3, Vite,
          Tailwind, and Pinia by <a href="bahrincode.github.io">bahrincode</a> 
        </p>
      </footer>
    </div>
  </div>
</template>

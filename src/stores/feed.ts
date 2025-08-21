import { defineStore } from 'pinia'
import type { FeedItem, FeedResponse } from '../types'

export const useFeedStore = defineStore('feed', {
  state: () => ({
    items: [] as FeedItem[],
    offset: 0,
    limit: 15,        
    loading: false,
    error: null as string | null,
    hasMore: true,
  }),
  actions: {
    async loadInitial() {
      this.items = []
      this.offset = 0
      this.hasMore = true
      await this.loadMore()
    },
    async loadMore() {
      if (this.loading || !this.hasMore) return
      this.loading = true
      this.error = null

      try {
        const res = await fetch(
          `https://api.popules.com/api/feed?offset=${this.offset}&limit=${this.limit}`
        )
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data: FeedResponse = await res.json()

        if (data.data.length > 0) {
          this.items.push(...data.data)
          this.offset += this.limit
          this.hasMore = data.data.length === this.limit
        } else {
          this.hasMore = false
        }
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
  },
})

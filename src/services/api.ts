
import type { FeedResponse } from '../types'

const BASE_URL = 'https://api.popules.com'

export async function fetchFeed(offset = 0, limit = 15): Promise<FeedResponse> {
  const url = `${BASE_URL}/api/feed?offset=${offset}&limit=${limit}`
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch feed (${res.status})`)
  }
  // The API shape is unknown; normalize into FeedResponse
  const json = await res.json()
  // Try to infer shapes commonly used
  if (Array.isArray(json)) {
    return { data: json, offset, limit }
  }
  if (json && Array.isArray(json.data)) {
    return { data: json.data, total: json.total, offset: json.offset ?? offset, limit: json.limit ?? limit }
  }
  // Fallback: wrap unknown structure as one item
  return { data: [json], offset, limit }
}

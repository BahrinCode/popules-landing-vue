export type User = {
  id: number
  yelling_id?: string
  fullname?: string
  firstname?: string | null
  lastname?: string | null
  preferred_country?: string[]
  position_title?: string | null
  website?: string | null
  status?: number
  logo_url?: string
  username?: string
  is_following_you?: boolean
  followed_by_you?: boolean
  muted_by_you?: boolean
  blocked_by_you?: boolean
  
  [key: string]: any
}

export type FeedItem = {
  id: string | number
  title?: string
  text?: string
  summary?: string
  thumbnail?: string
  author?: string
  createdAt?: string | number | Date
  url?: string
  user?: string
  // Accept any extra fields from API to avoid runtime failures
  [key: string]: any
}

export type FeedResponse = {  
  data: FeedItem[]
  total?: number
  offset?: number
  limit?: number
}

# Popules Landing – Vue 3 + Vite + Tailwind

This project replicates a **Popules.com-style landing page** integrated with the official REST API, styled using **Tailwind CSS**, powered by **Vue 3 + Pinia**, and includes **infinite scrolling** with a modern aside menu (Instagram-like).

---

## ✨ Features

- **Vue 3 + Vite + TypeScript**
- **Tailwind CSS** for responsive UI
- **Pinia state management**
- **REST API integration**  
  `GET https://api.popules.com/api/feed?offset&limit`
- **Infinite scroll** via Intersection Observer
- **Reusable components**:
  - `FeedCard.vue` – Displays feed items
  - `SkeletonCard.vue` – Skeleton loader
  - `HeroHeader.vue` – Hero section
  - `AsideMenu.vue` – Instagram-style sidebar navigation
- **Vitest tests** (`FeedCard.spec.ts`)
- Responsive design: works on desktop & mobile



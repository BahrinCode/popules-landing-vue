<script setup lang="ts">
import { ref } from 'vue'
import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  PlusSquareIcon,
  UserIcon,
  LogInIcon
} from 'lucide-vue-next'

// Track active menu item
const active = ref('home')

const menuItems = [
  { name: 'home', label: 'Home', icon: HomeIcon },
  { name: 'search', label: 'Search', icon: SearchIcon },
  { name: 'notifications', label: 'Notifications', icon: BellIcon },
  { name: 'create', label: 'Create', icon: PlusSquareIcon },
  { name: 'profile', label: 'Profile', icon: UserIcon },
]
</script>

<template>
  <aside class="fixed top-0 left-0 h-full w-20 md:w-64 bg-white border-r border-gray-200 flex flex-col shadow-soft z-50">
    <!-- Logo -->
    <div class="h-20 flex items-center justify-center md:justify-start px-4 border-b border-gray-200">
        <a href="https://www.popules.com" target="_blank" rel="noopener" class="text-lg font-semibold text-white hover:underline">
        <img src="https://www.popules.com/img/popules_logo.png" alt="" class="w-30 h-12 rounded-half "></a>
      <span class="text-xl font-bold text-brand md:hidden">P</span>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto mt-4">
      <ul class="space-y-1">
        <li v-for="item in menuItems" :key="item.name">
          <button
            @click="active = item.name"
            class="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-700 hover:bg-gray-100 rounded-xl transition"
            :class="{ 'bg-gray-100 font-semibold text-brand': active === item.name }"
          >
            <component :is="item.icon" class="w-6 h-6" />
            <span class="hidden md:inline">{{ item.label }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- Footer -->
    <div class="p-4 border-t border-gray-200">
      <button class="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-700 hover:bg-gray-100 rounded-xl transition">
        <LogInIcon class="w-6 h-6" />
        <span class="hidden md:inline">Login</span>
      </button>
    </div>
  </aside>
</template>

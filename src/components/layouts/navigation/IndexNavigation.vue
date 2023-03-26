<script setup lang="ts">
// import JotSauceLogo from '@/components/JotSauceLogo.vue';
// import ThemeToggle from '@/components/ThemeToggle.vue';
import { ref } from 'vue';

const showMenu = ref(false);
const menuItems = [
  {
    title: 'Menu 1',
    subItems: [
      { title: 'Submenu 1-1', url: '/submenu-1-1' },
      { title: 'Submenu 1-2', url: '/submenu-1-2' },
    ],
  },
  {
    title: 'Menu 2',
    subItems: [
      { title: 'Submenu 2-1', url: '/submenu-2-1' },
      { title: 'Submenu 2-2', url: '/submenu-2-2' },
    ],
  },
];

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <header class="bg-white dark:bg-gray-800 shadow">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 dark:text-white">Brand</div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-800 dark:text-white hover:text-gray-600">
            <i class="fas fa-bars"></i> menu
          </button>
        </div>
        <div class="md:flex items-center space-x-10" :class="{ block: showMenu, hidden: !showMenu }">
          <div v-for="(item, index) in menuItems" :key="index" class="relative group">
            <button class="text-gray-800 dark:text-white hover:text-gray-600">
              {{ item.title }}
            </button>
            <div class="absolute left-0 hidden mt-2 space-y-2 bg-white dark:bg-gray-800 shadow-lg group-hover:block">
              <a
                v-for="(subItem, subIndex) in item.subItems"
                :key="subIndex"
                :href="subItem.url"
                class="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {{ subItem.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

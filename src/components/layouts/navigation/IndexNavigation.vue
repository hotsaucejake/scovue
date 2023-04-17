<script setup lang="ts">
import { onMounted } from 'vue';
import { initCollapses, initDropdowns } from 'flowbite';
import JotSauceLogo from '@/components/JotSauceLogo.vue';
import ModeToggle from '@/components/ModeToggle.vue';
import ProfileDropdown from '@/components/layouts/navigation/ProfileDropdown.vue';
import SearchNavigation from '@/components/layouts/navigation/SearchNavigation.vue';
import NavigationList from '@/components/layouts/navigation/NavigationList.vue';
import JotsMegamenu from '@/components/layouts/navigation/JotsMegamenu.vue';

onMounted(() => {
  // initFlowbite();
  initCollapses();
  initDropdowns();
});
</script>

<template>
  <header class="shadow-md">
    <nav class="bg-slate-100 border-slate-300 dark:border-slate-600 dark:bg-slate-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl px-4 md:px-6 py-2.5">
        <a href="/index" class="flex items-center">
          <JotSauceLogo class="h-9 w-9" />
        </a>
        <div class="flex items-center">
          <ModeToggle />
          <span class="mx-0 w-px h-5 bg-slate-300 dark:bg-slate-600 lg:inline lg:mr-5 lg:ml-5"></span>
          <ProfileDropdown />
        </div>
      </div>
    </nav>
    <nav class="bg-slate-200 border-slate-400 dark:bg-slate-700 dark:border-slate-500 border-y">
      <div class="grid py-4 px-4 mx-auto max-w-screen-2xl lg:grid-cols-2 md:px-6">
        <SearchNavigation />
        <NavigationList />
      </div>
    </nav>
    <JotsMegamenu />
  </header>
</template>

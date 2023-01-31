<script setup lang="ts">
import JotSauceLogo from "@/components/JotSauceLogo.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>
<template>
  <nav
    class="border-b-4 opacity-90 border-b-blue-400 shadow-md shadow-slate-400 dark:shadow-slate-600 bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-900 dark:to-slate-700 text-slate-800 dark:text-slate-100 sticky top-0 z-40"
  >
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex">
          <a href="#" class="flex items-center my-2 mr-9 ml-3">
            <JotSauceLogo :size="'66'" :should-pulse="false" />
          </a>
        </div>
        <div class="hidden md:flex items-center">
          <!-- <span class="mx-4">blah</span>
          <span class="mx-4">blah</span>
          <span class="mx-4">blah</span> -->
        </div>
        <div class="md:flex items-center">
          <ThemeToggle />
          <RouterLink :to="{ name: 'register' }">
            <span
              class="hidden md:inline-flex border-l-2 border-l-slate-300 dark:border-l-slate-600 mr-3 ml-3 px-6 py-3 font-semibold text-center justify-center text-slate-800 dark:text-slate-100 hover:border-b-fuchsia-400 hover:border-b-4"
            >
              Register
            </span>
          </RouterLink>
          <RouterLink :to="{ name: 'login' }">
            <span
              class="hidden md:inline-flex mx-3 px-6 py-3 font-semibold text-center justify-center text-slate-100 transition duration-300 rounded-full hover:from-blue-700 hover:to-fuchsia-700 ease bg-gradient-to-br from-blue-600 to-fuchsia-600 w-36"
            >
              Login
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import JotSauceLogo from "@/components/JotSauceLogo.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>
<template>
  <nav
    class="border-b-4 opacity-90 border-b-blue-400 shadow-md shadow-slate-400 dark:shadow-slate-600 bg-gradient-to-r from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900 text-slate-800 dark:text-slate-100 sticky top-0 z-40"
  >
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex">
          <!--Website Logo-->

          <a href="#" class="flex items-center m-2">
            <JotSauceLogo :size="'66'" :should-pulse="true" />
          </a>
        </div>
        <div class="flex items-center">
          <span class="mx-4">blah</span>
          <span class="mx-4">blah</span>
          <span class="mx-4">blah</span>
        </div>
        <div class="md:flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

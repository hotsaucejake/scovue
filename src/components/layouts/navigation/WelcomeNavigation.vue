<script setup lang="ts">
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>
<template>
  <nav
    class="border-b-4 border-b-blue-400 shadow-md shadow-slate-400 dark:shadow-slate-600 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 sticky top-0 z-50"
  >
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex">
          <!--Website Logo-->

          <a href="#" class="flex items-center py-4 px-2">
            <span class="font-semibold text-gray-500 text-lg">
              Navigation
            </span>
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

<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-auth-light dark:bg-auth-dark flex justify-center items-center flex-col">
    <div class="flex justify-center">
      <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div class="py-3 px-6 border-b border-gray-300">Featured</div>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">Special title treatment</h5>
          <p class="text-gray-700 text-base mb-4">With supporting text below as a natural lead-in to additional content.</p>
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
        <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </section>
</template>

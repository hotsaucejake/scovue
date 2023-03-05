<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-chemex font-dosis-regular font-semibold text-slate-800 dark:text-slate-100">
    <div class="w-full h-full bg-gradient-to-tr from-slate-100 dark:from-slate-800 flex justify-center items-center flex-col">
      <div class="flex justify-center">
        <div class="relative py-3 sm:max-w-xl md:max-w-2xl sm:mx-auto">
          <div class="absolute inset-0 bg-transparent border-dashed border-2 border-slate-100 transform skew-y-0 -rotate-12 rounded-xl"></div>
          <div class="block rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800 max-w-sm text-center transform skew-y-0 -rotate-6">
            <div
              class="py-5 px-6 border-b border-slate-400 dark:border-slate-500 text-6xl font-satisfy-regular font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400"
            >
              invitation
            </div>
            <div class="p-6">
              <h2 class="font-arvo-bold font-bold text-xl mb-3">Do You Have an Invitation?</h2>
              <p class="mb-4 font-bold text-lg">JotSauce registration is currently limited to invitations given out by existing members.</p>
            </div>
            <div class="py-3 px-6 border-t border-slate-400 dark:border-slate-500">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

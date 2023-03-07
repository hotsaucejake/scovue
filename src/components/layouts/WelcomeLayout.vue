<script setup lang="ts">
import WelcomeNavigation from './navigation/WelcomeNavigation.vue';
</script>
<template>
  <section>
    <div
      class="h-screen min-h-min w-screen bg-light-desk dark:bg-dark-desk bg-cover bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-dosis-regular"
    >
      <WelcomeNavigation :is-sticky="false" :is-transparent="true" />
      <div class="flex justify-center h-full">
        <h2 class="font-dosis-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl my-auto">
          <span class="font-arvo-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400">
            <span class="whitespace-nowrap">Finally,</span></span
          >
          <br />
          <span class="whitespace-nowrap">a digital <span class="font-satisfy-regular font-black text-blue-400">journal</span></span>
          <br />
          <span class="whitespace-nowrap">for <span class="text-fuchsia-400">everything.</span></span>
        </h2>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

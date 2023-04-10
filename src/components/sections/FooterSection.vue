<template>
  <footer class="p-4 bg-slate-100 md:p-8 lg:p-10 dark:bg-slate-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <a href="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
        <JotSauceLogo :size="'42'" :should-pulse="false" />
      </a>
      <span
        class="hidden md:inline-flex font-satisfy-regular font-black text-center text-4xl px-7 py-2 leading-10"
        :class="{
          'text-transparent': true,
          'bg-clip-text': true,
          'bg-gradient-to-br': true,
          'from-fuchsia-400': true,
          'to-blue-400': true,
        }"
      >
        jotsauce
      </span>
      <p class="my-6 text-gray-500 dark:text-gray-400">A digital journal for everything.</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li v-if="session.isAuthenticated">
          <a href="/index" class="mr-4 hover:underline md:mr-6">Index</a>
        </li>
        <li v-if="!session.isAuthenticated">
          <a href="/register" class="mr-4 hover:underline md:mr-6">Register</a>
        </li>
        <li v-if="!session.isAuthenticated">
          <a href="/login" class="mr-4 hover:underline md:mr-6">Login</a>
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">JotSauce</a>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import JotSauceLogo from '@/components/JotSauceLogo.vue';
import { useUserSession } from '@/stores/userSession';

const session = useUserSession();
</script>

<style scoped></style>

<script setup lang="ts">
import JotSauceLogo from "./JotSauceLogo.vue";
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-600 dark:from-slate-600 dark:to-slate-400 opacity-75 flex flex-col items-center justify-center"
  >
    <JotSauceLogo :shouldBounce="true" :size="'33%'" />
  </div>
</template>

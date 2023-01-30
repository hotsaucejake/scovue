<script setup lang="ts">
import WelcomeNavigation from "./navigation/WelcomeNavigation.vue";
</script>
<template>
  <div
    class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
  >
    <WelcomeNavigation></WelcomeNavigation>
    <slot></slot>
  </div>
</template>

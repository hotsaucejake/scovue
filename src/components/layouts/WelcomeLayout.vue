<script setup lang="ts">
import WelcomeNavigation from "./navigation/WelcomeNavigation.vue";
</script>
<template>
  <section>
    <div
      class="h-screen min-h-min w-screen bg-light-desk dark:bg-dark-desk bg-cover bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100"
    >
      <WelcomeNavigation :is-sticky="false" :is-transparent="true" />
    </div>
    <slot></slot>
  </section>
</template>

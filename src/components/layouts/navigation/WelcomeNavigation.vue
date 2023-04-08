<script setup lang="ts">
import JotSauceLogo from '@/components/JotSauceLogo.vue';
import ModeToggle from '@/components/ModeToggle.vue';
import { useUserSession } from '@/stores/userSession';

const props = defineProps({
  isSticky: {
    type: Boolean,
    default: false,
  },
  isTransparent: {
    type: Boolean,
    default: false,
  },
});

const session = useUserSession();
</script>
<template>
  <nav
    class="text-slate-800 dark:text-slate-100 font-dosis-bold font-bold"
    :class="{
      'bg-transparent': props.isTransparent,
      'bg-gradient-to-br': !props.isTransparent,
      'from-slate-100': !props.isTransparent,
      'to-slate-200': !props.isTransparent,
      'dark:from-slate-800': !props.isTransparent,
      'dark:to-slate-700': !props.isTransparent,
      'border-b-4': !props.isTransparent,
      'border-b-slate-100': !props.isTransparent,
      'dark:border-b-slate-800': !props.isTransparent,
      'shadow-md': !props.isTransparent,
      'shadow-slate-500': !props.isTransparent,
      'dark:shadow-slate-500': !props.isTransparent,
      'sticky ': props.isSticky,
      'top-0': props.isSticky,
      'z-40': props.isSticky,
    }"
  >
    <div class="mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex">
          <a href="/" class="flex items-center my-2 mr-9 ml-3">
            <JotSauceLogo :size="'42'" :should-pulse="false" />
            <span
              class="hidden md:inline-flex font-satisfy-regular font-black text-center text-4xl pl-7 py-2 leading-10 border-l-2 border-l-slate-300 dark:border-l-slate-600 mx-3"
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
          </a>
        </div>

        <div class="flex items-center">
          <RouterLink v-if="!session.isAuthenticated" :to="{ name: 'register' }">
            <span
              class="mx-1 md:mx-3 px-4 md:px-6 py-1 md:py-3 text-lg text-center justify-center text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400 hover:border-b-fuchsia-400 hover:border-b-4"
            >
              Register
            </span>
          </RouterLink>
          <RouterLink v-if="!session.isAuthenticated" :to="{ name: 'login' }">
            <span
              class="mx-1 md:mx-3 px-4 md:px-6 py-2 md:py-3 text-center justify-center text-lg text-slate-100 transition duration-300 rounded-full hover:from-blue-600 hover:to-fuchsia-600 ease bg-gradient-to-br from-blue-400 to-fuchsia-400 w-36"
            >
              Login
            </span>
          </RouterLink>
          <RouterLink v-if="session.isAuthenticated" :to="{ name: 'index' }">
            <span
              class="mx-1 md:mx-3 px-4 md:px-6 py-2 md:py-3 text-center justify-center text-lg text-slate-100 transition duration-300 rounded-full hover:from-blue-600 hover:to-fuchsia-600 ease bg-gradient-to-br from-blue-400 to-fuchsia-400 w-36"
            >
              Index
            </span>
          </RouterLink>
          <span class="mr-3 ml-5 md:mr-3 md:ml-3 w-px h-10 bg-slate-400 dark:bg-slate-500 inline lg:mr-5 lg:ml-5"></span>
          <ModeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

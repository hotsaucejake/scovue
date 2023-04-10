<template>
  <section class="bg-slate-100 dark:bg-slate-800">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image" />
      <img
        class="w-full hidden dark:block"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
        alt="dashboard image"
      />
      <div class="mt-4 md:mt-0">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Customizable, Intuitive, and Dynamic</h2>
        <h3 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">Leave Analog Limitations Behind</h3>
        <p class="mb-6 font-bold text-gray-500 text-xl dark:text-gray-400">
          JotSauce offers you more tools, flexibility, and functionality than any physical journal ever could.
        </p>
        <p class="mb-6 font-bold text-gray-500 text-xl dark:text-gray-400">
          Analog journals may allow you to quickly jot down stats and reflections, but how do you visualize your progress with customizable graphs and charts?
          No more flipping through pages to find patterns and trends - with JotSauce, it's all at your fingertips.
        </p>
        <p class="mb-6 font-bold text-gray-500 text-xl dark:text-gray-400">
          Tired of losing track of important citations or bookmarks while researching a topic or saving articles for later? JotSauce's digital format allows you
          to save and organize bookmarks effortlessly, ensuring you'll never lose that crucial piece of information again.
        </p>
        <p class="mb-6 font-bold text-gray-500 text-xl dark:text-gray-400">
          Forget the time-consuming process of searching through pages of handwritten entries. JotSauce's powerful search function allows you to quickly locate
          and compare similar entries with ease.
        </p>
        <p class="mb-6 font-bold text-gray-500 text-xl dark:text-gray-400">
          Plus, with JotSauce, you can attach photos or videos to specific entries, adding a rich, multimedia dimension to your journaling experience that
          analog journals simply can't provide.
        </p>
        <p class="mb-6 font-bold text-gray-500 text-xl dark:text-gray-400">Don't let the limitations of analog journaling hold you back.</p>
        <RouterLink v-if="!session.isAuthenticated" :to="{ name: 'register' }">
          <button
            type="button"
            class="transition duration-300 rounded-full hover:from-blue-600 hover:to-fuchsia-600 ease bg-gradient-to-br from-blue-400 to-fuchsia-400 text-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-400 text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Started
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserSession } from '@/stores/userSession';

const session = useUserSession();
</script>

<style scoped></style>

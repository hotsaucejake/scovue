<template>
  <div class="flex items-center lg:order-1">
    <ul class="flex flex-row mt-0 space-x-8 text-sm font-medium">
      <li>
        <a href="/index" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500" aria-current="page">Index</a>
      </li>
      <li>
        <button
          id="dropdown-button-megamenu"
          data-collapse-toggle="megamenu"
          class="flex justify-between items-center w-full font-medium dark:hover:text-primary-500 md:p-0 md:w-auto dark:text-white hover:text-primary-500 dark:focus:text-primary-500"
        >
          Jots
          <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </li>
      <li>
        <a href="#" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500">Compositions</a>
      </li>
      <li>
        <a href="#" class="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-500">Tags</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

<script setup lang="ts">
import WelcomeNavigation from '@/components/layouts/navigation/WelcomeNavigation.vue';
</script>

<template>
  <div class="font-dosis-regular font-semibold">
    <section>
      <div class="h-screen min-h-min w-screen bg-light-desk dark:bg-dark-desk bg-cover bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        <WelcomeNavigation :is-sticky="false" :is-transparent="true" />
        <div class="flex justify-center h-full">
          <h2 class="font-dosis-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl my-auto">
            <span class="font-arvo-bold text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400">
              <span class="whitespace-nowrap">Finally,</span>
            </span>
            <br />
            <span class="whitespace-nowrap">a digital <span class="font-satisfy-regular font-black text-blue-400">journal</span></span>
            <br />
            <span class="whitespace-nowrap">for <span class="text-fuchsia-400">everything.</span></span>
          </h2>
        </div>
      </div>
    </section>
    <section class="">
      blah blah blah
      <!-- <div
        class="h-full bg-slate-100 opacity-50 dark:bg-slate-800 dark:opacity-50"
      ></div> -->
    </section>
    <WelcomeNavigation :is-sticky="true" :is-transparent="false" />
    <section>
      <p class="m-36 text-9xl font-dosis-regular">
        <span class="font-arvo-bold">Finally,</span><br />
        a digital <span class="font-satisfy-regular">journal</span><br />
        for everything.
      </p>

      <p class="m-36 font-dosis-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-extra-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-extra-light text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-light text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-medium text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-regular text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-dosis-semi-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-regular text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-bold text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-italic text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-arvo-bold-italic text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36 font-satisfy-regular text-2xl">jotsauce JotSauce JOTSAUCE</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <p class="m-36">blah blah blah</p>
      <!-- <div
        class="h-full bg-slate-100 opacity-50 dark:bg-slate-800 dark:opacity-50"
      ></div> -->
    </section>
  </div>
</template>

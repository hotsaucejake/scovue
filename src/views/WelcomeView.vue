<script setup lang="ts">
import WelcomeNavigation from '@/components/layouts/navigation/WelcomeNavigation.vue';
// import LandingNavigation from '@/components/layouts/navigation/LandingNavigation.vue';
import FeaturesPartial from './partials/FeaturesPartial.vue';
import BrainstormPartial from './partials/BrainstormPartial.vue';
import { IonPage, IonContent } from '@ionic/vue';
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="snap-y snap-mandatory h-screen overflow-scroll">
        <div class="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl">
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
        <div class="snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl">2</div>
        <div class="snap-start bg-cyan-200 w-screen h-screen flex items-center justify-center text-8xl">3</div>
        <div class="snap-start bg-fuchsia-200 w-screen h-screen flex items-center justify-center text-8xl">4</div>
      </div>

    </ion-content>
  </ion-page>
</template>

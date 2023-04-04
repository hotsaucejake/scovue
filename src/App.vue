<script setup lang="ts">
import LoadingScreen from './components/LoadingScreen.vue';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { useUserSession } from './stores/userSession';
import MainMenu from './components/MainMenu.vue';

const session = useUserSession();
</script>

<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <MainMenu v-if="session.isAuthenticated" />
      <ion-router-outlet id="main-content"></ion-router-outlet>


    </ion-split-pane>
  </ion-app>
</template>

<style scoped></style>

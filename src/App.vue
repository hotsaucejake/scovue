<script setup lang="ts">
import LoadingScreen from './components/LoadingScreen.vue';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { useUserSession } from './stores/userSession';
import MainMenu from './components/MainMenu.vue';

const session = useUserSession();
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <section>
              <ion-app>
                <ion-split-pane content-id="main-content">
                  <MainMenu v-if="session.isAuthenticated" />
                  <ion-router-outlet id="main-content">
                    <component :is="Component"> </component>
                  </ion-router-outlet>
                </ion-split-pane>
              </ion-app>
            </section>

            <!-- loading state -->
            <template #fallback>
              <LoadingScreen />
            </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped></style>

<script setup lang="ts">
import LoadingScreen from './components/LoadingScreen.vue';
import AlertComponent from './components/AlertComponent.vue';
import { useJotsauceSettings } from '@/stores/jotsauceSettings';
import { getSettings } from '@/services/jotsauce/settings.service';
import type { SettingsInterface } from '@/services/jotsauce/interfaces/settings/settings.interface';
import { onMounted } from 'vue';

const jotsauceSettings = useJotsauceSettings();

onMounted(async () => {
  if (!jotsauceSettings.settings) {
    try {
      const response = getSettings();

      if ((await response).type === 'data' && ((await response).data as SettingsInterface)) {
        jotsauceSettings.setSettings((await response).data as SettingsInterface);
      }
    } catch (e) {
      console.log(e);
    }
  }
});
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in">
        <KeepAlive>
          <Suspense>
            <!-- main content -->
            <section>
              <AlertComponent></AlertComponent>
              <component :is="Component"></component>
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

<script setup lang="ts">
import LoadingScreen from './components/LoadingScreen.vue';
import AlertComponent from './components/AlertComponent.vue';
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
              <component :is="Component"> </component>
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

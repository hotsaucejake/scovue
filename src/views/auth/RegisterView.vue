<script setup lang="ts">
import LoadingScreen from '@/App.vue';
import WelcomeNavigation from '@/components/layouts/navigation/WelcomeNavigation.vue';
import FooterSection from '@/components/sections/FooterSection.vue';
import { onMounted, ref } from 'vue';
import InvitationRequestModal from '@/components/modals/InvitationRequestModal.vue';
import { useJotsauceSettings } from '@/stores/jotsauceSettings';

const jotsauceSettings = useJotsauceSettings();

const isLoading = ref(false);
const isInviteOnly = ref(jotsauceSettings.settings?.invitations?.invite_only === undefined ? true : jotsauceSettings.settings.invitations.invite_only);

onMounted(async () => {});
</script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-chemex-image font-dosis-regular font-semibold text-slate-800 dark:text-slate-100">
    <LoadingScreen v-if="isLoading"></LoadingScreen>

    <invitation-request-modal v-if="isInviteOnly" />

    <welcome-navigation />

    <div v-if="isInviteOnly" class="w-full h-full bg-gradient-to-tr from-slate-100 dark:from-slate-800 flex justify-center items-center flex-col">
      <div class="flex justify-center">
        <div class="relative py-3 sm:max-w-xl md:max-w-2xl sm:mx-auto">
          <div
            class="absolute inset-0 bg-transparent border-dashed border-2 border-slate-800 dark:border-slate-100 transform skew-y-0 -rotate-12 rounded-xl"
          ></div>
          <div class="block rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800 max-w-sm text-center transform skew-y-0 -rotate-6">
            <div
              class="py-5 px-6 border-b border-slate-400 dark:border-slate-500 text-6xl font-satisfy-regular font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400"
            >
              invitation
            </div>
            <div class="p-6">
              <h2 class="font-arvo-bold font-bold text-xl mb-3">Do You Have an Invitation?</h2>
              <p class="mb-4 font-bold text-lg">JotSauce registration is currently limited to invitations given out by existing members.</p>
            </div>
            <div class="py-3 px-6 border-t border-slate-400 dark:border-slate-500">
              <button
                type="button"
                data-modal-toggle="invitationRequestModal"
                class="inline-flex mx-3 px-6 py-3 text-center justify-center font-bold text-lg text-slate-100 transition duration-300 rounded-full hover:from-blue-600 hover:to-fuchsia-600 ease bg-gradient-to-br from-blue-400 to-fuchsia-400"
              >
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer-section />
  </section>
</template>

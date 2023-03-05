import { acceptHMRUpdate, defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useStorage } from '@vueuse/core';
import type { AuthenticationResponseInterface } from '../services/jotsauce/interfaces/auth/authentication-response.interface';
import type { UserInterface } from '../services/jotsauce/interfaces/user.interface';

export const useUserSession = defineStore('userSession', () => {
  // token will be synced with local storage
  // @see https://vueuse.org/core/usestorage/
  const token = useStorage('token', '');

  const authentication = ref<Partial<AuthenticationResponseInterface>>();
  const user = ref<Partial<UserInterface>>();

  const isAuthenticated = computed(() => token.value !== undefined && token.value !== '');

  function setAuthentication(newAuthentication: Partial<AuthenticationResponseInterface>) {
    authentication.value = newAuthentication;
    token.value = newAuthentication.plainTextToken;
  }

  function setUser(newUser: Partial<UserInterface>) {
    user.value = newUser;
  }

  async function clearAuthentication() {
    authentication.value = undefined;
    token.value = undefined;
    user.value = undefined;
  }

  return {
    user,
    token,
    isAuthenticated,
    clearAuthentication,
    setUser,
    setAuthentication,
  } as const;
});

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot));
}

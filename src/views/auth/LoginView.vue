<script setup lang="ts">
import LoadingScreen from '@/components/LoadingScreen.vue';
import { login } from '@/services/jotsauce/auth.service';
import { useUserSession } from '@/stores/userSession';
import { notify } from 'notiwind';
import { ref } from 'vue';
import type { AuthenticationResponseInterface } from '@/services/jotsauce/interfaces/auth/authentication-response.interface';
import { useRouter, useRoute } from 'vue-router';
import { useForm } from '@vorms/core';
import z from 'zod';
import { zodResolver } from '@vorms/resolvers/zod';
import WelcomeNavigation from '@/components/layouts/navigation/WelcomeNavigation.vue';
import FooterSection from '@/components/sections/FooterSection.vue';

const isLoading = ref(false);
const router = useRouter();
const route = useRoute();
const userSession = useUserSession();
userSession.clearAuthentication(); // clear authentication if they ever hit this page

const { register, errors, handleSubmit } = useForm({
  initialValues: {
    email_or_username: '',
    password: '',
    remember: false,
  },
  validate: zodResolver(
    z.object({
      email_or_username: z.string().min(3, 'Minimum of 3 Characters!').max(255, 'Maximum of 255 Characters!'),
      password: z.string().min(8, 'Minimum of 8 Characters!'),
    })
  ),
  async onSubmit(values) {
    if (!isLoading.value) {
      isLoading.value = true;

      try {
        const response = login(values);

        if ((await response).type === 'data' && ((await response).data as AuthenticationResponseInterface).accessToken) {
          userSession.setAuthentication((await response).data as AuthenticationResponseInterface);

          if (route.redirectedFrom !== undefined) {
            await router.push(route.redirectedFrom);
          } else {
            await router.push({ path: '/index' });
          }
        } else if ((await response).type === 'error' && (await response).errors) {
          (await response).errors?.forEach((error) => {
            notify(
              {
                group: 'top-right',
                title: error.name,
                text: error.error,
              },
              6000
            );
          });
        } else {
          console.log(await response);
        }
      } catch (e) {
        console.log(e);
      }

      isLoading.value = false;
    }
  },
});

const { value: email_or_username, attrs: email_or_usernameAttrs } = register('email_or_username', {
  validate(value) {
    if (!value) return 'Email or Username is Required!';
  },
});
const { value: password, attrs: passwordAttrs } = register('password', {
  validate(value) {
    if (!value) return 'Password is Required!';
  },
});
const { value: remember, attrs: rememberAttrs } = register('remember');

// onMounted(async () => {});
</script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-wood-section font-dosis-regular font-semibold text-slate-800 dark:text-slate-100 text-lg">
    <LoadingScreen v-if="isLoading"></LoadingScreen>

    <welcome-navigation />

    <div class="w-full h-full bg-gradient-to-tr from-slate-100 dark:from-slate-800 flex justify-center items-center flex-col">
      <div class="flex justify-center">
        <div class="relative py-3 w-80 sm:max-w-xl md:max-w-2xl sm:mx-auto">
          <div
            class="absolute inset-0 bg-transparent border-dashed border-2 border-slate-800 dark:border-slate-100 transform skew-y-0 -rotate-12 rounded-xl"
          ></div>
          <div class="block rounded-xl shadow-2xl bg-slate-100 dark:bg-slate-800 max-w-sm text-center transform skew-y-0 -rotate-6">
            <div class="py-5 px-6 text-6xl font-satisfy-regular font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400">
              login
            </div>
            <form @submit="handleSubmit">
              <div class="px-6 mt-6">
                <div class="relative z-0 mb-6 w-full">
                  <input
                    v-model="email_or_username"
                    type="text"
                    v-bind="email_or_usernameAttrs"
                    class="block py-2.5 px-3 w-full bg-transparent border-2 rounded-xl border-slate-400 appearance-none dark:border-slate-500 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                    placeholder=""
                    required
                  />
                  <label
                    for="email_or_username"
                    class="absolute px-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-1 origin-[0] left-3 peer-focus:text-blue-400 peer-focus:dark:text-blue-500 bg-slate-100 dark:bg-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >email / username</label
                  >
                  <div v-show="'email_or_username' in errors" class="text-red-500 text-sm text-left w-full mt-1">
                    {{ errors.email_or_username }}
                  </div>
                </div>
              </div>
              <div class="px-6 mt-3">
                <div class="relative z-0 mb-6 w-full">
                  <input
                    v-model="password"
                    type="password"
                    v-bind="passwordAttrs"
                    class="block py-2.5 px-3 w-full bg-transparent border-2 rounded-xl border-slate-400 appearance-none dark:border-slate-500 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                    placeholder=""
                    required
                  />
                  <label
                    for="password"
                    class="absolute px-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-1 origin-[0] left-3 peer-focus:text-blue-400 peer-focus:dark:text-blue-500 bg-slate-100 dark:bg-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >password</label
                  >
                  <div v-show="'password' in errors" class="text-red-500 text-sm text-left w-full mt-1">
                    {{ errors.password }}
                  </div>
                </div>
              </div>
              <div class="px-6 mt-3">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="remember" v-bind="rememberAttrs" class="sr-only peer" />
                  <span
                    class="w-11 h-6 bg-slate-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></span>
                  <span class="ml-3 text-gray-900 dark:text-gray-300">trust this device?</span>
                </label>
              </div>
              <div class="px-6 mt-3 mb-6 pb-6">
                <button
                  type="submit"
                  class="inline-flex mx-3 px-6 py-3 text-center justify-center text-lg text-slate-100 transition duration-300 rounded-full hover:from-blue-600 hover:to-fuchsia-600 ease bg-gradient-to-br from-blue-400 to-fuchsia-400 w-36"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer-section />
  </section>
</template>

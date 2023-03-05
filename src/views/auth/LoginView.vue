<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
import { login } from '@/services/jotsauce/auth.service';
import { useUserSession } from '@/stores/userSession';
import { onMounted } from 'vue';

const userSession = useUserSession();
userSession.clearAuthentication(); // clear authentication if they ever hit this page

onMounted(async () => {
  const resp = await login({ email_or_username: 'hotsaucejake', password: 'password' });
  console.log(resp);
});
</script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-auth-light font-dosis-regular font-semibold text-slate-800 dark:text-slate-100">
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
            <div class="p-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  class="block py-2.5 px-3 w-full text-sm bg-transparent border-2 rounded-xl border-slate-400 appearance-none dark:border-slate-500 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                  placeholder=""
                  required
                />
                <label
                  for="floating_email"
                  class="absolute text-sm px-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-1 origin-[0] left-3 peer-focus:text-blue-400 peer-focus:dark:text-blue-500 bg-slate-100 dark:bg-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email / Username</label
                >
              </div>
            </div>
            <div class="py-3 px-6 border-t border-slate-400 dark:border-slate-500">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LoadingScreen from '@/components/LoadingScreen.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import { login } from '@/services/jotsauce/auth.service';
import { object, string } from 'zod';
import { useUserSession } from '@/stores/userSession';
import { notify } from 'notiwind';
import { onMounted, ref } from 'vue';

const userSession = useUserSession();
userSession.clearAuthentication(); // clear authentication if they ever hit this page

const authentication = ref({
  email_or_username: '',
  password: '',
});

// const authenticationSchema = object({
//   email_or_username: string().min(3).max(255).required(),
// });

// import { object, string, number } from 'zod';

// const addressSchema = object({
//   street: string().min(3).max(50).required(),
//   number: number().required(),
//   city: string().min(3).max(50).required(),
//   state: string().min(2).max(2).required(),
//   zip: string().pattern(/^\d{5}-\d{3}$/).required()
// });

// const address = ref({
//   street: '',
//   number: 0,
//   city: '',
//   state: '',
//   zip: ''
// })

// const submitForm = async () => {
//   try {
//     const valid = addressSchema.validate(address.value)

//     if (!valid) return

//     // Send data to server
//   } catch (err) {
//     console.log(err.errors)
//   }
// }

onMounted(async () => {
  // await login({ email_or_username: 'hotsaucejakes', password: 'password' });
  // await login({ email_or_username: 'hotsaucejake', password: 'password' });
  // Error notifcation
  notify(
    {
      group: 'top-right',
      title: 'Error',
      text: 'Your email is already used!',
    },
    999999
  );

  notify(
    {
      group: 'top-right',
      title: 'Error',
      text: 'Your email is already used!',
    },
    4000
  );

  // Generic notification
  // notify(
  //   {
  //     group: 'generic',
  //     title: 'Info',
  //     text: 'This channel archived by the owner',
  //   },
  //   4000
  // );
});
</script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-wood-section font-dosis-regular font-semibold text-slate-800 dark:text-slate-100 text-lg">
    <!-- <LoadingScreen /> -->
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
            <div class="px-6 mt-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="authentication.email_or_username"
                  type="email"
                  name="email_or_username"
                  class="block py-2.5 px-3 w-full bg-transparent border-2 rounded-xl border-slate-400 appearance-none dark:border-slate-500 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                  placeholder=""
                  required
                />
                <label
                  for="email_or_username"
                  class="absolute px-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-1 origin-[0] left-3 peer-focus:text-blue-400 peer-focus:dark:text-blue-500 bg-slate-100 dark:bg-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >email / username</label
                >
              </div>
            </div>
            <div class="px-6 mt-3">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  v-model="authentication.password"
                  type="password"
                  name="password"
                  class="block py-2.5 px-3 w-full bg-transparent border-2 rounded-xl border-slate-400 appearance-none dark:border-slate-500 dark:focus:border-blue-400 focus:outline-none focus:ring-0 focus:border-blue-400 peer"
                  placeholder=""
                  required
                />
                <label
                  for="password"
                  class="absolute px-1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-1 origin-[0] left-3 peer-focus:text-blue-400 peer-focus:dark:text-blue-500 bg-slate-100 dark:bg-slate-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >password</label
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

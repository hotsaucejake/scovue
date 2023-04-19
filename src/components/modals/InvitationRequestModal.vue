<template>
  <div
    id="invitationRequestModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-4 sm:top-0 right-0 left-0 z-50 justify-center items-center w-[calc(100%-2rem)] sm:w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative sm:p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 bg-slate-100 rounded-lg shadow dark:bg-slate-800">
        <!-- Modal header -->
        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b border-slate-300 sm:mb-5 dark:border-slate-600">
          <h3 class="text-2xl sm:text-4xl font-satisfy-regular font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-blue-400">
            invitation request
          </h3>
          <button
            type="button"
            class="text-slate-800 bg-transparent hover:bg-slate-300 hover:text-slate-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-slate-200"
            data-modal-toggle="invitationRequestModal"
          >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close Invitation Request</span>
          </button>
        </div>
        <!-- Modal body -->
        <form action="#">
          <div class="grid gap-4 mb-4 grid-cols-1">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-slate-800 dark:text-slate-100">Email</label>
              <input
                type="email"
                v-model="email"
                v-bind="emailAttrs"
                class="bg-white border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black dark:border-slate-600 placeholder-slate-400 dark:placeholder-slate-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="example@email.com"
                required
              />
              <div v-show="'email' in errors" class="text-red-500 text-sm text-left w-full mt-1">
                {{ errors.email }}
              </div>
            </div>

            <div>
              <label for="message" class="block mb-2 text-sm font-medium text-slate-800 dark:text-slate-100">Message (optional)</label>
              <textarea
                v-model="message"
                v-bind="messageAttrs"
                rows="4"
                class="block p-2.5 w-full text-sm text-slate-800 bg-white rounded-lg border border-slate-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-slate-600 placeholder-slate-400 dark:placeholder-slate-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Let us know why you want to be invited..."
              ></textarea>
              <div v-show="'message' in errors" class="text-red-500 text-sm text-left w-full mt-1">
                {{ errors.message }}
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="inline-flex mx-3 px-6 py-3 text-center justify-center text-lg text-slate-100 transition duration-300 rounded-full hover:from-blue-600 hover:to-fuchsia-600 ease bg-gradient-to-br from-blue-400 to-fuchsia-400 w-36"
          >
            Request
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { initModals } from 'flowbite';
import { useForm } from '@vorms/core';
import { zodResolver } from '@vorms/resolvers/zod';
import z from 'zod';

const isLoading = ref(false);

const { register, errors, handleSubmit } = useForm({
  initialValues: {
    email: '',
    message: null,
  },
  validate: zodResolver(
    z.object({
      email: z.string().email().max(255, 'Maximum of 255 Characters!'),
      message: z.string().max(1024, 'Maximum of 1024 Characters!').nullable(),
    })
  ),
  async onSubmit(values) {
    if (!isLoading.value) {
      // handle submit here
      // same as in the LoginView
    }
  },
});

const { value: email, attrs: emailAttrs } = register('email', {
  validate(value) {
    if (!value) return 'Email is Required!';
  },
});

const { value: message, attrs: messageAttrs } = register('message');

onMounted(() => {
  initModals();
});
</script>

<style scoped></style>

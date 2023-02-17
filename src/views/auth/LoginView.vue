<script setup lang="ts"></script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-auth-light flex justify-center items-center flex-col">
    <!-- component -->
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12 w-full">
      <div class="relative py-3 sm:max-w-xl md:max-w-2xl sm:mx-auto">
        <div class="absolute inset-0 bg-transparent border-dashed border-4 transform skew-y-0 -rotate-6 rounded-3xl"></div>
        <!-- <div class="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div> -->
        <!-- <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-blue-400 shadow-lg transform skew-y-0 -rotate-3 rounded-3xl"></div> -->
        <div class="relative px-4 py-10 bg-gradient-to-br from-slate-100 to bg-slate-200 shadow-lg rounded-3xl p-20 border-4 border-slate-600">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">Login</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-14 w-full border-b-2 border-gray-300 text-gray-900 bg-gradient-to-br from-slate-50 to-slate-100 rounded-t-xl focus:outline-none focus:borer-rose-600 px-2"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm px-2"
                    >Email Address</label
                  >
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >Password</label
                  >
                </div>
                <div class="relative flex justify-center">
                  <button
                    class="px-6 py-3 text-center justify-center text-lg text-slate-100 transition duration-300 rounded-full hover:from-blue-600 hover:to-fuchsia-600 ease bg-gradient-to-br from-blue-400 to-fuchsia-400 w-36"
                  >
                    Login
                  </button>
                </div>
                <div class="flex flex-row m-auto bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 p-6 gap-8 rounded-lg border-2 border-purple-500">
                  <div class="my-auto">
                    <div class="text-lg text-purple-300">Downloads</div>
                    <div class="text-4xl text-purple-100">622k</div>
                  </div>
                  <div class="text-purple-300 my-auto bg-gradient-to-l from-purple-700 via-purple-800 to-purple-900 rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

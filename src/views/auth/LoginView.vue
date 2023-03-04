<script setup lang="ts"></script>

<template>
  <section class="w-full h-screen bg-center bg-cover bg-auth-light flex justify-center items-center flex-col">
    <!-- component -->
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12 w-full">
      <div class="relative py-3 sm:max-w-xl md:max-w-2xl sm:mx-auto">
        <div class="absolute inset-0 bg-transparent border-dashed border-2 border-slate-100 transform skew-y-0 -rotate-12 rounded-3xl"></div>
        <!-- <div class="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div> -->
        <!-- <div class="absolute inset-0 bg-gradient-to-br from-fuchsia-400 to-blue-400 shadow-lg transform skew-y-0 -rotate-3 rounded-3xl"></div> -->
        <div
          class="relative px-4 py-10 bg-gradient-to-r from-fuchsia-400 to-blue-400 shadow-lg rounded-3xl p-20 border-2 border-slate-200 transform skew-y-0 -rotate-6"
        >
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-bold text-slate-100 text-center">Login</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative my-6">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-14 w-full border-b-2 border-slate-100 text-gray-900 bg-gradient-to-br from-slate-100 to-slate-300 rounded-t-xl focus:outline-none focus:borer-rose-600 px-2"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-5 text-slate-800 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-5 transition-all peer-focus:-top-5 peer-focus:text-slate-100 peer-focus:text-sm px-2 rounded-t-xl font-bold"
                    >Email Address</label
                  >
                </div>
                <div class="relative my-6">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-14 w-full border-b-2 border-slate-100 text-gray-900 bg-gradient-to-br from-slate-100 to-slate-300 rounded-t-xl focus:outline-none focus:borer-rose-600 px-2"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-2.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-3.5 transition-all peer-focus:-top-5 peer-focus:text-slate-100 peer-focus:text-sm px-2 rounded-t-xl font-bold"
                    >Password</label
                  >
                </div>
              </div>
            </div>
            <div class="relative flex justify-center my-6">
              <button
                class="px-6 py-3 hover:border-slate-300 border-slate-100 border-2 text-center justify-center text-lg text-slate-100 transition duration-300 rounded-full hover:from-blue-700 hover:to-fuchsia-700 ease bg-gradient-to-br from-blue-600 to-fuchsia-600 w-36"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

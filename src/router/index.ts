import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/WelcomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
      meta: { requiresAuth: false },
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/auth/RegisterView.vue"),
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../views/IndexView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

export default router;

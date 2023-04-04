import { createRouter, createWebHistory } from '@ionic/vue-router';
import Welcome from '@/views/WelcomeView.vue';
import { useUserSession } from '@/stores/userSession';

declare module 'vue-router' {
  interface RouteMeta {
    isAdmin?: boolean;
    requiresAuth: boolean;
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
      meta: { requiresAuth: false },
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/auth/LoginView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('../views/IndexView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/folder/:id',
      component: () => import('@/views/FolderPage.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !useUserSession().isAuthenticated) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});

export default router;

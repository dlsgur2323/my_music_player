import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/now",
    name: "Now",
    component: () => import(/* webpackChunkName "home" */ '@/components/MainComponents/Articles/Now.vue')
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import(/* webpackChunkName "inputTag" */ '@/components/MainComponents/Articles/Chart.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
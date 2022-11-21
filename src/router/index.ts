import { createRouter, createWebHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";
import EleTabel from "../views/EleTabel.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "tabel",
    component: EleTabel,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/home",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

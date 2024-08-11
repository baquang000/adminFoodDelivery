import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/category",
      component: () => import("../views/Category.vue"),
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/web",
      component: () => import("../frontend/views/Home.vue"),
    },
    {
      path: "/web/category/:id",
      component: () => import("../frontend/views/CategoryDetails.vue"),
    },
    {
      path: "/dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/product",
      component: () => import("../views/Product.vue"),
    },
    {
      path: "/order",
      component: () => import("../views/Order.vue"),
    },
    {
      path: "/category",
      component: () => import("../views/Category.vue"),
    },
    {
      path: "/comment",
      component: () => import("../views/Comment.vue"),
    },
  ],
});

export default router;

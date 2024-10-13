import { createRouter, createWebHistory } from "vue-router";

import { useUserStore } from "@/stores/user";

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
    {
      path: "/price",
      component: () => import("../views/Price.vue"),
    },
    {
      path: "/time",
      component: () => import("../views/Time.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/order-details/:id",
      component: () => import("../views/OrderDetails.vue"),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

const PUBLIC_PAGES = ["/login"];

router.beforeEach(async (to, _from, next) => {
  if (PUBLIC_PAGES.includes(to.path as string)) {
    next();
  } else {
    const token = JSON.parse(
      localStorage.getItem("user") as string
    )?.accessToken;

    if (!token || !useUserStore().user) return next("/login");

    next();
  }

  next();
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../frontend/components/Webview.vue"),
      children: [
        {
          path: "/",
          component: () => import("../frontend/views/Home.vue"),
        },
        {
          path: "login",
          component: () => import("../frontend/views/Login.vue"),
        },
        {
          path: "register",
          component: () => import("../frontend/views/Register.vue"),
        },
        {
          path: "category/:id",
          component: () => import("../frontend/views/CategoryDetails.vue"),
        },
        {
          path: "cart",
          component: () => import("../frontend/views/Cart.vue"),
        },
        {
          path: "product/:id",
          component: () => import("../frontend/views/ProductDetails.vue"),
        },
        {
          path: "payment",
          component: () => import("../frontend/views/Payment.vue"),
        }, {
          path: "success",
          component: () => import("../frontend/views/Success.vue"),
        },
      ]
    },

    {
      path: "/admin",
      component: () => import("../components/Adminview.vue"),
      children: [
        {
          path: "dashboard",
          component: () => import("../views/Dashboard.vue"),
        },
        {
          path: "product",
          component: () => import("../views/Product.vue"),
        },
        {
          path: "order",
          component: () => import("../views/Order.vue"),
        },
        {
          path: "category",
          component: () => import("../views/Category.vue"),
        },
        {
          path: "comment",
          component: () => import("../views/Comment.vue"),
        },
      ]
    }
  ],
});

export default router;

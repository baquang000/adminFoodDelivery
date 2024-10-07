import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
        {
          path: "order-details/:id",
          component: () => import("../views/OrderDetails.vue"),
        },
      ],
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

const PRIVATE_PAGES = [""];

router.beforeEach(async (to, _from, next) => {
  next();
  // if (!to.path.includes('admin') && !PRIVATE_PAGES.includes(to.path)) {
  //   return next()
  // } else {
  //   const accessToken = JSON.parse(localStorage.getItem('user') as string)?.accessToken

  //   if (!accessToken) {
  //     return next('/login')
  //   }

  //   if (JSON.parse(localStorage.getItem('user') as string)?.userRoles.find((item: { role: { roleName: string; }; }) => item.role.roleName === 'super_admin')) {
  //     return next()
  //   } else {
  //     return next('/')
  //   }
  // }
});

export default router;

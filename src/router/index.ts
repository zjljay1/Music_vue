import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   // 根页面重定向到/Login/Login
    //   path: '/',
    //   redirect: "/Login/Login",
    // },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../views/indexPage/myIndex.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/loginPage/myLogin.vue"),
    },
    {
      path: "/error",
      name: "error",
      component: () => import("../views/fofPage/myFof.vue"),
    },
  ],
});

export default router;

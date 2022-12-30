import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomeView from "../views/HomeView.vue";
const routes: Array<RouteRecordRaw> = [
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
  {
    path: "/axios",
    name: "axios",
    component: () => import("../views/axios.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
const whiteList = ['/index'];
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); //这里根据自己项目的实际情况添加是否登录的判断条件
  if (to.name !== "login" && !token) {
    next({ name: "login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
  // next();
});
export default router;

const routes = [
  {
    path: "/",
    name: "Login",
    meta: { authorized: false },
    component: () => import("../views/userAuthentication.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: { authorized: true },
    component: () => import("../views/home.vue"),
  },
  {
    path: "/discover",
    name: "Discover",
    meta: { authorized: true },
    component: () => import("../views/discover.vue"),
  },
];
export default routes;

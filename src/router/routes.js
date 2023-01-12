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
  {
    path: "/trending",
    name: "Trending",
    meta: { authorized: true },
    component: () => import("../views/trending.vue"),
  },
  {
    path: "/messages/:user",
    name: "Messages",
    meta: { authorized: true },
    component: () => import("../views/messages.vue"),
  },
];
export default routes;

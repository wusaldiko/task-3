import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomePage.vue";
import { MainRoutes, MyAccountRoutes } from "./constants";

const routes = [
  {
    path: MainRoutes.Home,
    name: "home",
    component: HomeView,
  },
  {
    path: MainRoutes.MyAccount,
    name: "myAccount",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "myAccount" */ "../views/MyAccount/MyAccountPage.vue"
      ),
    children: [
      {
        path: MyAccountRoutes.Dashboard,
        component: import(
          /* webpackChunkName: "" */ "../views/MyAccount/components/DashboardContent.vue"
        ),
      },
      {
        path: MyAccountRoutes.Orders,
        component: import(
          /* webpackChunkName: "" */ "../views/MyAccount/components/OrdersContent.vue"
        ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

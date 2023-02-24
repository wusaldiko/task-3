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
    component: () => import("../views/MyAccount/MyAccountPage.vue"),
    children: [
      {
        path: MyAccountRoutes.Dashboard,
        component: import(
          /* webpackChunkName: "" */ "@/views/MyAccount/components/DashboardContent.vue"
        ),
      },
      {
        path: MyAccountRoutes.Orders,
        component: import(
          /* webpackChunkName: "" */ "@/views/MyAccount/components/OrdersContent.vue"
        ),
      },
      {
        path: MyAccountRoutes.Address,
        component: import(
          /* webpackChunkName: "" */ "@/views/MyAccount/components/AddressContent.vue"
        ),
      },
      {
        path: MyAccountRoutes.AccountDetails,
        component: import(
          /* webpackChunkName: "" */ "@/views/MyAccount/components/AccountDetailsContent.vue"
        ),
      },
    ],
  },
  {
    path: MainRoutes.Home + "/plugin/" + ":id",
    name: "SingleWebShop",
    component: () => import("@/views/SingleWebShop/SingleWebShopPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

<template scoped>
  <div class="container">
    <main-layer>
      <div class="my-account">
        <dashboard title="My Profile" :list="categories" />
        <router-view></router-view>
      </div>
    </main-layer>
  </div>
</template>

<script>
import MainLayer from "@/components/Layers/Main.vue";
import Dashboard from "@/components/Dashboard.vue";
import { MyAccountRoutes } from "@/router/constants";


export default {
  components: { MainLayer, Dashboard },
  data() {
    return {
      categories: [
        {
          id: 1,
          text: "Dashboard",
          path: MyAccountRoutes.Dashboard,
        },
        {
          id: 2,
          text: "Orders",
          path: MyAccountRoutes.Orders,
        },
        {
          id: 3,
          text: "Address",
          path: MyAccountRoutes.Address,
        },
        {
          id: 4,
          text: "Account details",
          path: MyAccountRoutes.AccountDetails,
        },
        {
          id: 5,
          text: "Logout",
          path: "logout",
        },
      ],
    };
  },
};
</script>

<style scoped>
.my-account {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
}
</style>

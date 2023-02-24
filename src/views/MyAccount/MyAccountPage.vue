<template scoped>
  <div class="my-account container">
    <main-layer>
      <dashboard title="My Profile" :list="categories" />
      <router-view></router-view>
    </main-layer>
  </div>
</template>

<script>
import MainLayer from "@/components/Layers/Main.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  components: { MainLayer, Dashboard },
  data() {
    return {
      categories: [
        {
          id: 1,
          text: "Dashboard",
          path: "my-account/dashboard",
        },
        {
          id: 2,
          text: "Orders",
          path: "my-account/orders",
        },
        {
          id: 3,
          text: "Address",
          path: "my-account/address",
        },
        {
          id: 4,
          text: "Account details",
          path: "my-account/account-details",
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

<template>
  <div class="dashboard">
    <h1>This is an about MyAccount</h1>
    <!-- MainRoutes foydalaniib qo'yas -->
    <router-link to="/my-account/dashboard">Dashboard</router-link> |
    <router-link to="/my-account/orders">Orders</router-link>
  </div>
  <router-view></router-view>
</template>

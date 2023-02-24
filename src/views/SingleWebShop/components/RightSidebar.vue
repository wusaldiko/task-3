<template>
  <p class="right-sidebar__text">
    If you have a coupon code discount please apply, otherwise please subscribe
    to our offers below for a chance to receive one.
  </p>
  <main-search placeholder="e.g Responsive slider" />
  <main-price />
  <p class="right-sidebar__text">
    After your plugin purchase, you'll get the licence key and plugin option to
    download. Be aware that this plugin can only be activated one time in any of
    your WordPress Sites.
  </p>
  <details-vue />
</template>
<script>
import DetailsVue from "@/components/Details.vue";
import MainPrice from "./PriceCard.vue";
export default {
  components: { MainPrice, DetailsVue },
};
</script>
<style lang="scss">
</style>
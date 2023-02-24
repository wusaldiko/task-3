<template>
  <Nav />
  <slot></slot>
  <Footer />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Main",
  components: {
    Nav,
    Footer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

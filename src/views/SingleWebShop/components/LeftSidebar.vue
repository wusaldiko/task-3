<template>
  <h1>ID:{{ $route.params["id"] }}</h1>
</template>
<script>
export default {
  data() {
    return {
      productId: this.$route.params["id"],
    };
  },
  watch: {
    productId() {
        console.log("you can send a request!");
    },
  },
};
</script>
<style lang="scss"></style>

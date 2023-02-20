<template>
  <div class="home">
    <MainLayer children="Main content" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainLayer from "@/components/Layers/Main.vue";

export default {
  name: "HomeView",
  components: {
    MainLayer,
  },
};
</script>

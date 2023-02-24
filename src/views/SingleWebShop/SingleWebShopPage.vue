<template>
  <div class="page container">
    <main-layer>
      <div class="plugin">
        <div class="plugin-left">
          <left-sidebar :product="product"/>
        </div>
        <div class="plugin-right">
          <right-sidebar />
        </div>
      </div>
      <contact
        :content="{
          title: 'We build apps and websites',
          text: 'From multipurpose themes to niche templates,you\'ll always find something that catches your eye.',
        }"
      />
      <div class="plugin-cards" v-if="plugins">
        <plugin-card
          v-for="{ id, title, price, description, image } in plugins"
          @click="$router.push(String(id))"
          :key="id"
          :title="title"
          :price="price"
          :subtitle="description"
          :imageUrl="image"
          class="plugin-card"
        />
      </div>
    </main-layer>
  </div>
</template>

<script>
import MainLayer from "@/components/Layers/Main.vue";
import RightSidebar from "@/views/SingleWebShop/components/RightSidebar.vue";
import LeftSidebar from "@/views/SingleWebShop/components/LeftSidebar.vue";
import PluginCard from "@/components/PluginCard.vue";
import Contact from "@/components/Contact.vue";
import { getProductById } from "@/views/SingleWebShop/providers/index";
import { getPlugins } from "@/views/Home/providers/index";


export default {
  components: { MainLayer, RightSidebar, LeftSidebar, Contact, PluginCard },
  data() {
    return {
      product: {},
      plugins: []
    };
  },
  async created() {
    this.product = await getProductById(this.$route.params["id"]);
    this.plugins = await getPlugins(4);
  },
  async updated() {
    this.product = await getProductById(this.$route.params["id"]);
  }
};
</script>
<style src="./module.css">
</style>
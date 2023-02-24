<template>
  <div class="home container">
    <MainLayer>
      <main-header
        :title="mainHeaderData.title"
        :text="mainHeaderData.text"
        :image="mainHeaderData.image"
      />
      <client-list />
      <main-section />
      <contact
        :content="{
          title: 'We build apps and websites',
          text: 'From multipurpose themes to niche templates,you\'ll always find something that catches your eye.',
        }"
      />
    </MainLayer>
  </div>
</template>

<script>
import MainHeader from "@/views/Home/components/MainHeader.vue";
import MainSection from "@/views/Home/components/MainSection.vue";
import MainLayer from "@/components/Layers/Main.vue";
import ClientList from "./components/ClientList.vue";
import Contact from "@/components/Contact.vue";
export default {
  name: "HomeView",
  components: {
    MainHeader,
    MainLayer,
    ClientList,
    MainSection,
    Contact,
  },
  computed: {
    mainHeaderData() {
      return {
        title: "More than 100 Wordpress Themes & Templates",
        text: "From multipurpose themes to niche templates, you'll always find something that catches your eye.",
        image: "",
      };
    },
  },
};
</script>

<style ></style>
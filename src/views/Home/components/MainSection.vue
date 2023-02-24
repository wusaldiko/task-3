<template>
  <v-container class="bg-surface-variant main-section">
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]">
        <v-sheet>
          <dashboard title="Browse Categories" :list="categories" />
          <subscribe />
          <analysis-card
            :percent="50"
            title="Monthly users in your site"
            text="We accompany you with our
            versatile expertise in digital marketing"
            :progress="1.0286"
            class="card-ad"
          />
          <ad-card
            text="Create your beautiful portfolio website with Squarespace. Start your free trial."
          />
        </v-sheet>
      </v-col>

      <v-col :cols="cols[1]">
        <v-sheet
          :class="{
            'pl-3':
              this.$vuetify.display.lg ||
              this.$vuetify.display.md ||
              this.$vuetify.display.xl,
            'mt-3': !this.$vuetify.display.md || !this.$vuetify.display.lg,
          }"
        >
          <info />
          <div class="plugin-cards" v-if="plugins">
            <plugin-card
              v-for="{ id, title, price, description, image } in plugins"
              @click="$router.push('plugin/' + id)"
              :key="id"
              :title="title"
              :price="price"
              :subtitle="description"
              :imageUrl="image"
              class="plugin-card"
            />
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Dashboard from "@/components/Dashboard.vue";
import Info from "@/views/Home/components/Info.vue";
import PluginCard from "@/components/PluginCard.vue";
import Subscribe from "@/views/Home/components/Subscribe.vue";
import AnalysisCard from "@/views/Home/components/AnalysisCard.vue";
import AdCard from "@/views/Home/components/AdCard.vue";

import { getPlugins } from "@/views/Home/providers/index";

export default {
  components: { Info, Dashboard, PluginCard, Subscribe, AnalysisCard, AdCard },
  data() {
    return {
      categories: [
        {
          id: 1,
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPNJREFUSEvtldENwjAQQ90JgAmACYANYBOYDDaBEWADmAA2ALlKpOi4pE6lSHzQv/ZyflbiSzs0frrG+qgBTAGcg6EdgJdiTgVE8XUQvQKQIAogFb8FwAqABBkCWPFtAFwASJASwBOP+86aBMkBSuLxbCWIB1DEZYgF1IhLkBRgozhTsw6AvU8vwimAsWMy4jOUMDtn7+QDtTZ8bwXgvPRD6bmMTmKN2T8CWBjLdwCHEFeWbF+/XAFQaJ65d1hbhtpogNvoOP4Dvs7LbsnvbBFvzInyt3LWPGycvZgy96dCNHNsiu+TucjOwUjzflvtfVMN/wCUvlMZx+RBFQAAAABJRU5ErkJggg==",
          text: "Home",
          path: "Home",
        },
        {
          id: 2,
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhVJREFUSEu11f1RFFEQBPAmAjQCMQI1A41AiQCNAI1AiECNQI0AiAAzECIQI1Aj0PpdvaFmlz3v7g9e1dXC7Zvunp6P28s9n717xs82BE+THCXxfDAE/U5yleTreK7V+T+C50neJ3mc5Hx8AAFH5P3rJD+SnCb5tsSyjuBtkpMknl822Ijk4xDzaX53iQCooFdJbrasEYLjJO8G2W3YnEDa7DgYVmyDT9CHdvFFt2tOQPHf4fGfQQYAKfLv4504qtk3J7geDbHi7AQsEbA/1FwMm0pcB+pWyFZHVdzPQUrUhAC4i/x/MlAfNqsA6RjHvWfNFg2h44DLTEvDmRAIotLL8vTNrIuoejmAtW81QZHLGgFClk4IeM+yrnRuE1WfB8G8Y8QTRMSvwu41KALxXWm3qdpxySbxdfcWqxOURSayK+02ueNjdThlkwap2WFN1WFiEdUK7WkV8FdnlE1qU5N9ObNJHGGenWxCQEHtF/Eul1KpKxxyQMgftW7yPwH2VO2t1YrpFlEtfSQCKDkbStlUAnzVa3HY7NEgBBTZnXUNhGrj7pRST1axyOmdRrWOqjmqCV9dXFp2LlbLdaUGS4Z1/G0grRSEZgfeasDqrFvXSARbv/rehALpp1ZHkdpBE/B1GRRI/SboJIVTB3Y46mWiCZGBBpDtnbPpJxNQFbdWRIGoSbVmEe9MsCRqp+82ZbAT2NLlf/7PixlWTm4aAAAAAElFTkSuQmCC",
          text: "WordPress Themes",
          path: "WordPress-Themes",
        },
        {
          id: 3,
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR5JREFUSEvN1cExBUEUheHvRYAMiAARIAIywJYFIkAEbNgiAmRABIgAESAC6qqeV2PevOmuGqOczSz6zv379JnbMzKwRgP396eAz+TmHZc4+A13dQcVoOq7hru+kLYj2scJbrExBGAWb6nxAl76QKaFHBls9mj8iOV4fxpgCQ89AK+Y7wLEWuxiEdvpqyrhVc6PcZQDbOEigb7tZhTZPSOe4+xygxYzMZPOMxx1qdrQPVarwhzgFHu4QjToUszMSvNIc4AIKmyH5hCO2lTVfaRwx3U5QDS7wXq6OsJRmyLQwzanJYCY5utcwml94nopAdQ/2S7OE2J+fqgUUGhgsqwUcIYdnGO30aZrrfiHU7/Km5vqWisGDO5g8Az+L+ALYZk0GaU3ojwAAAAASUVORK5CYII=",
          text: "eCommerce Templates",
          path: "eCommerce-Templates",
        },
        {
          id: 4,
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMlJREFUSEvtlVENwjAURc8UgANAAUgAJ6AACYADHIATkAAOwAEOIDdZl65p9kpKEz7az/XtnNvX5a2h8GoK80kR7IEj8ArCjIEtcBgKaQkE3wE3YOVJBL8Ai1aguuiyBAJdgbknEcjB78AycrpOZglUGEr0TMlNuAp9gZKcgGnmxT+ATXvynkAbk0y4e12sWXiCd7ub0rahHD2OD6sC17baIvNDri364xbphzIy86UVPN3QDKfp+QcDT/B1bJqmZfuyKndymrrigg999TEZp5UljwAAAABJRU5ErkJggg==",
          text: "Marketing Templates",
          path: "Marketing-Templates",
        },
        {
          id: 5,
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAIFJREFUSEtjZKAxYKSx+Qx0t+AAAwODPZKvYA74j+ZTbOIgvY7oIYLuA2IMAplByGK4PbgsIDXoYA7D0Ed3C6ieqEgNCpIdQPcgwhlZBJw+eCKZXB/g9CDdI5nkVALVMPTjgGQfwIIKW6GGq6DDWpCiRzIxxTVFFtA8kkeuBQOXkwG8FyAZlvOYaQAAAABJRU5ErkJggg==",
          text: "CMS Templates",
          path: "CMS-Templates",
        },
        {
          id: 6,
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ5JREFUSEvtlN0RQDAQhL9UoAR0ohQqoxSl0IEOmDMyE785E/FCXu9uN7vJrSHyMZHxeZWgAGogC1TVARXQCo6rQAppILgdF6x8SzAu1VDbVjgu2E9g/f8t8n7kD1jk9UDZMO/Y0aIp571tO4IBSLxjuobehqarQNK0eSDwBLw8SlPN3W7n1d3kjEJgQc8UXl5SoyA6geZtTns0CoIIJnj1Ihl9N/SfAAAAAElFTkSuQmCC",
          text: "Marketing Templates",
          path: "Marketing-Templates",
        },
        {
          id: 7,
          imageUrl:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP1JREFUSEvlldERwiAQRF8qUCtQO7AErcASHDuwIy3BDrQE7UA7sAOddSCDZzBAki/5yWSAfbd3B1QMPKqB9ekTcADOgL71sIAlsAdmLc62RkiiG7fnY84CbsA0U1zBXIBRsK+GWMDTLUpNncQV1MKlx0N6ASgta2DlHHjILkxfqYMw548AMgb0Hy1ySopCcS8k0bkV12SugyZx6diuKnKQKq5aqKveI9VBjvgJmOQAUsWlqVqoVevAUxz4wofNEcv5V5OUAKIFBToDfonLYREg50b/A4Bvs5y02LVXd7s2HjQ9OOr7tjchFsAd0G16jB20LpE37k19WIrBgwNed7ZCGbKlO0wAAAAASUVORK5CYII=",
          text: "Blogging",
          path: "Blogging",
        },
      ],
      plugins: [],
    };
  },
  computed: {
    cols() {
      const { lg, md, xl } = this.$vuetify.display;
      return lg || md || xl ? [3, 9] : [12, 12];
    },
  },
  async created() {
    this.plugins = await getPlugins(12);
  },
};
</script>
<style lang="scss" scoped>
.main-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  margin: 100px auto !important;

  .plugin-cards {
    margin-top: 48px;
    display: grid;
    row-gap: 30px;
    grid-template-columns: repeat(3, 1fr);

    .plugin-card {
      width: 250px;
    }
  }

  .card-ad {
    margin: 50px 0;
  }
}

@media (max-width: 1280px) {
  .plugin-cards {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 10px;
    .plugin-card {
      width: 100% !important;
    }
  }
}

@media (max-width: 500px) {
  .plugin-cards {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>

<template>
  <footer class="footer">
    <v-container class="bg-surface-variant">
      <v-row no-gutters class="footer__sections">
        <v-col order="first" v-for="{ title, links } in sections">
          <v-sheet class="pa-2 ma-2 footer__section">
            <h4 class="footer-title">{{ title }}</h4>
            <ul>
              <li class="link footer__link" v-for="link of links">
                {{ link }}
              </li>
            </ul>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: "main-footer",
  data: () => ({
    sections: [
      {
        title: "Envato Market",
        links: ["Terms", "Licenses", "Market API", "Become an affiliate"],
      },
      {
        title: "Help",
        links: ["Themes and Templates", "Authors", "Help Center"],
      },
      {
        title: "Our Community",
        links: ["Community", "Blog", "Forums", "Meetups"],
      },
      {
        title: "Contact",
        links: ["Sabri Hakuli", "sabrihakuli@outlook.com", "+383 44 201 874"],
      },
    ],
  }),
  mounted() {
    if (!this.$vuetify.display.lg) {
      this.sections = this.sections.splice(0, 2);
    }
  },
};
</script>

<style scoped lang="scss">
.footer {
  text-align: start;

  &-title {
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 20px;
    line-height: 29px;
    color: #0b0b0c;
  }

  &__link {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    margin: 10px 0;
  }
}
</style>

import { createApp } from "vue";

import "vuetify/styles";
import { createVuetify } from "vuetify/lib/framework.mjs";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import UIComponents from "@/components/UI/index.js";

const app = createApp(App);

UIComponents.forEach((component) => {
  app.component(component.name , component);
});

const vuetify = createVuetify({
  components,
  directives,
});

app.use(store).use(router).use(vuetify).mount("#app");

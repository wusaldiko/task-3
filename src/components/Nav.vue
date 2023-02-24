<template>
  <nav class="nav">
    <div class="nav-left" v-if="isVisibleBurger">
      <img
        src="@/assets/images/logo.png"
        alt="logo"
        class="logo"
        draggable="false"
        @click="$router.push(MainRoutes.Home)"
      />
      <select default="browse" class="link nav__select">
        <option value="browse" class="nav__link">Browse</option>
        <option value="browse" class="nav__link">IOS</option>
      </select>
      <div class="nav__links">
        <router-link to="/" class="link nav__link">All-Exclusive</router-link>
        <router-link to="/" class="link nav__link">Docs</router-link>
      </div>
    </div>
    <v-layout v-else>
      <img
        @click.stop="drawer = !drawer"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAG9JREFUSEvtlckNwCAQA01nlEY6g8qC9rEfjigPKyBiF+CRRoYNWJSwiAuBPzMv1a46AbiJ3q+2a6aaCTVmx9kOTLQ8rtKq3Uskr7po1bNxmWpm8lvVTOiwS8/Jtfzvr7azyEzXp3Ex9T52SfX5qisn1AwfJnWg+AAAAABJRU5ErkJggg=="
      />

      <v-navigation-drawer v-model="drawer" location="bottom" temporary>
        <v-list :items="items" @click="$router.push('/')"></v-list>
      </v-navigation-drawer>
    </v-layout>
    <div class="nav-right">
      <div class="nav__icons">
        <div class="nav__icon" @click="$router.push('/likes')">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATpJREFUSEvFleFRwzAMhb9OQEeACYAJChuwAXQCGIVOUNiADYANYAIYASYo93JSTnWd2PFdiv+ksaL39J5kd8HMazEzPv9GcAPcAhem8BvYAC/2rvg9cGrvH8BziPfGpAqWwBYQQG692ebVQFwFrIEfj6cEquQc+AUegAj4CJxYosf1vZaUelx7lzmCO6teyZLeV2EfS10kzMVlpYqQiiflRQVKXsVgw4R5ke9AZ2Mk2BngGaBKWpaUf1lih31Ugtktcv/UPNmUNrFkmYZA9uiZbbIAfEz1vJ5AItBXG9fPcEAPrgofRZ2FWpIUXNMzeNCkYgrJKHg6RdHjGpIi+BhBSUkVeIlgiET7saF7nqejVvN/kNrll5umZRS8RoEXFEm0VwU+hSDapd/FynPXdemkNsVretAEfDQFf3ZDVxl/VBnpAAAAAElFTkSuQmCC"
          />
          <span>2</span>
        </div>
        <div class="nav__icon" @click="$router.push('/store')">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAORJREFUSEvtld0RATEUhb+twKiATtCBDujAqAAdKEEHlEAlRgc6YI5JdshKbnZNxsvmZTP5Od/Nyd3cisKtKqxPLmAOrICpC+gM7AB9ky0HcAAWERVBtimCBVDkRyewBk6uvwQ2rj9LncQCyIIJIPF9EKkiF+TyZl3jMBbg4XYMgXuwewxc3VhUJxcQW+cDyAZ4S6zkSM1LQ/fyaiHZR/QL4EM3BvDjlgXhfGP93wFtrWp9gh4QTVPrB4xZ19+BmVSmRXoxB6ZMesEN0Ev79S1SSVQFG3WESFzFqC6lXbMlm18c8ATvMDIZGBnHqwAAAABJRU5ErkJggg=="
          />
          <span>5</span>
        </div>
      </div>
      <main-button @click="$router.push(MainRoutes.MyAccount + '/dashboard')"
        >Account</main-button
      >
    </div>
  </nav>
</template>

<script>
import { MainRoutes } from "@/router/constants";
import MainButton from "./UI/MainButton.vue";
export default {
  name: "main-nav",
  components: { MainButton },
  data() {
    return {
      MainRoutes,
      drawer: false,
      items: [
        {
          title: "Main",
          value: "main",
        },
        {
          title: "All-Exclusive",
          value: "exclusive",
        },
        {
          title: "Docs",
          value: "docs",
        },
      ],
    };
  },
  computed: {
    isVisibleBurger() {
      return this.$vuetify.display.lg || this.$vuetify.display.xl;
    },
  },
};
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  &-left {
    display: flex;
    align-items: center;
  }
  &__select {
    outline: none;
    border: none;
    margin: 0 30px;
    padding: 0 8px;
  }
  &__link {
    margin: 0 30px;
    font-size: 15px;
    font-weight: 400;
  }
  &-right {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icons {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  &__icon {
    position: relative;
    margin: 0 15px;
    cursor: pointer;
    user-select: none;

    & > span {
      position: absolute;
      bottom: 0;
      right: -3px;
      background-color: #ff1d0e;
      border-radius: 50%;
      color: #fff;
      font-size: 8px;
      padding: 3px 6px;
    }
  }
}

.logo {
  margin-top: -12px;
  width: 135px;
  height: 48px;
  cursor: pointer;
}

@media (max-width: 815px) {
  .nav {
    justify-content: center;
  }
  .nav-left {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }

  .logo {
    width: 100px;
    height: max-content;
  }
}
</style>

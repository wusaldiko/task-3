<template>
  <div class="dashboard">
    <h4 class="dashboard__title">{{ title }}</h4>
    <ul class="categories">
      <li
        :class="{
          active: this.activeCategory === id,
        }"
        class="category"
        v-for="{ text, id, imageUrl, path } in list"
        :key="id"
        @click="this.activeCategory = id && $router.push(path)"
      >
        <img
          :src="imageUrl"
          class="category__image"
          :alt="text"
          v-if="imageUrl"
        />
        <p>{{ text }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeCategory: 1,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.dashboard {
  width: 100%;
  border-radius: 10px;

  &__title {
    padding: 17px 15px;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    background: #0fafe9;
    border-radius: 10px 10px 0px 0px;
  }

  .categories {
    display: flex;
    flex-direction: column;

    .category {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      border: 1px solid #ebebeb;
      padding: 24px 30px;
      transition: background 500ms;
      cursor: pointer;

      &__image {
        margin-right: 15px;
      }

      p {
        text-align: start;
      }
      &.active {
        background: rgba(15, 175, 233, 0.1);
      }
      &:hover {
        background: rgba(15, 175, 233, 0.1);
      }
    }
  }
}
</style>
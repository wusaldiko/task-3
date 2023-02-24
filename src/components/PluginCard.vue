<template>
  <div class="plugin-card">
    <img :src="imageUrl" :alt="title" class="plugin__img" />
    <h4 class="plugin__title">{{ title }}</h4>
    <p class="plugin__subtitle">{{ subtitle.slice(0, 30) }}</p>
    <span class="plugin__price">{{
      Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
        price
      )
    }}</span>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.plugin-card {
  border-radius: 12px;
  padding: 0 10px;
  text-align: start;
  border: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  transition: transform 250ms;
  cursor: pointer;

  .plugin__img {
    width: 100%;
    max-height: 255px;
    height: 100%;
    object-fit: contain;
  }

  .plugin__title {
    margin: 10px 0 1px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #0b0b0c;
  }

  .plugin__subtitle {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    line-height: 21px;
    color: #b9b9b9;
  }

  .plugin__price {
    margin-top: auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 27px;
    color: #0fafe9;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
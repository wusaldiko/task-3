<template>
  <div class="ad">
    <img
      src="@/views/Home/images/AdCardImage/ad.png"
      :alt="text"
      class="ad__image"
    />
    <p class="ad__text">{{ text }}</p>
    <p>ads via Carbon</p>
  </div>
</template>
<script>
export default {
  props: {
    imageUrl: [String],
    text: { type: String, required: true },
  },
};
</script>
<style lang="scss">
.ad {
  background: rgba(248, 197, 41, 0.12);
  border-radius: 10px;

  &__image {
    width: 100%;
    object-fit: cover;
  }

  &__text {
    color: #33334f !important;
  }
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    padding: 20px;
    color: #9F9F9F;
  }
}
</style>

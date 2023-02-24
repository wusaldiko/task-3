<template>
  <div class="contact">
    <div
      class="contact-left"
      :class="{
        'w-100':
          !this.$vuetify.display.md ||
          this.$vuetify.display.sm ||
          this.$vuetify.display.xs,
        'pa-10':
          !this.$vuetify.display.md ||
          this.$vuetify.display.sm ||
          this.$vuetify.display.xs,
      }"
    >
      <h3 class="contact-left__title">{{ content.title }}</h3>
      <p class="contact-left__text">
        {{ content.text }}
      </p>
      <div class="contact__buttons">
        <main-button class="contact__button-left">Contact us</main-button>
        <button class="contact__button-right">or see our portfolio</button>
      </div>
    </div>
    <div
      class="contact-right"
      v-if="
        this.$vuetify.display.md ||
        this.$vuetify.display.lg ||
        this.$vuetify.display.xl
      "
    >
      <img
        src="@/assets/images/contactImages/contactImage.png"
        :alt="content.title"
        class="contact__img"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  box-shadow: 1px 4px 44px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  background: rgba(15, 175, 233, 0.1);
  margin-bottom: 100px;

  &-left {
    width: 50%;
    padding: 80px;
    padding-right: 0;

    &__title {
      font-weight: 700;
      font-size: 35px;
      line-height: 44px;
      color: #0fafe9;
    }

    &__text {
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;
      color: #33334f;
      margin: 20px 0;
    }
  }

  &-right {
    overflow: hidden;
    width: 50%;
    .contact__img {
      width: 100%;
      height: 100%;
      scale: 1.1;
      object-fit: cover;
      margin-bottom: -30px;
    }
  }

  &__button-right {
    margin-left: 25px;
  }
}

@media (max-width: 405px) {
  .contact__buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .contact__button-right {
      margin: 0;
    }
  }
}
</style>

<template>
  <div class="subscribe">
    <h5 class="subscribe__title">Subscribe Newsletter</h5>
    <p class="subscribe__text">
      Get all the latest information on Events, Sales and Offers.
    </p>
    <form @click.prevent>
      <main-input
        placeholder="Email address"
        class="subscribe__input"
        v-model="email"
      />
      <main-button class="subscribe__button">Subscribe</main-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>
<style lang="scss" scoped>
.subscribe {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  padding: 38px 30px;
  border-radius: 10px;
  border: 1px solid #ebebeb;
  background: rgba(15, 175, 233, 0.1);
  box-shadow: 1px 4px 44px rgba(0, 0, 0, 0.03);

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 30px;
  }

  &__text {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 30px;
  }

  &__input {
    background: #ffffff;
    margin-bottom: 30px;
  }
}
</style>

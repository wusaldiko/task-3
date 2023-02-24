<template>
  <div class="analysis-card">
    <main-circle class="analysis-card__circle" :percent="percent" />
    <h5 class="analysis-card__title">{{ title }}</h5>
    <span>{{ progress }}</span>
    <p class="analysis-card__text">
      {{ text }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    percent: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.analysis-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  padding: 30px 25px;

  &__circle {
    margin-bottom: 30px;
    &::after {
      content: "+28%";
      top: 35%;
      left: 18%;
    }
  }

  &__title {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #33334f;
  }

  span {
    color: #0fafe9;
    font-weight: 700;
    font-size: 35px;
    line-height: 44px;
    margin: 15px 0;
  }

  &__text {
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #b9b9b9;
  }
}
</style>

<template>
  <div class="main-section">
    <div class="section-left">
      <h2 class="main-section__title">
        {{ title }}
      </h2>
      <main-search placeholder="e.g Responsive slider" />
      <p class="main-section__text">
        {{ text }}
      </p>
    </div>
    <div class="section-right">
      <img
        class="main-section__image"
        src="@/views/Home/images/header.png"
        alt="main section image"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: [String],
    text: [String],
    image: [String],
  },
};
</script>

<style lang="scss" scoped>
.main-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-section .section-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.main-section__image {
  height: 520px;
}

.main-section__title {
  text-align: start;
  font-weight: 700;
  font-size: 30px;
  line-height: 44px;
  margin-bottom: 45px;
}

.main-section__text {
  text-align: start;
}

@media (max-width: 1275px) {
  .main-section {
    flex-wrap: wrap;
    margin: 20px 0;
  }

  .main-section__image {
    height: 300px;
  }

  .main-section__title {
    font-size: 25px;
    line-height: 35px;
  }

  .section-left {
    width: 40%;
  }
}

@media (max-width: 925px) {
  .main-section {
    margin-top: 40px !important;
  }

  .main-section__title {
    font-size: 20px;
    line-height: 25px;
  }

  .main-section__image {
    height: 200px;
  }

  .main-section__text {
    text-align: center;
  }

  .section-left {
    align-items: center !important;
    margin: 0 20px;
    width: 100%;
  }
}

@media (max-width: 380px) {
  .main-section__search {
    transform: scale(0.8) !important;
  }
}
</style>

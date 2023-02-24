<template>
  <div class="info">
    <div
      class="info-content"
      v-for="{ imageUrl, title, text } in infoContents"
      :key="title"
    >
      <img :src="imageUrl" :alt="title" class="info__img" draggable="false" />
      <div class="info__item">
        <h5 class="info__title">{{ title }}</h5>
        <p class="info__text">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import SecurityImage from "@/views/Home/images/InfoIcons/security.png";
import SupportImage from "@/views/Home/images/InfoIcons/support.png";
import DoneImage from "@/views/Home/images/InfoIcons/done.png";
export default {
  data: () => ({
    infoContents: [
      {
        imageUrl: SecurityImage,
        title: "Security Assurance",
        text: `Our theme architecture is designed for maximize security and prevent
          malware, Dos Attack other.`,
      },
      {
        imageUrl: SupportImage,
        title: "Best Customer Support",
        text: `Need help? We're here for you! Do not worry we provide in depth answer.  `,
      },
      {
        imageUrl: DoneImage,
        title: "Great Quality Theme",
        text: `We will be responsible for delivering the best online user experience, which makes my role extremely important.`,
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 100%;
  padding: 30px;
  background: rgba(15, 175, 233, 0.1);

  &-content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 200px;
    .info__img {
      width: 50px;
      padding: 11px 13px;
      background: rgba(15, 175, 233, 0.1);
      border-radius: 10px;
      margin-right: 16px;
      margin-top: 10px;
    }

    .info__title {
      text-align: start;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #33334f;
      margin-bottom: 10px;
    }

    .info__text {
      text-align: start;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      color: #8786ad;
    }
  }
}

@media (max-width: 880px) {
  .info {
    &-content {
      max-width: 100%;
    }
  }
}
</style>

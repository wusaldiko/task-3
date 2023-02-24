<template>
  <circle-progress
    :percent="percent"
    :size="size"
    :border-width="lineWidth"
    :border-bg-width="lineWidth - 1"
    empty-color="rgba(15, 175, 233, 0.1)"
    :viewport="true"
    class="circle"
  />
</template>

<script>
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
export default {
  name: "main-circle",
  components: { CircleProgress },
  props: {
    percent: {
      type: Number,
      default: 50,
    },
    size: {
      type: Number,
      default: 120,
    },
    lineWidth: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style lang="scss" scoped>
.circle::after {
  content: "+28%";
  position: absolute;
  font-weight: 600;
  font-size: 30px;
  line-height: 39px;
  color: #489dff;
}
</style>

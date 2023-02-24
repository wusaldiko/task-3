<template>
  <button class="main-button">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "main-button",
};
</script>
<style lang="scss" scoped>
.main-button {
  background-color: var(--main-background-color);
  font-weight: 500;
  line-height: 22px;
  font-size: 15px;
  padding: 15px 25px;
  color: #fff;
  border-radius: 10px;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
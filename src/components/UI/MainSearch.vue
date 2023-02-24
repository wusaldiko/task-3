<template>
  <div class="search">
    <main-input class="search__input" :placeholder="placeholder" />
    <main-button class="search__button">Search</main-button>
  </div>
</template>
<script>
export default {
  name: "main-search",
  props: {
    placeholder: [String],
  },
};
</script>
<style lang="scss">
.search {
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
  
  &__input {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    color: #b9b9b9;
  }

  &__button {
    padding: 12px 25px !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}

@media (max-width: 360px){
  .search{
    transform: scale(0.8);
  }
}
</style>
<template >
  <div class="price-card">
    <div class="price-card__header">
      <p>Licence Price</p>
      <span class="total-price"
        >{{
          Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "EUR",
          }).format(89.99)
        }}
      </span>
    </div>
    <ul class="price-card__items">
      <li class="price-card__item">
        <label for="cxb" class="price-card__checkbox">
          <input type="checkbox" id="cxb" />
          <img src="@/views/SingleWebShop/images/cxb.svg" alt="" />
        </label>
        <p class="price-card__text">Quality checked by Ceyond</p>
        <span class="price">+ 55.50 €</span>
      </li>
    </ul>
    <ul class="cost-analysis">
      <li class="cost-analysis__item">
        <p class="cost-analysis__text">Discount code %</p>
        <span>- 3%</span>
      </li>
    </ul>
    <main-button>Add to cart</main-button>
  </div>
</template>
<script>
export default {
  name: "main-price",
};
</script>
<style lang="scss">
</style>
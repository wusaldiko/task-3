<template >
  <section class="client-list">
    <h1 class="client-list__title">
      Some of our 500 clients already using Dugilan
    </h1>
    <div class="clients">
      <img
        src="@/views/Home/images/clientsImage/acer.png"
        alt="acer"
        draggable="false"
        class="client__image"
      />
      <img
        src="@/views/Home/images/clientsImage/dell.png"
        alt="dell"
        draggable="false"
        class="client__image"
      />
      <img
        src="@/views/Home/images/clientsImage/linkedIn.png"
        alt="linkedIn"
        draggable="false"
        class="client__image"
      />
      <img
        src="@/views/Home/images/clientsImage/forbes.png"
        alt="forbes"
        draggable="false"
        class="client__image"
      />
      <img
        src="@/views/Home/images/clientsImage/facebook.png"
        alt="facebook"
        draggable="false"
        class="client__image"
      />
    </div>
  </section>
</template>

<style lang="scss">
.client-list {
  margin-bottom: 97px;
}
.client-list__title {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  color: #0fafe9;
}
.clients {
  margin: 30px 0 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.clients .client__image {
  width: 120px;
  height: 22px;
  object-fit: contain;
  cursor: pointer;
}
@media (max-width: 600px) {
  .clients {
    justify-content: center;
  }
  .clients .client__image {
    margin-top: 20px;
    width: 120px;
    height: 22px;
    object-fit: contain;
    cursor: pointer;
  }
}
</style>

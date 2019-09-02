<template>
  <div class="index-favorites">
    <h2 class="title">Favorites</h2>
    <div class="image">
      <picture>
        <source media="(min-width: 768px)" srcset="~/assets/images/image-1.jpg">
        <source media="(max-width: 767px)" srcset="~/assets/images/image-1-sp.jpg">
        <img src="~/assets/images/image-1.jpg" alt="" loading="lazy" class="image-item">
      </picture>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.index-favorites {
  padding: 70px 0;
}
.title {
  font-size: 30px;
  font-family: $suranna;
  letter-spacing: 0.1em;
}
.image {
  position: relative;
  margin-top: 70px;
}
.image-item {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>

<template>
  <div class="index-favorites">
    <h2 class="title">Favorites</h2>
    <div class="image">
      <img src="~/assets/images/image-1.jpg" alt="" class="image-item">
    </div>
    <div class="image">
      <img src="~/assets/images/image-2.jpg" alt="" class="image-item">
    </div>
    <div class="image">
      <img src="~/assets/images/image-3.jpg" alt="" class="image-item">
    </div>
    <div class="image">
      <img src="~/assets/images/image-4.jpg" alt="" class="image-item">
    </div>
    <div class="image">
      <img src="~/assets/images/image-5.jpg" alt="" class="image-item">
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

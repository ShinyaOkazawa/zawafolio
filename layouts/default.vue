<template>
  <div class="container" :style="`background-image:url(${containerBackgroundImage})`">
    <div class="container-inner">
      <TheGlobalNav />
      <nuxt />
      <TheGlobalHeader />
    </div>
  </div>
</template>

<script>
import TheGlobalNav from '~/components/common/modules/TheGlobalNav'
import TheGlobalHeader from '~/components/common/modules/TheGlobalHeader'
import containerBackgroundImage from '~/assets/images/bg-repeat-zawa.png'

export default {
  data() {
    return {
      containerBackgroundImage: containerBackgroundImage
    }
  },
  components: {
    TheGlobalNav,
    TheGlobalHeader
  }
}
</script>

<style scoped lang="scss">
.container {
  background-size: 150px auto;
}
.container-inner {
  display: flex;
  max-width: 1024px;
  height: 100vh;
  margin: auto;
}
</style>

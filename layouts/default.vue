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
  components: {
    TheGlobalNav,
    TheGlobalHeader
  },
  data() {
    return {
      containerBackgroundImage: containerBackgroundImage
    }
  },
  mounted() {
    const p7 = window.p7
    p7.init('9372b78735b24486af755e32ded08860', {
      mode: 'native',
      subscribe: 'auto'
    })
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

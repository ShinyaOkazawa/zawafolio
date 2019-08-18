<template>
  <div class="container">
    <TheGlobalNav />
    <nuxt />
    <TheGlobalHeader/>
  </div>
</template>

<script>
import TheGlobalNav from '~/components/common/modules/TheGlobalNav'
import TheGlobalHeader from '~/components/common/modules/TheGlobalHeader'
export default {
  components: {
    TheGlobalNav,
    TheGlobalHeader
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  max-width: 1024px;
  height: 100vh;
  margin: auto;
}
</style>

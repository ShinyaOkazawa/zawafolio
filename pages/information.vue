<template>
  <PageContainer>
    <h2 class="title">About Me</h2>
  </PageContainer>
</template>

<script>
import PageContainer from '~/components/common/PageContainer'
export default {
  components: {
    PageContainer
  },
  created() {
    this.$store.commit('updateCurrentPageName', this.$route.name)
  }
}
</script>

<style scoped lang="scss">
</style>

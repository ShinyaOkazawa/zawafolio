<template>
  <PageContainer>
    <IndexHero />
  </PageContainer>
</template>

<script>
import PageContainer from '~/components/common/PageContainer'
import IndexHero from '~/components/index/IndexHero'
export default {
  components: {
    PageContainer,
    IndexHero
  },
  created() {
    // console.log(this.$route)
    this.$store.commit('updateCurrentPageName', this.$route.name)
  }
}
</script>

<style scoped lang="scss">
</style>

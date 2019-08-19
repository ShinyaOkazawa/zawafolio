<template>
  <PageContainer>
    <IndexHero />
    <IndexFavorites />
  </PageContainer>
</template>

<script>
import PageContainer from '~/components/common/PageContainer'
import IndexHero from '~/components/index/IndexHero'
import IndexFavorites from '~/components/index/IndexFavorites'
export default {
  components: {
    PageContainer,
    IndexHero,
    IndexFavorites
  },
  created() {
    // console.log(this.$route)
    this.$store.commit('updateCurrentPageName', this.$route.name)
  }
}
</script>

<style scoped lang="scss">
</style>

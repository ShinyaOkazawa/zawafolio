<template>
  <div class="the-global-header">
    <div class="inner">
      <p class="logo">
        ZAWAfolio
      </p>
      <h1 class="current">
        {{ currentPageName }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentPageName: function() {
      return this.$store.state.currentPageName === 'index'
        ? 'home'
        : this.$store.state.currentPageName
    }
  }
}
</script>

<style scoped lang="scss">
.the-global-header {
  flex-shrink: 0;
  position: relative;
  width: 40px;
  height: 100%;

  @include breakpoint(pc) {
    width: 100px;
  }
}
.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 100%;
  width: 100vh;
  height: 40px;
  padding: 0 30px;
  border-top: 1px dotted $base-color;
  border-bottom: 5px solid $base-color;
  transform-origin: bottom left;
  transform: rotate(-90deg);

  @include breakpoint(pc) {
    height: 100px;
    padding: 0 50px;
  }
}
.logo {
  font-size: 24px;
  font-family: $suranna;
  letter-spacing: 0.1em;

  @include breakpoint(pc) {
    font-size: 30px;
  }
}
</style>

<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.page-container {
  flex-grow: 1;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow-y: auto;
  max-width: 1280px;
  margin: auto;
  padding: 0 100px;
}
</style>

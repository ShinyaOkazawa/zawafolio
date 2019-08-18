<template>
  <div class="the-global-nav">
    <ul class="nav">
      <li class="nav-item">
        <NuxtLink to="information">information</NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink to="/">home</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.the-global-nav {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  border-left: 1px dotted $base-color;
  border-right: 2px solid $base-color;
}
.nav {
  display: flex;
  transform: rotate(-90deg);
}
.nav-item {
  & + & {
    margin-left: 30px;
  }
}
</style>

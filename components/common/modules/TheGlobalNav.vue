<template>
  <div class="the-global-nav">
    <div class="inner">
      <ul class="nav">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link">home</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.the-global-nav {
  flex-shrink: 0;
  position: relative;
  width: 100px;
  height: 100%;
  border-left: 1px dotted $base-color;
  border-right: 2px solid $base-color;
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 100%;
  width: 100vh;
  height: 100px;
  transform-origin: bottom left;
  transform: rotate(-90deg);
}
.nav {
  display: flex;
}
.nav-item {
  & + & {
    margin-left: 30px;
  }
}
.nav-link {
  letter-spacing: 0.05em;
}
</style>

<template>
  <div class="the-global-nav">
    <div class="inner">
      <ul class="nav">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link">
            home
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.the-global-nav {
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
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 100%;
  width: 100vh;
  height: 40px;
  border-top: 1px dotted $base-color;
  border-bottom: 2px solid $base-color;
  transform-origin: bottom left;
  transform: rotate(-90deg);

  @include breakpoint(pc) {
    height: 100px;
  }
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

<template>
  <div class="index-hero">
    <div class="contents">
      <h1 class="title">
        ZAWAfolio
      </h1>
      <ul class="nav">
        <li class="nav-item"><a href="https://qiita.com/ShinyaOkazawa" target="_target">qiita</a></li>
        <li class="nav-item"><a href="https://github.com/ShinyaOkazawa" target="_target">github</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.index-hero {
  position: relative;
  height: 100vh;
}
.contents {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  font-size: vh-sp(40);
  font-family: $suranna;
  letter-spacing: 0.2em;

  @include breakpoint(pc) {
    font-size: vw(50);
  }
}
.nav {
  display: flex;
  margin-top: 20px;
}
.nav-item {
  & + & {
    margin-left: 30px;
  }
}
</style>

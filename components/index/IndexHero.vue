<template>
  <div class="index-hero">
    <div class="portrait">
      <IndexPortrate class="portrait-item" />
    </div>
    <div class="contents">
      <p class="title">
        <span class="title-txt">Hello.</span>
        <span class="title-txt">My name is <strong class="title-name">ZAWA</strong>.</span>
        <span class="title-txt">Web Developer</span>
      </p>
      <ul class="nav">
        <li class="nav-item">
          <a href="https://qiita.com/ShinyaOkazawa" target="_target" class="nav-link">qiita</a>
        </li>
        <li class="nav-item">
          <a href="https://github.com/ShinyaOkazawa" target="_target" class="nav-link">GitHub</a>
        </li>
        <li class="nav-item">
          <a href="https://www.wantedly.com/users/5135740" target="_target" class="nav-link">Wantedly</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IndexPortrate from '~/assets/images/portrait.svg'
export default {
  components: {
    IndexPortrate
  },
}
</script>

<style scoped lang="scss">
.index-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-size: contain;
}
.portrait {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.portrait-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.contents {
  position: relative;
  z-index: 1;
}
.title {
  font-family: $suranna;
  letter-spacing: 0.05em;
  line-height: 1.2;
}
.title-txt {
  display: block;
  font-size: 26px;

  @include breakpoint(pc) {
    font-size: 40px;
  }
}
.title-name {
  font-size: 30px;
  letter-spacing: 0.1em;

  @include breakpoint(pc) {
    font-size: 40px;
  }
}
.nav {
  display: flex;
  flex-wrap: wrap;
}
.nav-item {
  margin: 15px 15px 0 0;

  @include breakpoint(pc) {
    margin: 30px 30px 0 0;
  }
}
.nav-link {
  letter-spacing: 0.05em;
}
</style>

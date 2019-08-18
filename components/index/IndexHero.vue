<template>
  <div class="index-hero">
    <div class="portrait">
      <img src="~/assets/images/portrait.svg" alt="" class="portrait-item">
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
  object-fit: contain;
}
.title {
  font-size: vh-sp(40);
  font-family: $suranna;
  letter-spacing: 0.05em;
  line-height: 1.2em;
}
.title-txt {
  display: block;

  @include breakpoint(pc) {
    font-size: vw(40);
  }
}
.title-name {
  font-size: vw(40);
  letter-spacing: 0.1em;
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
.nav-link {
  letter-spacing: 0.05em;
}
</style>

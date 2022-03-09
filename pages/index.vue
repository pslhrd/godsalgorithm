<template>
  <section class="home">
    <Menu />
    <WebGL />
    <div class="home-background">
      <div>
        <svg width="900" height="900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="430" cy="450" r="400" stroke="white" stroke-opacity="0.02" stroke-width="4" stroke-dasharray="20 20"/>
        </svg>
      </div>
      <div class="large"></div>
    </div>
  </section>
</template>

<script setup>
  const { client } = usePrismic()
  const { data: home } = await useAsyncData('home', () => client.getSingle('homepage'))
  const { data: menu } = await useAsyncData('menu', () => client.getSingle('menu'))
</script>

<style lang="scss" scoped>

.home {
  width: 100%;
  min-height: 100vh;
  background-color: #120720;

  &-background {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%)
    }
    .large {
      border-radius: 100%;
      border: 20px solid white;
      width: 80vw;
      height: 80vw;
      opacity: 0.02;
    }
  }
}
</style>
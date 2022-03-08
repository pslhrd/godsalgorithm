<template>
  <section class="home">
    <Menu />
    <WebGL />
    <div class="home-background">
      <div>
        <svg width="600" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="150" stroke="white" stroke-opacity="0.06" stroke-width="2" stroke-dasharray="20 20"/>
        </svg>
      </div>
      <div>
        <svg width="800" height="800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="400" cy="400" r="300" stroke="white" stroke-opacity="0.02" stroke-width="10"/>
        </svg>
      </div>
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
    position: absolute;
    top: 0;
    left: 0;
    div {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%)
    }
  }
}
</style>
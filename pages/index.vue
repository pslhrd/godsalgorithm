<template>
  <section class="home">
    <Menu />
    <WebGL />
  </section>
</template>

<script setup>
  const { client } = usePrismic()
  const { data: home } = await useAsyncData('home', () => client.getSingle('homepage'))
  const { data: menu } = await useAsyncData('menu', () => client.getSingle('menu'))
</script>

<style lang="scss" scoped>

.content {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 4.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d3d3d3;
}

</style>
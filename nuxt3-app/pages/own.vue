<template>
  <Head>
  <Title>God's Algorithm [V2.0]</Title>
  </Head>
  <Menu :items="menu" />
  <section class="content">
    <prismic-rich-text :field="own.data.title" />
  </section>
</template>

<script setup>
const { client } = usePrismic()
const { data: own } = await useAsyncData('own', () => client.getSingle('own'))
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
}

</style>
<template>
  <Head>
  <Title>God's Algorithm [V2.0]</Title>
  </Head>
  <Menu :items="menu" />
  <section class="content">
    <prismic-rich-text :field="hear.data.title" />
  </section>
</template>

<script setup>
const { client } = usePrismic()
const { data: hear } = await useAsyncData('hear', () => client.getSingle('hear'))
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
  background-color: lightgrey;
}

</style>
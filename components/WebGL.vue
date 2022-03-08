<template>
    <section ref="container" class="webgl-wrapper"></section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { App } from '~~/webgl/index'

onMounted(() => {
    const container = document.querySelector('.webgl-wrapper')
    const app = new App(container)
    app.init()
})

onUnmounted(() => {
    // app.destroy()
})
</script>

<style lang="scss">
  .webgl-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
</style>
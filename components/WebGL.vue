<template>
    <section ref="container" class="webgl-wrapper"></section>
</template>

<script setup>
import { store } from '/store.js'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { App } from '~~/webgl/index'

onMounted(() => {
    
    const container = document.querySelector('.webgl-wrapper')
    const app = new App(container)
    console.log(container)
    app.init()
    gsap.from(app.camera.position, {
      y: -20,
      duration: 3,
      ease: 'power4.out'
    })
    gsap.from(app.reference.position, {
      y: -20,
      duration: 3,
      ease: 'power4.out'
    })

    watch(store, (oldState, newState) => {
      if (store.state === 0) {
        gsap.to(app.camera.position, {
          y: 15,
          duration: 3,
        })
      }
      if (store.state === 1) {
        gsap.to(app.camera.position, {
          y: 14,
          duration: 3,
        })
      }
      if (store.state === 2) {
        gsap.to(app.camera.position, {
          y: 18,
          duration: 3
        })
      }
      if (store.state === 3) {
        gsap.to(app.camera.position, {
          y: 16,
          duration: 3
        })
      }
      if (store.state === 4) {
        gsap.to(app.camera.position, {
          y: 20,
          duration: 3
        })
      }
    })
})

onUnmounted(() => {
    this.app.destroy()
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
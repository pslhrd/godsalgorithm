<template>
  <section class="own">
    <div class="own-title">
      <prismic-rich-text :field="own.data.title" />
    </div>
  </section>
</template>

<script setup>
import { store } from '/store.js'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const { client } = usePrismic()
const { data: own } = await useAsyncData('own', () => client.getSingle('own'))

definePageMeta({
  pageTransition: {
    name: 'own',
    appear: true,
    css: false,
    mode: 'out-in',
    onEnter: (el, done) => {
      let title = el.querySelector('div')
      gsap.from(title, {opacity:0, y:'100%', duration:1.2, ease:'power4.out'})
      setTimeout(() => {done()}, 1200)
    },
    onAppear: (el, done) => {
      console.log('Appeared', el)
    },
    onLeave: (el, done) => {
      let title = el.querySelector('div')
      gsap.to(title, {opacity:0, y:'-100%', duration:0.8, ease:'power4.out'})
      setTimeout(() => {done()}, 800)
      
    },
  }
})

  onMounted(() => {
    store.state = 1
  })
</script>

<style lang="scss" scoped>
.own {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 4.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
}
</style>
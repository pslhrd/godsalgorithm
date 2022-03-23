<template>
  <section class="hear">
    <div class="hear-title">
      <prismic-rich-text :field="hear.data.title" />
    </div>
  </section>
</template>

<script setup>
import { store } from '/store.js'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const { client } = usePrismic()
const { data: hear } = await useAsyncData('hear', () => client.getSingle('hear'))

definePageMeta({
  pageTransition: {
    name: 'hear',
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
    store.state = 3
    console.log(store.state)
  })
</script>

<style lang="scss" scoped>
.hear {
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
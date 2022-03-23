<template>
  <section class="see">
    <div class="see-title">
      <prismic-rich-text :field="see.data.title" />
    </div>
  </section>
</template>

<script setup>
import { store } from '/store.js'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const { client } = usePrismic()
const { data: see } = await useAsyncData('see', () => client.getSingle('see'))

definePageMeta({
  pageTransition: {
    name: 'see',
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
    store.state = 4
    console.log(store.state)
  })
</script>

<style lang="scss" scoped>

.see {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 4.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
}

</style>
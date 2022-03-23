<template>
  <section class="home">
    <section class="navigation">
      <div class="navigation-item">
        <NuxtLink to="/hear">
          <span class="title">EAR</span>
        </NuxtLink>
      </div>
      <div class="navigation-item">
        <NuxtLink to="/own">
          <span class="title">OWN</span>
        </NuxtLink>
      </div>
      <div class="navigation-item">
        <NuxtLink to="/touch">
          <span class="title">TOUCH</span>
        </NuxtLink>
      </div>
    </section>
    <div class="text-background">
      <span>GOD'S</span>
      <span>ALGORITHM</span>
      <span class="version">[V2.0]</span>
    </div>
    <div class="home-background">
      <div class="large"></div>
    </div>
  </section>
</template>

<script setup>
import { store } from '/store.js'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const { client } = usePrismic()
const { data: home } = await useAsyncData('home', () => client.getSingle('homepage'))
const { data: menu } = await useAsyncData('menu', () => client.getSingle('menu'))

console.log(store.state)

  onMounted(() => {
    store.state = 0
    console.log(store.state)
  })
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #120720;

  .navigation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    z-index: 2;

    &-item {
      position: absolute;
      width: 140px;
      height: 140px;
      border: 1px solid rgba(255, 255, 255, 0.205);
      color: white;
      font-size: 14px;
      font-family: 'Monument Grotesk Bold';
      transition: all 0.2s cubic-bezier(.33,.12,0,.98);
      opacity: 0;

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.63);
        background-color: rgba(255, 255, 255, 0.103);
      }

      &:nth-child(1) {
        left: 13vw;
        top: 15.5vw;
      }

      &:nth-child(2) {
        right: 23.5vw;
        top: 17vw;
      }

      &:nth-child(3) {
        right: 30vw;
        bottom: 10vw;
      }

      
      span {
        position: absolute;
        left: 20px;
        bottom: 20px;
      }

      a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .text-background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100vh;
    font-size: 10vw;
    line-height: 9vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;   
    font-family: 'Monument Grotesk Heavy';  

    span {
      display: block;
      opacity: 0;
      transform: translateY(100%);
    }

    .version {
      font-size: 5vw;
      line-height: 7vw;
      padding-top: 1vw;
      font-family: 'Pixter';
    }
  }

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
      transform: translate(-50%, -50%);
      transform-origin: center center;
      opacity: 1;
    }
    
    .large {
      position: absolute;
      left: 50%;
      top: 50%;
      border-radius: 100%;
      border: 20px solid white;
      width: 80vw;
      height: 80vw;
      opacity: 0;
      transform-origin: center center;
      transform: translate(-50%, -50%) scale(2);
    }
  }
}
</style>
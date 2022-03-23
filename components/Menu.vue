<template>
  <header>
    <!-- <div class="wrapper" @click="menuOpen = !menuOpen">
      <div class="logo">GOD'S ALGORITHM</div>
      <div class="menuOpen">
        <div class="menuOpen-rect"></div>
        <div class="menuOpen-rect"></div>
        <div class="menuOpen-rect"></div>
        <div class="menuOpen-rect"></div>
      </div>
    </div> -->
    <ul>
      <li class="links"><NuxtLink to="/">HOME</NuxtLink></li>
      <li class="links"><NuxtLink to="/own">OWN</NuxtLink></li>
      <li class="links"><NuxtLink to="/hear">HEAR</NuxtLink></li>
      <li class="links"><NuxtLink to="/touch">TOUCH</NuxtLink></li>
      <li class="links"><NuxtLink to="/see">SEE</NuxtLink></li>
    </ul>
  </header>
  <Transition @enter="onEnter" @leave="onLeave">
    <section class="menu" ref="menu" v-if="menuOpen">
      <ul>
        <li class="links"><NuxtLink to="/">HOME</NuxtLink></li>
        <li class="links"><NuxtLink to="/own">OWN</NuxtLink></li>
        <li class="links"><NuxtLink to="/hear">HEAR</NuxtLink></li>
        <li class="links"><NuxtLink to="/touch">TOUCH</NuxtLink></li>
      </ul>
      <div class="menu-background">
        <div class="wrapper">
          <div class="menu-background-corner"></div>
          <div class="menu-background-corner"></div>
          <div class="menu-background-corner"></div>
          <div class="menu-background-corner"></div>
        </div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
        <div class="menu-background-rect"></div>
      </div>
    </section>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { useRoute } from 'vue-router'

let menu = ref('menu')
const menuOpen = ref(false)

function onEnter() {
  menu.value.style.pointerEvents = 'all'
  gsap.to('.menu-background-rect', {
    opacity:1,
    duration: 0.2,
    stagger: {
      grid: [4,3],
      from: 'random',
      amount: 0.4,
    }
  })
  gsap.to('.links', {
    opacity: 1,
    duration: 0.2,
    stagger: {
      from: 'random',
      amount: 0.2,
    }
  })
  gsap.to('.menu-background .wrapper', {
    scale: 1,
    duration: 2,
    ease: 'expo.out'
  })
  gsap.to('.menu-background-corner', {
    opacity: 1,
    duration: 1.2,
    ease: 'power4.out'
  })
}

function onLeave() {
  gsap.set('.menu-background .wrapper', {scale: 1.2})
  gsap.set('.menu-background-corner', {opacity: 0, duration: 0.2})
  gsap.to('.menu-background-rect', {
    opacity: 0,
    duration: 0.2,
    stagger: {
      grid: [4,3],
      from: 'random',
      amount: 0.4
    }
  })
  gsap.to('.links', {
    opacity:0,
    duration: 0.2,
    stagger: {
      from: 'random',
      amount: 0.2
    }
  })
}

// onMounted(() => {
//   gsap.to('.logo, .menuOpen', {
//     opacity: 1,
//     duration: 1.2,
//     ease: 'power4.out',
//     stagger: 0.2
//   })
// })
</script>

<style lang="scss" scoped>

header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  color: white;
  font-family: 'Monument Grotesk Bold';
  font-size: 14px;
  padding-top: 40px;

  .logo, .menuOpen {
    opacity: 0;
  }

  .logo {
    display: block;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;

      .menuOpen {
        width: 16px;
        height: 16px;
        transform: rotate(135deg);
      }
    }
  }

  .menuOpen {
    position: relative;
    margin-top: 10px;
    width: 12px;
    height: 12px;
    transform-origin: center center;
    transition: transform 1.2s cubic-bezier(.33,.12,0,.98), width 1.2s cubic-bezier(.33,.12,0,.98), height 1.2s cubic-bezier(.33,.12,0,.98);

    &-rect {
      position: absolute;
      width: 4px;
      height: 4px;
      background-color: white;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        right: 0;
        top: 0;
      }

      &:nth-child(3) {
        left: 0;
        bottom: 0;
      }
      
      &:nth-child(4) {
        right: 0;
        bottom: 0;
      }
    }
  }
}

.menu {
  position: fixed;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  flex-direction: column;
  font-family: 'Monument Grotesk Heavy';
  text-align: center;
  z-index: 30;
  pointer-events: none;

  .links {
    opacity: 0;
  }

  ul {
    position: relative;
    z-index: 30;
  }

  a {
    width: 100%;
    height: 100%;
    font-size: 8vw;
    line-height: 8vw;
  }

  li {
    color: white;
    display: block;
  }

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    z-index: 29;

    .wrapper {
      position: absolute;
      width: 100%;
      min-height: 100vh;
      transform: scale(1.2);
      transform-origin: center center;
    }

    &-corner {
      position: absolute;
      width: 100px;
      height: 100px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      border-left: 1px solid rgba(255, 255, 255, 0.4);
      opacity: 0;

      &:nth-child(1) {
        top: 100px;
        left: 100px;
        transform: rotate(-90deg);
      }

      &:nth-child(2) {
        top: 100px;
        right: 100px;
        transform: rotate(0deg);
      }

      &:nth-child(3) {
        bottom: 100px;
        right: 100px;
        transform: rotate(90deg);
      }

      &:nth-child(4) {
        bottom: 100px;
        left: 100px;
        transform: rotate(-180deg);
      }
    }

    &-rect {
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
    }
  }
}
</style>
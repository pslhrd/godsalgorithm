<template>
  <section class="menu">
    <ul>
      <li class="links"><a href="/">Homepage</a></li>
      <li class="links"><a href="/about">About</a></li>
      <li class="links"><a href="/hear">hear</a></li>
      <li class="links"><a href="/own">Own</a></li>
    </ul>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.menu {
  z-index: 10;
  margin-top: 30px;
  position: fixed;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  li {
    display: inline-block;
    padding: 5px;
    margin: 5px
  }
}
</style>
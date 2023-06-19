<script setup>
import LeftMenu from './components/LeftMenu.vue'
</script>

<template>
  <header>
    <div class="left">
      <LeftMenu :menus="menus" :text="'主页'" />
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}
header .left {
    display: flex;
    /* place-items: flex-start; */
    flex-wrap: wrap;
  }
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
 
}
</style>

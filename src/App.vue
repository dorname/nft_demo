<script setup>
import LeftMenu from './components/LeftMenu.vue'
import RightMain from './components/RightMain.vue'
const rawHtml = '<span style="color: red">This should be red.</span>'
</script>

<template>
  <body class="mainBody">
      <LeftMenu :textMenu='"House"'/>
      <RightMain />
      <!-- <p><span v-html="rawHtml"></span></p> -->
  </body>
</template>

<style scoped>
body .mainBody{
  display: flex;
  /* flex-direction: column; */
}
/* .right{
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 250, 246);
  flex-grow: 1;
}
.right .right-top{
  background-color: yellow;
  flex-grow: 1;
}
.right .right-down{
  background-color: red;
  height: 10%;
} */
/* header {
  line-height: 1.5;
} */
/* 
header .left {
  display: flex;
  align-self: start;
  place-items: flex-start; 
  flex-wrap: wrap;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

} */
</style>

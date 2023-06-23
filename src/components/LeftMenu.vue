<script setup>
import Icon from "./ICON.vue"
const props  = defineProps({
  menus: {
    type: Array,
    required: false
  },
  style:{
    type:Object,
    required:false
  }
})
// const text = props.textMenu;
const menus = props.menus;
const style = props.style;
// const style = {
//   color:"white",
//   width:"100px"
// }
// const handler = function(){
//   alert("hhhhaa");
// }
</script>
<template>
    <div class="menus">
      <!-- <Icon :icon-name="'House'" :color="'white'" :size="'25'" :style="style"/> -->
      <span class="menuspan" v-for="menu in menus" :style="style">
      <Icon :icon-name="menu.name" :color="menu.color" :size="menu.size" :handler="menu.handler" />
      </span>
      <!-- <Icon :icon-name="'Search'" :color="'white'" :size="'25'" /> -->
    </div>    
</template>

<style scoped>
.menus {
  background-color: black;
  display: flex;
  flex-direction: column;
}
</style>
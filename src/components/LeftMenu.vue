<script setup>
import Icon from "./ICON.vue"
const props  = defineProps({
  menus: {
    type: Array,
    required: false
  },
  textMenu:{
    type: String,
    required: true
  }
})
const text = props.textMenu;
// const style = {
//   color:"white",
//   width:"100px"
// }
const handler = function(){
  alert("hhhhaa");
}
</script>
<template>
    <div class="menus">
      <!-- <Icon :icon-name="'House'" :color="'white'" :size="'25'" :style="style"/> -->
      <Icon :icon-name="'House'" :color="'white'" :size="'25'" :handler="handler"/>
      <Icon :icon-name="'Search'" :color="'white'" :size="'25'" />
    </div>    
</template>

<style scoped>
.menus {
  background-color: black;
  display: flex;
  flex-direction: column;
}
</style>
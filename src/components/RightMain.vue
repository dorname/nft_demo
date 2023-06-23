<script setup>
import RightTop from './right/RightTop.vue'
import RightDown from './right/RightDown.vue'
</script>
<template>
<div class="right">
    <RightTop />
    <RightDown />
</div>
</template>
<style scoped>
.right{
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 250, 246);
  flex-grow: 1;
}
</style>
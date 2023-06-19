<script setup>
defineProps({
  menus: {
    type: Array,
    required: false
  },
  text:{
    type: String,
    required: true
  }
})
</script>
<template>
    <div class="menus">
      <button id="home" type="button">{{ text }}</button>
    </div>    
</template>
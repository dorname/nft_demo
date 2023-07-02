<script setup>
import Grid from '../Grid.vue'
const columns = [
      { label: 'ID', property: 'id',style:"color:blue" },
      { label: 'Name', property: 'name' },
      { label: 'Age', property: 'age' },
    ];
const tableData = [{
    id: '12987122',
    name:'jack',
    age: 12
}]
</script>    
<template>
    <Grid :columns="columns" :table-data="tableData" />
</template>
<style scoped>
/* .right-top {
    background-color: yellow;
    flex-grow: 1;
} */
</style>

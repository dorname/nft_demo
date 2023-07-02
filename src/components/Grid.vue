<script setup>
import Column from "./Column.vue"
defineProps({
    tableData: {
        type: Array,
        required: true
    },
    columns: {
        type: Array,
        required: false
    }
});
</script>
<template>
    <el-container>
        <el-main>
            <el-table :data="tableData" style="width: 100%">
                <Column v-for="(column, index) in columns" :key="index" :propertys ="column" />
            </el-table>
        </el-main>
    </el-container>
</template>
<style scoped>
/**
* 列表组件样式调整定义
*/
/* :deep(.el-table .el-table__cell) {
    color:black !important;
    background-color: blue !important;
} */
/* :deep(.el-table .test) {
    color:black !important;
    background-color: blue !important;
} */
</style>
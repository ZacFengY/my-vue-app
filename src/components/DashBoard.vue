<template>
  <el-progress type="dashboard" :percentage="state.percentage" :color="colors"></el-progress>
</template>

<script setup>
import { reactive } from 'vue'

const state = reactive({
  percentage: 100,
})
</script>

<style>
</style>
<template>
  <div class="home">
    <div class="card-row">
      <el-card class="card">
        <dash-board></dash-board>
      </el-card>
      <div class="w20"></div>
      <el-card class="card"></el-card>
    </div>
    <div class="h20"></div>
    <div class="card-row">
      <div class="card-row">
        <el-card class="card"></el-card>
        <div class="w20"></div>
        <el-card class="card"></el-card>
      </div>
      <div class="w20"></div>
      <el-card class="card"></el-card>
    </div>
  </div>
</template>

<script setup>
import DashBoard from 'comps/DashBoard.vue'
</script>

<style lang='scss' scope>
@import 'styles/home.scss';
</style>
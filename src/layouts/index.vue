<template>
  <div class="app-wrapper">
    <aside class="">
      <nav>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo menu"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template #title>分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template #title>选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>导航二</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <template #title>导航三</template>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <template #title>导航四</template>
          </el-menu-item>
        </el-menu>
      </nav>
    </aside>
    <article>
      <header>
        <el-card class="box-card">
          <div class="">
            <router-link to="/">to home </router-link>
            <router-link to="/about" style="margin-left: 20px">to about</router-link>
            <router-link to="/test" style="margin-left: 20px">to test</router-link>
          </div>
        </el-card>
      </header>
      <section>
        <router-view></router-view>
      </section>
      <footer></footer>
    </article>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
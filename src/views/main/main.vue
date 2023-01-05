<!--
 * @Author: hqk
 * @Date: 2022-12-21 19:12:58
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-04 15:40:30
 * @Description:
-->
<script setup lang="ts">
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import useMainStore from '@/store/main/main'

const mainStore = useMainStore()
const { isMenuExpand } = storeToRefs(mainStore)
</script>

<template>
  <el-container class="main h-full">
    <el-aside :width="!isMenuExpand ? '210px' : '64px'" class="cursor-pointer bg-[#001529] transition-width transition-duration-300">
      <main-menu />
    </el-aside>
    <el-container>
      <el-header class="border-b-1 border-[#eee]">
        <main-header />
      </el-header>
      <el-main class="bg-[#f0f2f5]">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="less">
.el-aside {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-header {
  --el-header-padding: 0;
  --el-header-height: 48px;
}
</style>

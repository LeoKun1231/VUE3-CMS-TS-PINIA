<!--
 * @Author: hqk
 * @Date: 2022-12-21 19:12:58
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-22 14:36:27
 * @Description:
-->
<script setup lang="ts">
import { useCounterStore } from '@/store/modules/counter'
import '@/services'
const counterStore = useCounterStore()

const handleClick = () => {
  counterStore.incrementCount(5)
}
</script>

<template>
  <div class="main">
    <h1>APP{{ counterStore.count }}</h1>
    <div>
      <el-button type="primary" @click="handleClick">+5</el-button>
    </div>
    <router-link to="/main">
      <el-button type="primary">main</el-button>
    </router-link>
    <router-link to="/login">
      <el-button type="success">login</el-button>
    </router-link>
  </div>
</template>
<style scoped lang="less"></style>

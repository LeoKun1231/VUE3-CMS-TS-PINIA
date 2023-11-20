<!--
 * @Author: hqk
 * @Date: 2022-12-20 22:08:22
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-15 09:40:10
 * @Description:
-->
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = ref(zhCn)
</script>

<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>
<style scoped lang="less">
.app {
  width: 100vw;
  height: 100vh;
}
</style>

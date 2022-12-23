<!--
 * @Author: hqk
 * @Date: 2022-12-21 19:12:48
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 13:13:28
 * @Description:
-->
<script setup lang="ts">
import LoginPane from './c-cpns/login-pane.vue'
</script>

<template>
  <div class="login flex justify-center items-center !bg-no-repeat !bg-center">
    <login-pane />
  </div>
</template>
<style scoped lang="less">
.login {
  height: 100%;
  width: 100%;
  background: url('@/assets/img/login-bg.svg');
}
</style>

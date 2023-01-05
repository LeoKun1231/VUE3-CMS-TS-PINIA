<!--
 * @Author: hqk
 * @Date: 2022-12-21 19:12:48
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-26 11:51:59
 * @Description:
-->
<script setup lang="ts">
import LoginPane from './c-cpns/login-pane.vue'
</script>

<template>
  <div class="login flex justify-center items-center !bg-no-repeat !bg-center">
    <login-pane class="animate-bounce-in animate-duration-1000" />
  </div>
</template>
<style scoped lang="less">
.login {
  height: 100%;
  width: 100%;
  background: url('@/assets/img/login-bg.svg');
}
</style>

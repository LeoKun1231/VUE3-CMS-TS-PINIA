<!--
 * @Author: hqk
 * @Date: 2022-12-26 12:28:38
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-04 15:39:52
 * @Description:
-->
<script setup lang="ts">
import HeaderInfo from './c-cpns/header-info.vue'
import HeaderBreadcrumb from './c-cpns/header-breadcrumb.vue'
</script>

<template>
  <div class="header px-4 h-full flex justify-between items-center">
    <header-breadcrumb />
    <header-info />
  </div>
</template>
<style scoped lang="less"></style>

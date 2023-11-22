<!--
 * @Author: hqk
 * @Date: 2022-12-23 12:12:21
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-16 13:19:46
 * @Description:
-->
<script setup lang="ts">
import PaneAccount from './pane-account.vue'
import PaneCode from './pane-code.vue'

const activeTabName = ref('account')
</script>

<template>
  <div class="login-pane mb-20">
    <h1 class="login-pane__title font-bold text-3xl text-center">后台管理系统</h1>
    <div class="login-pane__body mt-4 w-80">
      <el-tabs type="border-card" stretch v-model="activeTabName">
        <el-tab-pane name="account">
          <template #label>
            <div class="flex items-center justify-center">
              <i-ep-user-filled />
              <span class="ml-1">帐号登录</span>
            </div>
          </template>
          <pane-account />
        </el-tab-pane>
        <el-tab-pane name="code" lazy>
          <template #label>
            <div class="flex items-center justify-center">
              <span class="i-ep-full-screen"></span>
              <span class="ml-1">二维码登录</span>
            </div>
          </template>
          <pane-code :activeTabName="activeTabName" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

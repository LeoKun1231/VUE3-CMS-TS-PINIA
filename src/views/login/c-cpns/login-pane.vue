<!--
 * @Author: hqk
 * @Date: 2022-12-23 12:12:21
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 18:45:57
 * @Description:
-->
<script setup lang="ts">
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const activeTabName = ref('account')
const isKeepPassword = ref(false)

const paneAccount = ref<InstanceType<typeof PaneAccount>>()
const panePhone = ref<InstanceType<typeof PanePhone>>()

//判断是否是帐号登录
const isAccount = computed(() => {
  return activeTabName.value == 'account'
})

/**
 * @description:点击登录
 * @return {*}
 */
const handleLoginAction = () => {
  //判断是帐号登录还是手机
  if (isAccount) {
    paneAccount.value?.loginAction()
  } else {
    // panePhone.value
  }
}
</script>

<template>
  <div class="login-pane mb-20">
    <h1 class="login-pane__title font-bold text-3xl text-center">后台管理系统</h1>
    <div class="login-pane__body mt-4 w-80">
      <el-tabs type="border-card" stretch v-model="activeTabName">
        <el-tab-pane name="account">
          <template #label>
            <div class="flex items-center justify-center">
              <!-- <el-icon><UserFilled /></el-icon> -->
              <i-ep-user-filled />
              <span class="ml-1">帐号登录</span>
            </div>
          </template>
          <pane-account ref="paneAccount" :is-keep-password="isKeepPassword" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="flex items-center justify-center">
              <!-- <el-icon><Iphone /></el-icon> -->
              <span class="ml-1">手机登录</span>
            </div>
          </template>
          <pane-phone ref="panePhone" />
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="login-pane__handle-password flex items-center justify-between" v-if="isAccount">
      <el-checkbox v-model="isKeepPassword" label="记住密码" size="large" />
      <el-link type="primary" :underline="false">忘记密码</el-link>
    </div>
    <div class="h-10 w-full" v-else></div>

    <div class="login-pane__sumbit">
      <el-button auto-insert-space type="primary" class="w-full" size="large" @click="handleLoginAction">立即登录</el-button>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

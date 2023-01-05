<!--
 * @Author: hqk
 * @Date: 2022-12-23 12:22:53
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-24 13:04:07
 * @Description:
-->
<script setup lang="ts">
import { reactive } from 'vue'

const phone = reactive({
  number: '',
  verificationCode: ''
})
</script>

<template>
  <div class="pane-phone">
    <el-form label-position="right" label-width="64px" :model="phone" size="large">
      <el-form-item label="手机号">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="flex items-center">
          <el-input v-model="phone.verificationCode" />
          <el-button type="primary" class="ml-2">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="less"></style>

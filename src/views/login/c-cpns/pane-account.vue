<!--
 * @Author: Leo l024983409@qq.com
 * @Date: 2023-01-18 12:59:07
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-10-12 14:06:12
 * @FilePath: \VUE3-CMS-TS-PINIA\src\views\login\c-cpns\pane-account.vue
 * @Description:
-->
<script setup lang="ts">
import useLoginStore from '@/store/login/login'

import type { LoginAccount } from '@/types'
import type { FormInstance, FormRules } from 'element-plus'
const isKeepPassword = useLocalStorage('account', { isKeepPassword: false }, { mergeDefaults: true })

//本地存储帐号密码
const accountStorage = useLocalStorage('account', {
  name: 'coderwhy',
  password: '123456'
})

//帐号密码
const account = reactive<LoginAccount>({
  name: accountStorage.value.name || 'admin1',
  password: accountStorage.value.password || '123456'
})

const formRef = ref<FormInstance>()
const loginStore = useLoginStore()

//校验规则
const rules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
}

/**
 * @description:登录
 * @return {*}
 */
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((vaild) => {
    //校验通过
    if (vaild) {
      const name = account.name
      const password = account.password
      loginStore.accountLoginAction({ name, password }).then(() => {
        //根据记住密码，保存帐号密码
        if (isKeepPassword) {
          accountStorage.value.name = account.name
          accountStorage.value.password = account.password
        } else {
          accountStorage.value.name = ''
          accountStorage.value.password = ''
        }
      })
    } else {
      ElMessage.error({ message: '帐号或密码有误，请检查', grouping: true })
    }
  })
}

/**
 * @description:点击登录
 * @return {*}
 */
const handleLoginAction = () => {
  loginAction(isKeepPassword.value.isKeepPassword)
}

defineExpose({
  loginAction
})
</script>

<template>
  <div class="pane-account">
    <el-form ref="formRef" label-position="right" label-width="64px" :model="account" size="large" status-icon :rules="rules">
      <el-form-item label="帐号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
  <div class="login-pane__handle-password relative top-[-10px] flex items-center justify-between">
    <el-checkbox v-model="isKeepPassword.isKeepPassword" label="记住密码" size="large" />
    <el-link type="primary" :underline="false">忘记密码</el-link>
  </div>
  <div class="login-pane__sumbit">
    <el-button auto-insert-space type="primary" class="w-full" size="large" @click="handleLoginAction" :loading="loginStore.isLogining">
      立即登录
    </el-button>
  </div>
</template>
<style scoped lang="less"></style>

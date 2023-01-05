<!--
 * @Author: hqk
 * @Date: 2022-12-23 12:21:14
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-24 20:34:51
 * @Description:
-->
<script setup lang="ts">
import useLoginStore from '@/store/login/login'

import type { LoginAccount } from '@/types'
import type { FormInstance, FormRules } from 'element-plus'

//本地存储帐号密码
const accountStorage = useLocalStorage('account', {
  name: '',
  password: ''
})

//帐号密码
const account = reactive<LoginAccount>({
  name: accountStorage.value.name,
  password: accountStorage.value.password
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
</template>
<style scoped lang="less"></style>

<!--
 * @Author: hqk
 * @Date: 2023-01-04 15:28:27
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 18:35:06
 * @Description:
-->
<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import type { FormInstance } from 'element-plus'

const formData = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: ''
})

// 刷新搜索内容
const formRef = ref<FormInstance>()
function refreshFormData() {
  formRef.value?.resetFields()
  systemStore.currentPage = 1
  systemStore.pageSize = 10
  systemStore.postUserListAction()
}

const systemStore = useSystemStore()
//搜索
function handleSearch() {
  systemStore.postUserListAction(formData)
}
</script>

<template>
  <div class="search bg-white px-20 py-10 rounded-xl">
    <el-form :model="formData" ref="formRef" label-width="100px" size="large">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户" prop="name">
            <el-input v-model="formData.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="formData.realname" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号码" prop="cellphone">
            <el-input v-model="formData.cellphone" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select placeholder="请选择状态" class="w-full" v-model="formData.enable">
              <el-option label="启动" :value="1" />
              <el-option label="禁用" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="formData.createAt"
              type="daterange"
              range-separator="~"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="search-btns flex items-center justify-end">
        <el-button class="!text-4" @click="refreshFormData">
          <template #icon>
            <i-ep-refresh />
          </template>
          刷新
        </el-button>
        <el-button type="primary" class="!text-4" @click="handleSearch">
          <template #icon>
            <i-ep-search />
          </template>
          搜索
        </el-button>
      </div>
    </el-form>
  </div>
</template>
<style scoped lang="less">
.search {
  .el-form-item {
    margin-bottom: 30px;
  }
}
</style>

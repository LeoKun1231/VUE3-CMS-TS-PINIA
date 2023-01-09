<!--
 * @Author: hqk
 * @Date: 2023-01-04 15:28:27
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-08 21:48:00
 * @Description:
-->
<script setup lang="ts">
import type { SearchConfig } from '@/types/config/seach.config'
import type { FormInstance } from 'element-plus'

interface Prop {
  searchConfig: SearchConfig
}

const props = defineProps<Prop>()

const emits = defineEmits<{
  (e: 'reset'): void
  (e: 'query', value: any): void
}>()

// 初始化值
const initialFromData: any = {}
for (const item of props.searchConfig.formItems) {
  initialFromData[item.prop as string] = item.initialValue ?? ''
}

const searchFormData = reactive(initialFromData)

// 刷新搜索内容
const formRef = ref<FormInstance>()
function refreshFormData() {
  formRef.value?.resetFields()
  emits('reset')
}

//搜索
function handleSearch() {
  emits('query', searchFormData)
}
</script>

<template>
  <div class="search bg-white px-20 py-10 rounded-xl">
    <el-form :model="searchFormData" ref="formRef" label-width="100px" size="large">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <el-col :span="8">
            <template v-if="item.type == 'input'">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-input v-model="searchFormData[item.prop as string]" :placeholder="item.placeholder" />
              </el-form-item>
            </template>
            <template v-else-if="item.type == 'date-picker'">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-date-picker
                  v-model="searchFormData[item.prop as string]"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </el-form-item>
            </template>
          </el-col>
        </template>
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

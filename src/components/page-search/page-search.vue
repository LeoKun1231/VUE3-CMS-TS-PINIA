<!--
 * @Author: hqk
 * @Date: 2023-01-04 15:28:27
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 14:23:29
 * @Description:
-->
<script setup lang="ts">
import type { SearchConfig } from '@/types/config/seach.config'
import 'dayjs/locale/zh-cn'
import type { FormInstance } from 'element-plus'

const defaultTime = ref<[Date, Date]>([new Date('2000-02-01 08:00:00'), new Date('2000-02-02 07:59:59')])
interface Prop {
  searchConfig: SearchConfig
}

const props = defineProps<Prop>()

const emits = defineEmits<{
  (e: 'reset'): void
  (e: 'query', value: any): void
}>()

// 初始化值
let initialFromData: any = {}
for (const item of props.searchConfig.formItems) {
  if (item.type == 'number') {
    initialFromData[item.prop as string] = [0, Infinity]
  } else {
    initialFromData[item.prop as string] = item.initialValue ?? ''
  }
}
let searchFormData = ref(JSON.parse(JSON.stringify(initialFromData)))

// 刷新搜索内容
const formRef = ref<FormInstance>()
function refreshFormData() {
  formRef.value?.resetFields()
  searchFormData.value = JSON.parse(JSON.stringify(initialFromData))
  emits('reset')
}

//搜索
function handleSearch() {
  for (const item of props.searchConfig.formItems) {
    //判断是否是数字区间
    if (item.type == 'number') {
      const arr = searchFormData.value[item.prop as string]
      if (arr[1] == Infinity || !arr[1]) {
        searchFormData.value[item.prop as string] = [arr[0]]
      }
    }
  }
  emits('query', searchFormData.value)
}
</script>

<template>
  <div class="search bg-white px-20 py-10 rounded-xl">
    <el-form :model="searchFormData" ref="formRef" label-width="100px" size="large">
      <el-row :gutter="20">
        <template v-for="item in searchConfig.formItems" :key="item.prop">
          <template v-if="item.type == 'number'">
            <el-col :span="8">
              <el-form-item :label="'起始' + item.label" class="num-input">
                <el-input-number style="width: 100%" v-model="searchFormData[item.prop as string][0]" :min="0" controls-position="right" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item :label="'结束' + item.label" class="num-input">
                <el-input-number style="width: 100%" v-model="searchFormData[item.prop as string][1]" :min="0" controls-position="right" />
              </el-form-item>
            </el-col>
          </template>
          <el-col :span="8" v-else>
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
                  :default-time="defaultTime"
                />
              </el-form-item>
            </template>
            <template v-else-if="item.type == 'select'">
              <el-form-item :label="item.label">
                <el-select class="w-full" v-model="searchFormData[item.prop as string]">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option v-bind="option"></el-option>
                  </template>
                </el-select>
              </el-form-item>
            </template>
            <template v-else-if="item.type == 'custom'">
              <el-form-item :label="item.label">
                <slot :name="item.prop"></slot>
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
  .num-input {
    :deep(.el-input__inner) {
      width: 60px !important;
    }
  }
}
</style>

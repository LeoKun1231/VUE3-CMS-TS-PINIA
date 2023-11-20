<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 17:47:33
 * @Description:
-->
<script setup lang="ts">
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import pageSearch from '@/components/page-search/page-search.vue'

import { searchConfig } from './config/search.config'
import { tableConfig } from './config/table.config'

import useAddDept2Config from '@/hooks/useAddDept2Config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/store/main/main'
import type { DepartmentInfo } from '@/types'
import { formatTime } from '@/utils/format-time'
import { modalConfig } from './config/modal.config'

const mainStore = useMainStore()

const { configRef } = useAddDept2Config(modalConfig)

const { handleQuery, handleReset, pageContentRef } = usePageContent()
const copyDepartmentList = ref<DepartmentInfo[]>([])
const { handleCreate, handleEdit, pageModalRef } = usePageModal(undefined, (department) => {
  if (mainStore.departmentList) {
    copyDepartmentList.value = mainStore.departmentList
  }
  //过滤掉自己
  mainStore.departmentList = mainStore.departmentList?.filter((item) => item.id != department.id)
  const departmentIds = mainStore.departmentList?.map((item) => item.id)
  if (!departmentIds?.find((item) => item == department.parentId)) {
    department.parentId = ''
  }
})

const handleClose = () => {
  mainStore.departmentList = copyDepartmentList.value
}
</script>

<template>
  <div class="department">
    <page-search :search-config="searchConfig" @reset="handleReset" @query="handleQuery" />
    <page-content ref="pageContentRef" @create="handleCreate" @edit="handleEdit" :table-config="tableConfig">
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
    </page-content>
    <page-modal ref="pageModalRef" :modal-config="configRef" @close="handleClose" />
  </div>
</template>
<style scoped lang="less"></style>

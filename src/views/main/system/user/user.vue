<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:19:03
 * @Description:
-->
<script setup lang="ts">
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import useAddDept2Config from '@/hooks/useAddDept2Config'
import useAddRole2Config from '@/hooks/useAddRole2Config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { formatTime } from '@/utils/format-time'

import useMainStore from '@/store/main/main'
import { modalConfig } from './config/modal.config'
import { searchConfig } from './config/search.config'
import { tableConfig } from './config/table.config'

const mainStore = useMainStore()
const roleIds = computed(() => {
  return mainStore.roleList?.map((item) => item.id)
})
const departmentIds = computed(() => {
  return mainStore.departmentList?.map((item) => item.id)
})

const { handleQuery, handleReset, pageContentRef } = usePageContent()
const { handleCreate, handleEdit, pageModalRef } = usePageModal(
  () => {},
  (user) => {
    if (!roleIds.value?.find((item) => item == user.roleId)) {
      user.roleId = ''
    }
    if (!departmentIds.value?.find((item) => item == user.departmentId)) {
      user.departmentId = ''
    }
  }
)
const { configRef: modalConfigRefForDept } = useAddDept2Config(modalConfig)
const { configRef: searchConfigRefForDept } = useAddDept2Config(searchConfig)
const { configRef } = useAddRole2Config(modalConfigRefForDept.value)
const { configRef: searchConfigRef } = useAddRole2Config(searchConfigRefForDept.value)
</script>

<template>
  <div class="user">
    <page-search @query="handleQuery" @reset="handleReset" :search-config="searchConfigRef" />
    <page-content :table-config="tableConfig" @create="handleCreate" @edit="handleEdit" ref="pageContentRef">
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #avatar="scope">
        <el-image
          v-if="scope.row.avatar"
          style="width: 75px; height: 75px"
          :src="scope.row.avatar"
          :zoom-rate="1.2"
          :preview-src-list="[scope.row.avatar]"
          fit="cover"
        />
      </template>
    </page-content>
    <page-modal :modal-config="configRef" ref="pageModalRef" />
  </div>
</template>
<style scoped lang="less"></style>

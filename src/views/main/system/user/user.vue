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

import { modalConfig } from './config/modal.config'
import { searchConfig } from './config/search.config'
import { tableConfig } from './config/table.config'

const { handleQuery, handleReset, pageContentRef } = usePageContent()
const { handleCreate, handleEdit, pageModalRef } = usePageModal()
const { modalConfigRef: modalConfigRefForDept } = useAddDept2Config(modalConfig)
const { modalConfigRef } = useAddRole2Config(modalConfigRefForDept.value)
</script>

<template>
  <div class="user">
    <page-search @query="handleQuery" @reset="handleReset" :search-config="searchConfig" />
    <page-content :table-config="tableConfig" @create="handleCreate" @edit="handleEdit" ref="pageContentRef">
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
    </page-content>
    <page-modal :modal-config="modalConfigRef" ref="pageModalRef" />
  </div>
</template>
<style scoped lang="less"></style>

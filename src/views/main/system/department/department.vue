<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 17:47:33
 * @Description:
-->
<script setup lang="ts">
import pageSearch from '@/components/page-search/page-search.vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageModal from '@/components/page-modal/page-modal.vue'

import { searchConfig } from './config/search.config'
import { tableConfig } from './config/table.config'
import { modalConfig } from './config/modal.config'

import { formatTime } from '@/utils/format-time'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useAddDept2Config from '@/hooks/useAddDept2Config'

const { modalConfigRef } = useAddDept2Config(modalConfig)
const { handleQuery, handleReset, pageContentRef } = usePageContent()
const { handleCreate, handleEdit, pageModalRef } = usePageModal()
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
    <page-modal ref="pageModalRef" :modal-config="modalConfigRef" />
  </div>
</template>
<style scoped lang="less"></style>

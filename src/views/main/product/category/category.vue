<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:39
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:52:54
 * @Description:
-->
<script setup lang="ts">
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { modalConfig } from './config/modal.config'
import { searchConfig } from './config/search.config'
import { tableConfig } from './config/table.config'
import { formatTime } from '@/utils/format-time'

const { handleQuery, handleReset, pageContentRef } = usePageContent()
const { handleCreate, handleEdit, pageModalRef } = usePageModal()
</script>

<template>
  <div class="category">
    <page-search :search-config="searchConfig" @reset="handleReset" @query="handleQuery" />
    <page-content ref="pageContentRef" @create="handleCreate" @edit="handleEdit" :table-config="tableConfig">
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
    </page-content>
    <page-modal ref="pageModalRef" :modal-config="modalConfig" />
  </div>
</template>
<style scoped lang="less"></style>

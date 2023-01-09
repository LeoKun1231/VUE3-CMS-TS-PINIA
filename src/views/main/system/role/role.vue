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
  <div class="role">
    <page-search :search-config="searchConfig" @query="handleQuery" @reset="handleReset" />
    <page-content :table-config="tableConfig" @create="handleCreate" @edit="handleEdit" ref="pageContentRef">
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
    </page-content>
    <page-modal :modal-config="modalConfig" ref="pageModalRef" />
  </div>
</template>
<style scoped lang="less"></style>

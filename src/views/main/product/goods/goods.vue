<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:39
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 19:38:53
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
  <div class="goods">
    <page-search :search-config="searchConfig" @reset="handleReset" @query="handleQuery" />
    <page-content ref="pageContentRef" @create="handleCreate" @edit="handleEdit" :table-config="tableConfig">
      <template #oldPrice="scope">
        <span>{{ '￥' + scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>{{ '￥' + scope.row.newPrice }}</span>
      </template>
      <template #status="scope">
        <el-button :type="scope.row.status == 1 ? 'success' : 'danger'" class="!w-full" size="small">
          {{ scope.row.status == 1 ? '可用' : '下架' }}
        </el-button>
      </template>
      <template #imgUrl="scope">
        <el-image
          style="width: 75px; height: 75px"
          :src="scope.row.imgUrl"
          :zoom-rate="1.2"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
        />
      </template>
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
<style scoped lang="less">
.goods {
  :deep(.el-table__cell) {
    // 设置l-table td.position 使得 子元素不与其产生新的层叠关系
    position: static;
  }
}
</style>

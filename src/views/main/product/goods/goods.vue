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
import useAddGoodsCategoryConfig from '@/hooks/useAddGoodsCategory2Config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useMainStore from '@/store/main/main'
import { formatTime } from '@/utils/format-time'
import { modalConfig } from './config/modal.config'
import { searchConfig } from './config/search.config'
import { tableConfig } from './config/table.config'

const mainStore = useMainStore()
const categoryIds = computed(() => {
  return mainStore.categoryList.map((item) => item.id)
})

const { handleQuery, handleReset, pageContentRef } = usePageContent()
const { handleCreate, handleEdit, pageModalRef } = usePageModal(undefined, (goods) => {
  if (!categoryIds.value.find((item) => item == goods.categoryId)) {
    goods.categoryId = ''
  }
})

const { configRef: modalConfigRef } = useAddGoodsCategoryConfig(modalConfig)
const { configRef: searchConfigRef } = useAddGoodsCategoryConfig(searchConfig)
</script>

<template>
  <div class="goods">
    <page-search :search-config="searchConfigRef" @reset="handleReset" @query="handleQuery"> </page-search>
    <page-content ref="pageContentRef" @create="handleCreate" @edit="handleEdit" :table-config="tableConfig">
      <template #oldPrice="scope">
        <span>{{ '￥' + scope.row.oldPrice }}</span>
      </template>
      <template #newPrice="scope">
        <span>{{ '￥' + scope.row.newPrice }}</span>
      </template>
      <template #imgUrl="scope">
        <el-image
          v-if="scope.row.imgUrl"
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
    <page-modal ref="pageModalRef" :modal-config="modalConfigRef"> </page-modal>
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

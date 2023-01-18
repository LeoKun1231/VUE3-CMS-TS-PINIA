<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-11 21:46:38
 * @Description:
-->
<script setup lang="ts">
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { modalConfig } from './config/modal.config'
import { tableConfig } from './config/table.config'
import { formatTime } from '@/utils/format-time'
import { mapMenuInfo2Tree } from '@/utils/map-util'
import useMainStore from '@/store/main/main'

const { pageContentRef } = usePageContent()
const { handleCreate, handleEdit, pageModalRef } = usePageModal(
  () => {
    otherInfo.parentId = ''
  },
  (info) => {
    otherInfo.parentId = info.parentId
  }
)

const mainStore = useMainStore()

const otherInfo = reactive({
  parentId: ''
})

const menuInfoComputed = computed(() => {
  return mapMenuInfo2Tree(mainStore.menuList as any[])
})
</script>

<template>
  <div class="menu">
    <page-content :table-config="tableConfig" @create="handleCreate" @edit="handleEdit" ref="pageContentRef">
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
    </page-content>
    <page-modal :modal-config="modalConfig" ref="pageModalRef" :other-info="otherInfo">
      <template #parentId>
        <el-tree-select
          v-model="otherInfo.parentId"
          :data="menuInfoComputed"
          check-strictly
          :render-after-expand="false"
          show-checkbox
          check-on-click-node
          class="w-full"
        />
      </template>
    </page-modal>
  </div>
</template>
<style scoped lang="less"></style>

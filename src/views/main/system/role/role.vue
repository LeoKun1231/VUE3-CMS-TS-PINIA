<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-12 18:33:21
 * @Description:
-->
<script lang="ts" setup>
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'
import PageSearch from '@/components/page-search/page-search.vue'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { formatTime } from '@/utils/format-time'
import { modalConfig } from './config/modal.config'
import { searchConfig } from './config/search.config'
import { tableConfig } from './config/table.config'

import useMainStore from '@/store/main/main'
import { mapMenuChecked, mapMenuInfo2Tree } from '@/utils/map-util'
import type { ElTree } from 'element-plus'

const elTreeRef = ref<InstanceType<typeof ElTree>>()

const { handleQuery, handleReset, pageContentRef } = usePageContent()
const { handleCreate, handleEdit, pageModalRef } = usePageModal(
  () => {
    elTreeRef.value?.setCheckedKeys([])
  },
  (roleInfo: any) => {
    const checkedId = mapMenuChecked(roleInfo.menuList)
    setTimeout(() => {
      elTreeRef.value?.setCheckedKeys(checkedId)
    }, 1)
  }
)

const mainStore = useMainStore()

const { menuList } = storeToRefs(mainStore)

const menuListComputed = computed(() => {
  return mapMenuInfo2Tree(menuList.value as any[])
})

const otherInfo = ref({
  menuList: []
})

const handleCheckChange = () => {
  otherInfo.value.menuList = elTreeRef.value?.getCheckedKeys() as any
}
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
    <page-modal :modal-config="modalConfig" ref="pageModalRef" :other-info="otherInfo">
      <template #menuList>
        <el-tree :data="menuListComputed" show-checkbox node-key="id" ref="elTreeRef" @check-change="handleCheckChange" />
      </template>
    </page-modal>
  </div>
</template>
<style scoped lang="less"></style>

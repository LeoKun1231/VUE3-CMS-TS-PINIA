<!--
 * @Author: hqk
 * @Date: 2023-01-04 15:29:02
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 17:32:16
 * @Description:
-->
<script setup lang="ts">
import useMainStore from '@/store/main/main'
import type { TableConfig } from '@/types/config/table.config'

interface Prop {
  tableConfig: TableConfig
}

const props = defineProps<Prop>()
const emits = defineEmits<{
  (e: 'create'): void
  (e: 'edit', value: any): void
}>()

const mainStore = useMainStore()
const { dataList, count, pageSize, currentPage, isLoading } = storeToRefs(mainStore)

// 请求列表
mainStore.queryDataListAction(props.tableConfig.pageName)

//新建
function handleCreateUser() {
  emits('create')
}

//修改
function handleEdit(userInfo: any) {
  emits('edit', userInfo)
}

//删除
function handleDelete(id: number) {
  mainStore.deleteDataByIdAction(props.tableConfig.pageName, id)
}

const queryData = ref({})

//处理页大小改变
//处理当前页码的改变
watch([currentPage, pageSize], () => {
  queryDataList(queryData.value)
})

function queryDataList(data?: any) {
  queryData.value = data
  mainStore.queryDataListAction(props.tableConfig.pageName, data)
}

async function handleSwitchChange(row: any, itemProp: any) {
  row[itemProp + 'IsLoading'] = true

  await mainStore.patchDataAction(props.tableConfig.pageName, row.id, {
    [itemProp]: row[itemProp]
  })
  row[itemProp + 'IsLoading'] = false
}

//重置
function resetDataList() {
  mainStore.resetPageAction()
  queryData.value = {}
  queryDataList()
}

defineExpose({
  queryDataList,
  resetDataList
})
</script>

<template>
  <div class="content bg-white p-5 mt-5 rounded-xl">
    <div class="content-header flex justify-between">
      <div class="text-5 font-bold">{{ tableConfig.header.title }}</div>
      <el-button type="primary" class="!text-4" size="large" @click="handleCreateUser">{{ tableConfig.header.btnText }}</el-button>
    </div>
    <el-table
      class="content-table mt-2 w-full"
      :data="dataList"
      border
      :row-key="tableConfig.table?.rowKey"
      :tree-props="tableConfig.table?.treeProps"
      v-loading="isLoading"
    >
      <template v-for="item in tableConfig.propsList" :key="item.prop">
        <template v-if="item.type == 'selection'">
          <el-table-column type="selection" v-bind="item" />
        </template>
        <template v-else-if="item.type == 'index'">
          <el-table-column type="index" v-bind="item" />
        </template>
        <template v-else-if="item.type == 'switch'">
          <el-table-column v-bind="item">
            <template #default="{ row }">
              <el-switch
                v-model="row[item.prop as string]"
                :active-value="1"
                :inactive-value="0"
                inline-prompt
                :loading="row[item.prop + 'IsLoading']"
                active-text="启用"
                inactive-text="禁用"
                @click="handleSwitchChange(row, item.prop)"
              />
            </template>
          </el-table-column>
        </template>
        <template v-else-if="item.type == 'operate'">
          <el-table-column label="操作" align="center" width="200px">
            <template #default="{ row }">
              <el-button link type="warning" @click="handleEdit(row)">
                <template #icon>
                  <i-ep-edit />
                </template>
                编辑
              </el-button>
              <el-popconfirm title="您确定删除吗?" @confirm="handleDelete(row.id)">
                <template #reference>
                  <el-button link type="danger">
                    <template #icon>
                      <i-ep-delete />
                    </template>
                    删除
                  </el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column v-bind="item">
            <template #default="scope">
              <slot :name="item.slotName" v-bind="scope">
                {{ scope.row[item.prop as string] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </template>
    </el-table>
    <el-pagination
      class="content-pagination mt-4 flex justify-end"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count"
    />
  </div>
</template>
<style scoped lang="less">
.content {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }
}
</style>

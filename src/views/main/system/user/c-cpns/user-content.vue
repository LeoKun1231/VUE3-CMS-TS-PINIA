<!--
 * @Author: hqk
 * @Date: 2023-01-04 15:29:02
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 19:57:04
 * @Description:
-->
<script setup lang="ts">
import useSystemStore from '@/store/main/system/system'
import { formatTime } from '@/utils/format-time'

const emits = defineEmits<{
  (e: 'create'): void
  (e: 'edit', value: any): void
}>()

const systemStore = useSystemStore()
const { userList, userCounts, pageSize, currentPage } = storeToRefs(systemStore)

// 请求用户列表
systemStore.postUserListAction()

//新建用户
function handleCreateUser() {
  emits('create')
}

//修改用户
function editUser(userInfo: any) {
  emits('edit', userInfo)
}

//删除用户
function deleteUser(id: number) {
  systemStore.deleteUserAction(id)
}

//处理页大小改变
function handleSizeChange() {
  postUserListByPage()
}

//处理当前页码的改变
function handleCurrentChange() {
  postUserListByPage()
}

function postUserListByPage() {
  systemStore.postUserListAction({
    size: pageSize.value,
    offset: (currentPage.value - 1) * pageSize.value
  })
}
</script>

<template>
  <div class="content bg-white p-5 rounded-xl">
    <div class="content-header flex justify-between">
      <div class="text-5 font-bold">用户列表</div>
      <el-button type="primary" class="!text-4" size="large" @click="handleCreateUser">新建用户</el-button>
    </div>
    <el-table class="content-table mt-2 w-full" :data="userList" border>
      <el-table-column type="selection" align="center" />
      <el-table-column type="index" label="序号" align="center" width="60px" />
      <el-table-column prop="name" label="用户名" align="center" />
      <el-table-column prop="realname" label="真实名" align="center" />
      <el-table-column prop="cellphone" label="手机号码" align="center" />
      <el-table-column prop="enable" label="状态" align="center" width="100px">
        <template #default="{ row }">
          <el-button :type="row.enable == 1 ? 'success' : 'danger'" plain size="small">{{ row.enable == 1 ? '启用' : '禁用' }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" align="center" width="200px">
        <template #default="{ row }">
          <span>{{ formatTime(row.createAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="updateAt" label="更新时间" align="center" width="200px">
        <template #default="{ row }">
          <span>{{ formatTime(row.updateAt) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="200px">
        <template #default="{ row }">
          <el-button link type="warning" @click="editUser(row)">
            <template #icon>
              <i-ep-edit />
            </template>
            编辑
          </el-button>
          <el-popconfirm title="您确定删除吗?" @confirm="deleteUser(row.id)">
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
    </el-table>
    <el-pagination
      class="content-pagination mt-4 flex justify-end"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userCounts"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
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

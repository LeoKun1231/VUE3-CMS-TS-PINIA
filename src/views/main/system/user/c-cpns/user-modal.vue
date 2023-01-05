<!--
 * @Author: hqk
 * @Date: 2023-01-04 15:32:23
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 18:06:46
 * @Description:
-->
<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
const dialogVisible = ref(false)

const formData: any = reactive({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

const mainStore = useMainStore()
const systemStore = useSystemStore()
const { roleList, departmentList } = storeToRefs(mainStore)
const isCreateRef = ref(true)
const userId = ref()

//处理提交
function handleConfirm() {
  if (isCreateRef.value) {
    systemStore.createUserAction(formData).then(() => {
      dialogVisible.value = false
    })
  } else {
    systemStore.patchUserAction(userId.value, formData).then(() => {
      dialogVisible.value = false
      userId.value = null
    })
  }
}

//打开表单
function setDialogVisible(isCreate = true, userInfo?: any) {
  isCreateRef.value = isCreate
  if (!isCreate && userInfo) {
    userId.value = userInfo.id
    for (const key in formData) {
      formData[key] = userInfo[key]
    }
  } else {
    //创建之前先清空数据
    for (const key in formData) {
      formData[key] = ''
    }
  }
  dialogVisible.value = true
}

defineExpose({
  setDialogVisible
})
</script>

<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <el-form :model="formData" size="large" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="formData.realname" />
        </el-form-item>
        <el-form-item label="密码" v-if="isCreateRef">
          <el-input v-model="formData.password" />
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="formData.cellphone" />
        </el-form-item>
        <el-form-item label="选择角色">
          <el-select class="w-full" v-model="formData.roleId">
            <template v-for="role in roleList" :key="role.id">
              <el-option :label="role.name" :value="role.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门">
          <el-select class="w-full" v-model="formData.departmentId">
            <template v-for="department in departmentList" :key="department.id">
              <el-option :label="department.name" :value="department.id"></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" auto-insert-space size="large">取消</el-button>
          <el-button type="primary" @click="handleConfirm" auto-insert-space size="large">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<style scoped lang="less"></style>

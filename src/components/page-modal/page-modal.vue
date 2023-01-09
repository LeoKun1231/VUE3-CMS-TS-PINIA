<!--
 * @Author: hqk
 * @Date: 2023-01-04 15:32:23
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 18:48:31
 * @Description:
-->
<script setup lang="ts">
import useMainStore from '@/store/main/main'
import type { ModalConfig } from '@/types/config/modal.config'

interface Prop {
  modalConfig: ModalConfig
}

const props = defineProps<Prop>()

const dialogVisible = ref(false)

const initialValue: any = {}

for (const item of props.modalConfig.formItems) {
  initialValue[item.prop as string] = item.initialValue ?? ''
}

const formData: any = reactive(initialValue)

const isCreateRef = ref(true)
const editId = ref()

const mainStore = useMainStore()

//处理提交
function handleConfirm() {
  if (isCreateRef.value) {
    mainStore.createNewDataAction(props.modalConfig.pageName, formData).then(() => {
      dialogVisible.value = false
    })
  } else {
    mainStore.patchDataAction(props.modalConfig.pageName, editId.value, formData).then(() => {
      dialogVisible.value = false
      editId.value = null
    })
  }
}

//打开表单
function setDialogVisible(isCreate = true, formInfo?: any) {
  isCreateRef.value = isCreate
  if (!isCreate && formInfo) {
    editId.value = formInfo.id
    for (const key in formData) {
      formData[key] = formInfo[key]
    }
    console.log(formData)
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
    <el-dialog v-model="dialogVisible" :title="modalConfig.title" width="30%" center>
      <el-form :model="formData" size="large" label-width="100px">
        <template v-for="item in modalConfig.formItems" :key="item.prop">
          <template v-if="item.type == 'input'">
            <el-form-item :label="item.label" v-if="item.prop != 'password' || isCreateRef">
              <el-input v-model="formData[item.prop as string]" />
            </el-form-item>
          </template>

          <template v-else-if="item.type == 'select'">
            <el-form-item :label="item.label">
              <el-select class="w-full" v-model="formData[item.prop as string]">
                <template v-for="option in item.options" :key="option.value">
                  <el-option v-bind="option"></el-option>
                </template>
              </el-select>
            </el-form-item>
          </template>
        </template>
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

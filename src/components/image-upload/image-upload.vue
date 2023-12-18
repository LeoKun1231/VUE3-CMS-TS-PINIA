<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { Delete, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile, UploadProps, UploadUserFile } from 'element-plus'

const props = defineProps<{
  modelValue: string
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): string
}>()

const fileList = ref<UploadUserFile[]>([])

watch(
  () => props.modelValue,
  (value) => {
    fileList.value = value ? [{ url: value, name: '照片' }] : []
  },
  {
    immediate: true
  }
)

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const loginStore = useLoginStore()
const headers = computed(() => {
  return {
    Authorization: `Bearer ${loginStore.token}`
  }
})

const handleRemove = () => {
  fileList.value = []
  emits('update:modelValue', '')
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleSuccess: UploadProps['onSuccess'] = (res) => {
  fileList.value = [{ url: res.data?.url, name: res.data?.name }]
  console.log('🚀 ~ file: image-upload.vue:49 ~ fileList.value:', fileList.value)
  emits('update:modelValue', res.data?.url)
}
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 10) {
    ElMessage.error('上传照片不能超过2MB!')
    return false
  }
  return true
}
</script>

<template>
  <el-upload
    v-model:file-list="fileList"
    action="proxy/upload/single"
    list-type="picture-card"
    :limit="1"
    :auto-upload="true"
    :headers="headers"
    :before-upload="beforeAvatarUpload"
    :on-success="handleSuccess"
  >
    <el-icon style="width: 104px; height: 104px" v-if="fileList.length == 0"><Plus /></el-icon>

    <template #file="{ file }">
      <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
      <span class="el-upload-list__item-actions">
        <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
          <el-icon><zoom-in /></el-icon>
        </span>
        <span class="el-upload-list__item-delete" @click="handleRemove">
          <el-icon><Delete /></el-icon>
        </span>
      </span>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<style scoped>
:deep(.is-ready + .el-upload) {
  display: none;
}
:deep(.is-success + .el-upload) {
  display: none;
}
:deep(.el-upload-list--picture-card) {
  width: 104px;
  height: 104px;
}
:deep(.el-upload) {
  width: 104px;
  height: 104px;
}
:deep(.el-upload-list__item) {
  width: 104px;
  height: 104px;
}
</style>

<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-17 18:32:40
 * @Description:
-->
<script setup lang="ts">
import PageEditor from '@/components/page-editor/page-editor.vue'
import useStoryStore from '@/store/main/story/story'

const form = reactive({
  title: ''
})
const editorHtml = ref<string>()

function refreshEditor() {
  editorHtml.value = ''
}

const storyStore = useStoryStore()
function sumbitEditor() {
  storyStore
    .createNewStoryAction({
      title: form.title,
      content: editorHtml.value!
    })
    .then(() => {
      form.title = ''
      editorHtml.value = ''
    })
}
</script>

<template>
  <div class="chat">
    <div class="chat-title">
      <el-form :model="form" size="large">
        <el-form-item label="标题:">
          <el-input v-model="form.title" />
        </el-form-item>
      </el-form>
    </div>
    <page-editor v-model="editorHtml" />
    <div class="search-btns flex items-center justify-end mt-5 mr-5">
      <el-button class="!text-4" @click="refreshEditor">
        <template #icon>
          <i-ep-refresh />
        </template>
        刷新
      </el-button>
      <el-button type="primary" class="!text-4" @click="sumbitEditor">
        <template #icon>
          <i-ep-search />
        </template>
        提交
      </el-button>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

<!--
 * @Author: hqk
 * @Date: 2022-09-05 13:51:37
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-17 22:01:03
 * @Description:
-->
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

interface Prop {
  modelValue?: string
  maxLength?: number
  height?: string
}

const props = withDefaults(defineProps<Prop>(), {
  modelValue: '',
  maxLength: 3000,
  height: '50vh'
})
const emits = defineEmits(['click', 'update:modelValue'])

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('')

//菜单配置
const toolbarConfig = {
  toolbarKeys: [
    'bold',
    'italic',
    'underline',
    'through',
    'blockquote',
    'color',
    'bgColor',
    'fontSize',
    'fontFamily',
    'clearStyle',
    'headerSelect',
    'justifyLeft',
    'justifyRight',
    'justifyCenter',
    'justifyJustify',
    'codeBlock',
    'indent',
    'divider'
  ]
}
const editorConfig = { placeholder: '请输入', maxlength: props.maxLength }
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

watch(
  () => props.modelValue,
  () => {
    editorRef.value.setHtml(props.modelValue)
  }
)

//为了实时能拿到
const handleChange = () => {
  emits('update:modelValue', editorRef.value.getHtml())
}

const clearText = () => {
  editorRef.value.setHtml('<span></span>')
}
defineExpose({
  clearText
})
</script>

<template>
  <div class="editor text-left w-full h-fit">
    <div style="width: 100%; height: fit-content; border: 1px solid #dcdfe6; z-index: 999">
      <Toolbar style="border-bottom: 1px solid #dcdfe6" :editor="editorRef" :defaultConfig="toolbarConfig" />
      <Editor
        :style="{ overflowY: 'hidden', height }"
        v-bind="$attrs"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        @onCreated="handleCreated"
        @onChange="handleChange"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.editor {
  :deep(.w-e-text-placeholder) {
    line-height: 21px;
    height: 21px;
  }
}
</style>

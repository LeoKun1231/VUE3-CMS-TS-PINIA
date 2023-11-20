<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed, ref, toRef, watch, type CSSProperties } from 'vue'
import { IconJson } from './../data'

type ParameterCSSProperties = (item?: string) => CSSProperties | undefined

defineOptions({
  name: 'IconSelect'
})

const props = defineProps({
  modelValue: {
    require: false,
    type: String
  }
})
const emit = defineEmits<{ (e: 'update:modelValue', v: string): void }>()

const inputValue = toRef(props, 'modelValue')
const iconList = ref(IconJson)
const icon = ref()
const currentActiveType = ref('ep:')
// 深拷贝图标数据，前端做搜索
const copyIconList = JSON.parse(JSON.stringify(iconList.value))
const totalPage = ref(0)
// 每页显示35个图标
const pageSize = ref(48)
const currentPage = ref(1)

// 搜索条件
const filterValue = ref('')

const pageList = computed(() =>
  copyIconList
    .filter((i: any) => i.includes(filterValue.value))
    .slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
)

const iconItemStyle = computed((): ParameterCSSProperties => {
  return (item) => {
    if (inputValue.value === currentActiveType.value + item) {
      return {
        borderColor: 'var(--el-color-primary)',
        color: 'var(--el-color-primary)'
      }
    }
  }
})

function onBeforeEnter() {
  if (!icon.value) return
  // 寻找当前图标在第几页
  const curIconIndex = copyIconList.findIndex((i: any) => i === icon.value)
  currentPage.value = Math.ceil((curIconIndex + 1) / pageSize.value)
}

function onAfterLeave() {
  filterValue.value = ''
}

function onChangeIcon(item: any) {
  icon.value = item
  emit('update:modelValue', 'el-icon-' + item)
}

function onCurrentChange(page: any) {
  currentPage.value = page
}

function onClear() {
  icon.value = ''
  emit('update:modelValue', '')
}

watch(
  () => pageList.value,
  () => (totalPage.value = copyIconList.filter((i: any) => i.includes(filterValue.value)).length),
  { immediate: true }
)
watch(
  () => filterValue.value,
  () => (currentPage.value = 1)
)
</script>

<template>
  <div class="selector w-[350px]">
    <el-input v-model="inputValue" disabled>
      <template #append>
        <el-popover
          :width="350"
          trigger="click"
          popper-class="pure-popper"
          :popper-options="{
            placement: 'auto'
          }"
          @before-enter="onBeforeEnter"
          @after-leave="onAfterLeave"
        >
          <template #reference>
            <div class="w-[40px] h-[32px] cursor-pointer flex justify-center items-center">
              <div class="i-ep-search">search</div>
            </div>
          </template>

          <el-input v-model="filterValue" class="px-2 pt-2" placeholder="搜索图标" clearable />

          <el-scrollbar height="220px">
            <ul class="flex flex-wrap px-2 ml-2">
              <li
                v-for="(item, key) in pageList"
                :key="key"
                :title="item"
                class="icon-item p-2 cursor-pointer mr-2 mt-1 flex justify-center items-center border border-[#e5e7eb]"
                :style="iconItemStyle(item)"
                @click="onChangeIcon(item)"
              >
                <el-icon>
                  <Icon :icon="currentActiveType + item" />
                </el-icon>
              </li>
            </ul>
          </el-scrollbar>

          <div class="w-full h-9 flex items-center overflow-auto border-t border-[#e5e7eb]">
            <el-pagination
              class="flex-auto ml-2"
              :total="totalPage"
              :current-page="currentPage"
              :page-size="pageSize"
              :pager-count="5"
              layout="pager"
              background
              small
              @current-change="onCurrentChange"
            />
            <el-button class="justify-end mr-2 ml-2" type="danger" size="small" text bg @click="onClear"> 清空 </el-button>
          </div>
        </el-popover>
      </template>
    </el-input>
  </div>
</template>

<style lang="less" scoped>
.icon-item {
  &:hover {
    color: var(--el-color-primary);
    border-color: var(--el-color-primary);
    transition: all 0.4s;
    transform: scaleX(1.05);
  }
}

:deep(.el-tabs__nav-next) {
  font-size: 15px;
  line-height: 32px;
  box-shadow: -5px 0 5px -6px #ccc;
}

:deep(.el-tabs__nav-prev) {
  font-size: 15px;
  line-height: 32px;
  box-shadow: 5px 0 5px -6px #ccc;
}

:deep(.el-input-group__append) {
  padding: 0;
}

:deep(.el-tabs__item) {
  height: 30px;
  font-size: 12px;
  font-weight: normal;
  line-height: 30px;
}

:deep(.el-tabs__header),
:deep(.el-tabs__nav-wrap) {
  position: static;
  margin: 0;
  box-shadow: 0 2px 5px rgb(0 0 0 / 6%);
}

:deep(.el-tabs__nav-wrap::after) {
  height: 0;
}

:deep(.el-tabs__nav-wrap) {
  padding: 0 24px;
}

:deep(.el-tabs__content) {
  margin-top: 4px;
}
</style>

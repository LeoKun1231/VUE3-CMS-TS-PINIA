<!--
 * @Author: hqk
 * @Date: 2022-12-24 20:57:19
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-18 13:59:36
 * @Description:
-->
<script setup lang="ts">
import router from '@/router'
import useLoginStore from '@/store/login/login'
import useMainStore from '@/store/main/main'
import { firstShowMenu, mapPath2Menu } from '@/utils/map-util'
import { Icon } from '@iconify/vue'

const loginStore = useLoginStore()
const mainStore = useMainStore()

const { menuInfo } = storeToRefs(loginStore)
const { isMenuExpand } = storeToRefs(mainStore)

function handleELMenuClick(url: any) {
  router.push(url)
}

//根据路径匹配菜单
const route = useRoute()
const defaultActiveMenu = computed(() => {
  const menu = mapPath2Menu(route.path, menuInfo.value)
  if (!menu) return firstShowMenu?.id + ''
  return menu?.id + ''
})
</script>

<template>
  <div class="menu h-full w-full">
    <h1 class="w-full h-16 text-[#b7bdc3] bg-[#001529]">
      <div center h-full>
        <i-ep-element-plus text-xl />
        <span class="ml-1 text-xl" v-show="!isMenuExpand">后台管理系统</span>
      </div>
    </h1>
    <el-menu class="menu__body w-full h-[calc(100%-60px)] !border-r-0" :collapse="isMenuExpand" :default-active="defaultActiveMenu">
      <template v-for="item in menuInfo" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon v-if="item.icon"><Icon :icon="`ep:${item.icon?.split('el-icon-')?.[1]}`" /></el-icon>
            <span class="ml-2">{{ item.name }}</span>
          </template>
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-menu-item
              v-if="subItem.url != '/main/analysis/overview'"
              :index="subItem.id + ''"
              @click="handleELMenuClick(subItem.url)"
              >{{ subItem.name }}</el-menu-item
            >
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<style scoped lang="less">
.menu {
  border-right: none;
  user-select: none;
  &__body {
    --el-menu-bg-color: #001529;
    --el-menu-text-color: #b7bdc3;
    --el-menu-hover-bg-color: #1890ff;
    .el-sub-menu {
      --el-menu-bg-color: #0c2135;
    }
    :deep(.el-sub-menu__title),
    :deep(.el-menu-item) {
      &:hover {
        color: #fff;
      }
    }
    .el-menu-item.is-active {
      background: #1890ff;
      color: #fff;
    }
  }
}
</style>

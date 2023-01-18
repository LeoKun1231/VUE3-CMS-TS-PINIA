<!--
 * @Author: hqk
 * @Date: 2022-12-26 20:29:49
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-03 12:39:12
 * @Description:
-->
<!--
 * @Author: hqk
 * @Date: 2022-12-26 20:29:49
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-26 20:30:10
 * @Description:
-->
<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import useMainStore from '@/store/main/main'
import { mapPath2Breadcrumb } from '@/utils/map-util'

const mainStore = useMainStore()
const handleMenuControl = () => {
  mainStore.isMenuExpand = !mainStore.isMenuExpand
}

const route = useRoute()
const loginStore = useLoginStore()
const breadcrumbItems = computed(() => {
  return mapPath2Breadcrumb(route.path, loginStore.menuInfo)
})

const router = useRouter()
const handleClick = (url: string) => {
  router.replace(url)
}
</script>

<template>
  <div class="info flex items-center">
    <el-icon size="20px" @click="handleMenuControl" class="cursor-pointer">
      <i-ep-expand v-if="mainStore.isMenuExpand" />
      <i-ep-fold v-else />
    </el-icon>
    <el-breadcrumb separator="/" class="ml-2">
      <template v-for="(item, index) in breadcrumbItems" :key="index">
        <el-breadcrumb-item>
          <a @click="handleClick(item.url)">{{ item.name }}</a>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<style scoped lang="less"></style>

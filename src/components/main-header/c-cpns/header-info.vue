<!--
 * @Author: hqk
 * @Date: 2022-12-26 20:29:20
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-13 17:19:02
 * @Description:
-->
<script setup lang="ts">
import useLoginStore from '@/store/login/login'

const loginStore = useLoginStore()
const router = useRouter()
const errorHandler = () => true

const handleLoginOut = () => {
  router.replace('/login')
}
</script>

<template>
  <div class="info center-y animate-bounce-in-down">
    <el-icon size="20px" class="cursor-pointer animate-bounce-left hover:animate-bounce-alt !animate-iteration-1">
      <i-ep-message />
    </el-icon>
    <el-badge is-dot class="!center-y cursor-pointer hover:animate-bounce-alt !animate-iteration-1">
      <el-icon size="20px" class="ml-4">
        <i-ep-chat-dot-square />
      </el-icon>
    </el-badge>
    <el-icon size="20px" class="ml-4 cursor-pointer hover:animate-bounce-alt !animate-iteration-1">
      <i-ep-search />
    </el-icon>

    <el-dropdown>
      <div class="flex items-center">
        <el-avatar :size="36" @error="errorHandler" class="ml-4 mb-1" hover="animate-bounce-alt !animate-iteration-1 cursor-pointer">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </el-avatar>
        <span class="ml-1 text-blue-4">{{ loginStore.userInfo?.name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleLoginOut">
            <el-icon>
              <i-ep-circle-close />
            </el-icon>
            <span>退出系统</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon>
              <i-ep-info-filled />
            </el-icon>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon>
              <i-ep-unlock />
            </el-icon>
            <span>修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<style scoped lang="less"></style>

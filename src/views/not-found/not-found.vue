<!--
 * @Author: hqk
 * @Date: 2022-12-21 19:20:45
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-22 20:49:24
 * @Description:
-->
<script setup lang="ts">
import ErrorImg from '@/assets/img/error.jpg'
import { useRouter } from 'vue-router'
const router = useRouter()

const handleRefresh = () => {
  location.reload()
}

const handleBack = () => {
  router.back()
}
</script>

<template>
  <div class="not-found flex justify-center items-center">
    <div class="not-found__body flex flex-col items-center px-20 py-12 border-gray-50 border-2 rounded-3xl shadow-xl">
      <div class="not-found__bg">
        <img :src="ErrorImg" />
      </div>
      <div class="not-found__title text-4xl mt-6">糟糕，网页出现故障或不存在！</div>
      <div class="not-found__desc text-2xl my-8 text-center">我们正在尝试解决您遇到的错误，请重试。 🤗</div>
      <div class="not-found__btn">
        <el-button round auto-insert-space @click="handleRefresh">刷新</el-button>
        <el-button type="primary" round auto-insert-space class="!ml-14" @click="handleBack">返回</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.not-found {
  height: 100%;
  &__btn {
    --el-font-size-base: 24px;
    .el-button {
      padding: 20px 40px;
    }
  }
}
</style>

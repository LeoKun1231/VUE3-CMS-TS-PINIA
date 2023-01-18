<!--
 * @Author: hqk
 * @Date: 2023-01-17 18:33:48
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-17 20:26:37
 * @Description:
-->
<script setup lang="ts">
import type { StoryInfo } from '@/types/main/story/story'
import { formatTime } from '@/utils/format-time'

interface Prop {
  comment: StoryInfo
}

defineProps<Prop>()
</script>

<template>
  <div class="comment bg-white py-8 px-8 rounded-2xl shadow-xl">
    <div class="comment-header flex items-center h-16">
      <div class="comment-avatar">
        <el-avatar :size="40">
          <i-ep-userFilled />
        </el-avatar>
      </div>
      <div class="comment-title-date w-full ml-4 flex justify-between">
        <div class="comment-title text-black border-b-2 border-gray">{{ comment.title }}</div>
        <div class="comment-date text-gray">{{ formatTime(comment.createAt) }}</div>
      </div>
    </div>
    <div class="comment-content mt-5" v-html="comment.content"></div>
  </div>
</template>
<style scoped lang="less"></style>

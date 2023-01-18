<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-17 21:36:18
 * @Description:
-->
<script setup lang="ts">
import PageComment from '@/components/page-comment/page-comment.vue'
import useStoryStore from '@/store/main/story/story'

const storyStore = useStoryStore()
storyStore.postStoryListAction()

function loadMoreStory() {
  storyStore.pageSize = storyStore.pageSize + 5
  storyStore.postStoryListAction()
}
</script>

<template>
  <div class="list" v-infinite-scroll="loadMoreStory">
    <template v-for="item in storyStore.storyList" :key="item.id">
      <page-comment :comment="item" class="list-comment" />
    </template>
  </div>
</template>
<style scoped lang="less">
.list {
  &-comment {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
}
</style>

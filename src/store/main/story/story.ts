/*
 * @Author: hqk
 * @Date: 2023-01-17 17:43:57
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-15 10:39:20
 * @Description:
 */

import { createNewStory, postStoryList } from '@/services/main/story/story'
import type { CreateStoryData, StoryInfo } from '@/types/main/story/story'
import { defineStore } from 'pinia'

const useStoryStore = defineStore('story', () => {
  const pageSize = ref(5)

  const storyList = ref<StoryInfo[]>([])
  const count = ref(0)

  async function createNewStoryAction(data: CreateStoryData) {
    const res = await createNewStory(data)

    if (res.code == 200) {
      ElMessage.success(res.message)
    }
  }

  async function postStoryListAction() {
    const res = await postStoryList({
      offset: 0,
      size: pageSize.value
    })
    count.value = res.data?.totalCount
    storyList.value = res.data?.list
  }

  return {
    createNewStoryAction,
    pageSize,
    count,
    storyList,
    postStoryListAction
  }
})

export default useStoryStore

/*
 * @Author: hqk
 * @Date: 2023-01-17 17:43:57
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-17 21:35:23
 * @Description:
 */

import { createNewStory, postStoryList } from '@/services/main/story/story'
import type { CreateStoryData, StoryInfo } from '@/types/main/story/story'
import { defineStore } from 'pinia'

const useStoryStore = defineStore('story', () => {
  const pageSize = ref(10)

  const storyList = ref<StoryInfo[]>([])
  const count = ref(0)

  async function createNewStoryAction(data: CreateStoryData) {
    const res = await createNewStory(data)

    if (res.code == 0) {
      ElMessage.success(res.data)
    } else {
      ElMessage.error(res.data)
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

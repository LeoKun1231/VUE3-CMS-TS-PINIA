/*
 * @Author: hqk
 * @Date: 2023-01-17 17:39:56
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-17 17:43:16
 * @Description:
 */

import appRequest from '@/services'
import type { CreateStoryData, StoryListParams, StoryListData } from '@/types/main/story/story'

export function createNewStory(data: CreateStoryData) {
  return appRequest.post({
    url: '/story',
    data
  })
}

export function postStoryList(data: StoryListParams) {
  return appRequest.post<StoryListData>({
    url: '/story/list',
    data
  })
}

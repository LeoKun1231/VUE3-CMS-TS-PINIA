/*
 * @Author: hqk
 * @Date: 2023-01-17 17:41:51
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-17 18:46:05
 * @Description:
 */
export interface CreateStoryData {
  title: string
  content: string
}

export interface StoryListParams {
  offset: number
  size: number
}

export interface StoryListData {
  code: number
  data: StoryList
}

export interface StoryList {
  list: StoryInfo[]
  totalCount: number
}

export interface StoryInfo {
  id: number
  title: string
  content: string
  createAt: Date
}

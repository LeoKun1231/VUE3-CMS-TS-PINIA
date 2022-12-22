/*
 * @Author: hqk
 * @Date: 2022-12-21 18:05:56
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-22 20:13:32
 * @Description:
 */
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },
  actions: {},
  persist: {
    storage: sessionStorage
  }
})

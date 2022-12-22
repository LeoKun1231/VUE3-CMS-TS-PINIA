/*
 * @Author: hqk
 * @Date: 2022-12-21 18:05:56
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-21 18:59:11
 * @Description:
 */
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),

  actions: {
    incrementCount(count: number) {
      this.count = this.count + count
    }
  }
})

/*
 * @Author: hqk
 * @Date: 2022-12-23 15:12:58
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 14:27:45
 * @Description:
 */

export interface IBaseResult<T> {
  code: number
  data: T
  message: string
}

export * from './login'

export * from './main/main'

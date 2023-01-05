/*
 * @Author: hqk
 * @Date: 2022-12-20 21:47:04
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 12:19:49
 * @Description:
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '*.mjs'

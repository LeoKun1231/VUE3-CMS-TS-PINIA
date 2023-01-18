/*
 * @Author: hqk
 * @Date: 2023-01-15 20:14:06
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 20:14:24
 * @Description:
 */
import { SlateDescendant, SlateElement, SlateText } from '@wangeditor/editor'

declare module '@wangeditor/editor' {
  // 扩展 Text
  interface SlateText {
    text: string
  }

  // 扩展 Element
  interface SlateElement {
    type: string
    children: SlateDescendant[]
  }
}

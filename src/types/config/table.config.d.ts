import type { TableColumnCtx } from 'element-plus'

/*
 * @Author: hqk
 * @Date: 2023-01-06 19:54:43
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-11 10:47:34
 * @Description:
 */

interface AppTableColumn<T = any> extends Partial<TableColumnCtx<T>> {
  slotName?: string
}

export interface TableConfig<T = any> {
  header: {
    title: string
    btnText: string
  }
  pageName: string
  propsList: AppTableColumn<T>[]
  table?: {
    rowKey?: string
    treeProps?: {
      hasChildren?: string
      children?: string
    }
  }
}

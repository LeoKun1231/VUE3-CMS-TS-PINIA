/*
 * @Author: hqk
 * @Date: 2023-01-05 20:44:03
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:51:35
 * @Description:
 */

import type { TableConfig } from '@/types/config/table.config'

export const tableConfig: TableConfig = {
  header: {
    title: '商品列表',
    btnText: '新建商品'
  },
  pageName: 'category',
  propsList: [
    { type: 'index', label: '序号', align: 'center', width: '60px' },
    { prop: 'name', label: '商品名称', align: 'center', slotName: 'name' },
    { prop: 'createAt', label: '创建时间', align: 'center', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', align: 'center', slotName: 'updateAt' },
    {
      type: 'operate',
      prop: 'operate',
      label: '操作',
      align: 'center',
      slotName: 'operate'
    }
  ]
}

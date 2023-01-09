/*
 * @Author: hqk
 * @Date: 2023-01-05 20:44:03
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 11:41:26
 * @Description:
 */

import type { TableConfig } from '@/types/config/table.config'

export const tableConfig: TableConfig = {
  header: {
    title: '部门列表',
    btnText: '新建部门'
  },
  pageName: 'department',
  propsList: [
    { type: 'selection', align: 'center' },
    { type: 'index', label: '序号', align: 'center', width: '60px' },
    { prop: 'name', label: '部门名称', align: 'center', slotName: 'name' },
    { prop: 'leader', label: '部门领导', align: 'center', slotName: 'leader' },
    { prop: 'parentId', label: '上级部门', align: 'center', width: '120px', slotName: 'parentId' },
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

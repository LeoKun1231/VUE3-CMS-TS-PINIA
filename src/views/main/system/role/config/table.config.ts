/*
 * @Author: hqk
 * @Date: 2023-01-05 20:44:03
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:31:47
 * @Description:
 */

import type { TableConfig } from '@/types/config/table.config'

export const tableConfig: TableConfig = {
  header: {
    title: '角色列表',
    btnText: '新建角色'
  },
  pageName: 'role',
  propsList: [
    { type: 'selection', align: 'center' },
    { type: 'index', label: '序号', align: 'center', width: '60px' },
    { prop: 'name', label: '角色名称', align: 'center', slotName: 'name' },
    { prop: 'intro', label: '权限介绍', align: 'center', slotName: 'intro' },
    { type: 'switch', prop: 'enable', label: '状态', align: 'center', width: '100px', slotName: 'enable' },
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

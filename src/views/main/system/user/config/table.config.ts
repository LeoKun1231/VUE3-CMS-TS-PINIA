/*
 * @Author: hqk
 * @Date: 2023-01-05 20:44:03
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 20:05:44
 * @Description:
 */

import type { TableConfig } from '@/types/config/table.config'

export const tableConfig: TableConfig = {
  header: {
    title: '用户列表',
    btnText: '新建用户'
  },
  pageName: 'users',
  propsList: [
    { type: 'selection', align: 'center' },
    { type: 'index', label: '序号', align: 'center', width: '60px' },
    { prop: 'name', label: '用户名', align: 'center', slotName: 'name' },
    { prop: 'realname', label: '真实名', align: 'center', slotName: 'realname' },
    { prop: 'cellphone', label: '手机号码', align: 'center', width: '120px', slotName: 'cellphone', showOverflowTooltip: true },
    { prop: 'enable', label: '状态', align: 'center', width: '80px', slotName: 'enable' },
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

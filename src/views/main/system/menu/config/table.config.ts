/*
 * @Author: hqk
 * @Date: 2023-01-05 20:44:03
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-11 11:09:58
 * @Description:
 */

import type { TableConfig } from '@/types/config/table.config'

export const tableConfig: TableConfig = {
  header: {
    title: '菜单列表',
    btnText: '新建菜单'
  },
  pageName: 'menu',
  propsList: [
    { prop: 'name', label: '菜单名称', align: 'center', slotName: 'name' },
    { prop: 'type', label: '菜单级别', align: 'center', width: '100px', slotName: 'type' },
    { prop: 'url', label: '路径', align: 'center', slotName: 'url' },
    { prop: 'icon', label: '图标', align: 'center', slotName: 'icon' },
    { prop: 'sort', label: '排序', align: 'center', slotName: 'sort' },
    { type: 'switch', prop: 'enable', label: '状态', align: 'center', width: '100px', slotName: 'enable' },
    { prop: 'permission', label: '权限', align: 'center', slotName: 'permission' },
    { prop: 'createAt', label: '创建时间', align: 'center', width: '200px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', align: 'center', width: '200px', slotName: 'updateAt' },
    {
      type: 'operate',
      prop: 'operate',
      label: '操作',
      align: 'center',
      slotName: 'operate'
    }
  ],
  table: {
    treeProps: {
      children: 'children',
      hasChildren: 'hasChildren'
    },
    rowKey: 'id'
  }
}

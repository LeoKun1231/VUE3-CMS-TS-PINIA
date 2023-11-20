/*
 * @Author: hqk
 * @Date: 2023-01-06 20:47:14
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 15:26:49
 * @Description:
 */

import type { SearchConfig } from '@/types/config/seach.config'

export const searchConfig: SearchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '用户名',
      placeholder: '请输入查询的用户名称'
    },
    {
      type: 'input',
      prop: 'realname',
      label: '真实姓名',
      placeholder: '请输入查询的真实姓名'
    },
    {
      type: 'input',
      prop: 'cellphone',
      label: '手机号码',
      placeholder: '请输入查询的手机号码'
    },
    {
      type: 'select',
      prop: 'enable',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { label: '启用', value: '1' },
        { label: '禁用', value: '0' }
      ]
    },
    {
      type: 'select',
      prop: 'roleId',
      label: '角色',
      placeholder: '请选择状态',
      options: []
    },
    {
      type: 'select',
      prop: 'departmentId',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    },
    {
      type: 'date-picker',
      prop: 'updateAt',
      label: '更新时间'
    }
  ]
}

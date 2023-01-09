/*
 * @Author: hqk
 * @Date: 2023-01-06 20:47:14
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:27:25
 * @Description:
 */

import type { SearchConfig } from '@/types/config/seach.config'

export const searchConfig: SearchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeholder: '请输入查询的角色名称'
    },
    {
      type: 'input',
      prop: 'intro',
      label: '权限介绍',
      placeholder: '请输入查询的权限介绍'
    },

    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

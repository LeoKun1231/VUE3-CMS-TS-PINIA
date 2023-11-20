/*
 * @Author: hqk
 * @Date: 2023-01-06 20:47:14
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 14:21:53
 * @Description:
 */

import type { SearchConfig } from '@/types/config/seach.config'

export const searchConfig: SearchConfig = {
  formItems: [
    {
      type: 'number',
      prop: 'oldPrice',
      label: '原价格'
    },
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeholder: '请输入查询的商品名称'
    },
    {
      type: 'number',
      prop: 'newPrice',
      label: '新价格'
    },
    {
      type: 'input',
      prop: 'address',
      label: '商品地址',
      placeholder: '请输入查询的商品地址'
    },
    {
      type: 'number',
      prop: 'inventoryCount',
      label: '库存'
    },
    {
      type: 'select',
      prop: 'status',
      label: '状态',
      options: [
        { value: '1', label: '可用' },
        { value: '0', label: '下架' }
      ]
    },
    {
      type: 'number',
      prop: 'saleCount',
      label: '销量'
    },
    {
      type: 'date-picker',
      prop: 'createAt',
      label: '创建时间'
    },

    {
      type: 'number',
      prop: 'favorCount',
      label: '收藏'
    },
    {
      type: 'date-picker',
      prop: 'updateAt',
      label: '更新时间'
    },
    {
      type: 'select',
      prop: 'categoryId',
      label: '商品种类',
      options: []
    }
  ]
}

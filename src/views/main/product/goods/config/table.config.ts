/*
 * @Author: hqk
 * @Date: 2023-01-05 20:44:03
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 19:37:02
 * @Description:
 */

import type { TableConfig } from '@/types/config/table.config'

export const tableConfig: TableConfig = {
  header: {
    title: '商品列表',
    btnText: '新建商品'
  },
  pageName: 'goods',
  propsList: [
    { prop: 'name', label: '商品名称', align: 'center', width: '120px', slotName: 'name', showOverflowTooltip: true },
    { prop: 'oldPrice', label: '原价格', align: 'center', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '新价格', align: 'center', slotName: 'newPrice' },
    { prop: 'desc', label: '商品描述', align: 'center', width: '120px', slotName: 'desc', showOverflowTooltip: true },
    { type: 'switch', prop: 'status', label: '状态', align: 'center', width: '80px', slotName: 'status' },
    { prop: 'imgUrl', label: '图片', minWidth: '200px', align: 'center', slotName: 'imgUrl' },
    { prop: 'inventoryCount', label: '库存', align: 'center', slotName: 'inventoryCount' },
    { prop: 'saleCount', label: '销量', align: 'center', slotName: 'saleCount' },
    { prop: 'favorCount', label: '收藏', align: 'center', slotName: 'favorCount' },
    { prop: 'address', label: '地址', align: 'center', slotName: 'address' },
    { prop: 'createAt', label: '创建时间', align: 'center', width: '200px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', align: 'center', width: '200px', slotName: 'updateAt' },
    {
      type: 'operate',
      prop: 'operate',
      label: '操作',
      minWidth: '200px',
      align: 'center',
      slotName: 'operate'
    }
  ]
}

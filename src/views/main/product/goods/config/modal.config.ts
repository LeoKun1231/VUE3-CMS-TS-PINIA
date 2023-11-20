/*
 * @Author: hqk
 * @Date: 2023-01-08 14:58:35
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-14 20:22:04
 * @Description:
 */
import type { ModalConfig } from '@/types/config/modal.config'

export const modalConfig: ModalConfig = {
  pageName: 'goods',
  title: '新建商品',
  formItems: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    },
    {
      type: 'select',
      label: '商品种类',
      prop: 'categoryId',
      placeholder: '请选择商品种类',
      options: []
    },
    {
      type: 'input',
      label: '商品原价格',
      prop: 'oldPrice',
      placeholder: '请输入商品原价格'
    },
    {
      type: 'input',
      label: '商品新价格',
      prop: 'newPrice',
      placeholder: '请输入商品新价格'
    },
    {
      type: 'input',
      label: '商品描述',
      prop: 'desc',
      placeholder: '请输入商品描述'
    },
    {
      type: 'select',
      label: '商品状态',
      prop: 'status',
      placeholder: '请选择商品状态',
      options: [
        { value: '1', label: '可用' },
        { value: '0', label: '下架' }
      ]
    },
    {
      type: 'upload',
      label: '商品图片地址',
      prop: 'imgUrl',
      placeholder: '请输入商品图片地址'
    },
    {
      type: 'input',
      label: '商品库存',
      prop: 'inventoryCount',
      placeholder: '请输入商品库存'
    },
    {
      type: 'input',
      label: '商品销量',
      prop: 'saleCount',
      placeholder: '请输入商品销量'
    },
    {
      type: 'input',
      label: '商品收藏量',
      prop: 'favorCount',
      placeholder: '请输入商品收藏量'
    },
    {
      type: 'input',
      label: '商品地址',
      prop: 'address',
      placeholder: '请输入商品地址'
    }
  ]
}

/*
 * @Author: hqk
 * @Date: 2023-01-08 14:58:35
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:52:23
 * @Description:
 */
import type { ModalConfig } from '@/types/config/modal.config'

export const modalConfig: ModalConfig = {
  pageName: 'category',
  title: '商品',
  formItems: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    }
  ]
}

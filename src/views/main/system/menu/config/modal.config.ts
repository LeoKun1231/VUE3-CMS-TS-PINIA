/*
 * @Author: hqk
 * @Date: 2023-01-08 14:58:35
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-10 19:59:21
 * @Description:
 */
import type { ModalConfig } from '@/types/config/modal.config'

export const modalConfig: ModalConfig = {
  pageName: 'menu',
  title: '新建菜单',
  formItems: [
    {
      type: 'input',
      label: '菜单名称',
      prop: 'name',
      placeholder: '请输入菜单名称'
    },
    {
      type: 'select',
      label: '菜单级别',
      prop: 'type',
      placeholder: '请选择菜单级别',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' }
      ]
    },
    {
      type: 'input',
      label: '菜单路径',
      prop: 'url',
      placeholder: '请输入菜单路径'
    },
    {
      type: 'input',
      label: '排序',
      prop: 'sort',
      placeholder: '请输入排序'
    },
    {
      type: 'custom',
      label: '图标',
      prop: 'icon',
      placeholder: '请输入图标'
    },
    {
      type: 'custom',
      label: '上级菜单',
      prop: 'parentId',
      placeholder: '请输入上级菜单'
    },
    {
      type: 'input',
      label: '权限',
      prop: 'permission',
      placeholder: '请输入权限'
    }
  ]
}

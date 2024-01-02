/*
 * @Author: hqk
 * @Date: 2023-01-08 14:58:35
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:29:42
 * @Description:
 */
import type { ModalConfig } from '@/types/config/modal.config'

export const modalConfig: ModalConfig = {
  pageName: 'role',
  title: '角色',
  formItems: [
    {
      type: 'input',
      label: '角色名称',
      prop: 'name',
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      label: '权限介绍',
      prop: 'intro',
      placeholder: '请输入权限介绍'
    },
    {
      type: 'custom',
      label: '菜单列表',
      prop: 'menuList'
    }
  ]
}

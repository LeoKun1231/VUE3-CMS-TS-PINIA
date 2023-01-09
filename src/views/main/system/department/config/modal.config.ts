/*
 * @Author: hqk
 * @Date: 2023-01-08 14:58:35
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 11:00:36
 * @Description:
 */
import type { ModalConfig } from '@/types/config/modal.config'

export const modalConfig: ModalConfig = {
  pageName: 'department',
  title: '新建部门',
  formItems: [
    { type: 'input', label: '部门名称', prop: 'name', placeholder: '请输入部门名称', initialValue: '1' },
    { type: 'select', label: '上级部门', prop: 'parentId', placeholder: '请选择上级部门', options: [] },
    { type: 'input', label: '领导名称', prop: 'leader', placeholder: '请输入领导名称' }
  ]
}

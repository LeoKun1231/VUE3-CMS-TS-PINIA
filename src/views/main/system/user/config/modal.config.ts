/*
 * @Author: hqk
 * @Date: 2023-01-08 14:58:35
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 17:56:06
 * @Description:
 */
import type { ModalConfig } from '@/types/config/modal.config'

export const modalConfig: ModalConfig = {
  pageName: 'users',
  title: '新建用户',
  formItems: [
    { type: 'input', label: '用户名', prop: 'name', placeholder: '请输入用户名' },
    { type: 'input', label: '真实姓名', prop: 'realname', placeholder: '请输入真实姓名' },
    { type: 'input', label: '密码', prop: 'password', placeholder: '请输入密码' },
    { type: 'input', label: '电话号码', prop: 'cellphone', placeholder: '请输入电话号码' },
    { type: 'select', label: '角色', prop: 'roleId', placeholder: '请选择角色', options: [] },
    { type: 'select', label: '部门', prop: 'departmentId', placeholder: '请选择部门', options: [] }
  ]
}

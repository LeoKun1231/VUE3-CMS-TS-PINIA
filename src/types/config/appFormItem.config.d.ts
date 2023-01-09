/*
 * @Author: hqk
 * @Date: 2023-01-08 15:13:48
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 16:59:31
 * @Description:
 */

import type { FormItemProps } from 'element-plus'

interface SelectOptions {
  label: string
  value: string
}

export interface AppFormItems extends Partial<FormItemProps> {
  initialValue?: string
  type?: 'input' | 'select' | 'date-picker'
  placeholder?: string
  options?: SelectOptions[]
}

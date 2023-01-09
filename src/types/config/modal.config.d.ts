/*
 * @Author: hqk
 * @Date: 2023-01-08 14:57:26
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-08 15:15:35
 * @Description:
 */

import type { AppFormItems } from './appFormItem.config'

export interface ModalConfig {
  pageName: string
  title: string
  formItems: AppFormItems[]
}

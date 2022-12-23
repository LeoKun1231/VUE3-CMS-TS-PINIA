/*
 * @Author: hqk
 * @Date: 2022-12-23 12:36:09
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 12:43:00
 * @Description:
 */

import type { App } from 'vue'
import resgisterIcons from './register-icons'

export default function registerGlobal(app: App<Element>) {
  app.use(resgisterIcons)
}

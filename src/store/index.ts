/*
 * @Author: hqk
 * @Date: 2022-12-21 18:05:02
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 18:21:04
 * @Description:
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'
import useLoginStore from './login/login'

const store = createPinia()

//持久化 也可以选择vueuse
store.use(piniaPluginPersistedstate)

export default function registerStore(app: App<Element>) {
  app.use(store)

  //在这里读取本地用户路由
  const loginState = useLoginStore()
  if (loginState.token && loginState.token.length > 0) {
    loginState.refreshData()
  }
}

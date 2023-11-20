/*
 * @Author: hqk
 * @Date: 2022-12-20 21:47:04
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-16 23:41:06
 * @Description:
 */
import '@unocss/reset/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'

import '@/assets/css/index.less'
import registerGlobal from './global'
import router from './router'
import store from './store'

import 'uno.css'

const app = createApp(App)
app.use(registerGlobal)
app.use(store)

app.use(router)
app.mount('#app')

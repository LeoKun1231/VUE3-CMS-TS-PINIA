/*
 * @Author: hqk
 * @Date: 2022-12-20 21:47:04
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 12:44:12
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import '@/assets/css/index.less'
import store from './store'
import router from './router'
import registerGlobal from './global'

const app = createApp(App)
app.use(registerGlobal)
app.use(store)

app.use(router)
app.mount('#app')

/*
 * @Author: hqk
 * @Date: 2022-12-20 21:47:04
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-21 21:50:35
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import '@/assets/css/index.less'
import store from './store'
import router from './router'
createApp(App).use(store).use(router).mount('#app')

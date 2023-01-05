/*
 * @Author: hqk
 * @Date: 2022-12-21 19:09:44
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-02 18:46:55
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { firstShowMenu } from '@/utils/map-routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: []
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  const { token } = useLocalStorage('login', { token: '' }).value
  if (to.path == '/main' && !token) {
    return '/login'
  }
  //如果是第一次进来，则跳转到第一个菜单
  if (to.path == '/main') {
    return firstShowMenu.url
  }
})

export default router

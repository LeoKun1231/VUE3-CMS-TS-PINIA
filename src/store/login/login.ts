/*
 * @Author: hqk
 * @Date: 2022-12-23 17:36:44
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-18 13:58:02
 * @Description:
 */
import router from '@/router'
import { accountLoginRequest, getUserInfoRequest, getUserMenusRequest } from '@/services/login/login'
import type { LoginAccount, MenuInfo, UserInfo } from '@/types'
import mapMenu2Routes from '@/utils/map-util'
import { defineStore } from 'pinia'
import useMainStore from '../main/main'

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      token: '',
      isLogining: false,
      userInfo: {} as UserInfo,
      menuInfo: [] as MenuInfo[]
    }
  },
  actions: {
    async accountLoginAction(account: LoginAccount) {
      this.isLogining = true
      // 1.登录拿到token和用户id
      try {
        const {
          data: { token, id }
        } = await accountLoginRequest(account)
        this.token = token
        // 2.根据用户id请求用户信息
        const { data: userInfo } = await getUserInfoRequest(id)
        this.userInfo = userInfo
        //3.根据用户角色id请求菜单
        const { data: menuInfo } = await getUserMenusRequest(userInfo.role.id)

        // 4.根据用户菜单匹配本地route动态注册路由
        this.menuInfo = menuInfo
        this.refreshData()

        this.isLogining = false
        ElMessage.success({ message: '登陆成功' })
        router.push({ path: '/main' })
      } catch (error) {
        this.isLogining = false
      }
    },
    refreshData() {
      // 防止刷新数据丢失
      // 1. 从菜单信息中遍历得出路由，动态注册路由
      const mainRoutes = mapMenu2Routes(this.menuInfo)
      mainRoutes.forEach((mainRoutesItem) => router.addRoute('main', mainRoutesItem))

      useLocalStorage('mainRoutes', mainRoutes)

      //2.获取部门和角色列表
      const mainStore = useMainStore()
      mainStore.postAllListAction()
    }
  },
  persist: {
    paths: ['token', 'userInfo', 'menuInfo'],
    key: 'login'
  }
})

export default useLoginStore

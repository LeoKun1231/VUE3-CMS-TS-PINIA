/*
 * @Author: hqk
 * @Date: 2022-12-21 19:28:46
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-15 11:19:13
 * @Description:
 */
import router from '@/router'
import useLoginStore from '@/store/login/login'
import { AxiosError } from 'axios'
import { BASE_URL, TIME_OUT } from './config'
import AppRequest from './request'

let ElLoadingInstance: any = null
let skipError: boolean = false

const appRequest = new AppRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      // console.log('实例请求成功')
      if (config.skipError != undefined) {
        skipError = config.skipError
      }
      if (config!.showLoading) {
        ElLoadingInstance = ElLoading.service({
          fullscreen: true,
          lock: true,
          text: '加载中...',
          background: 'rgba(0, 0, 0, 0.5)'
        })
      }
      //添加token
      const loginStore = useLoginStore()
      if (loginStore.token.length > 0 && config.headers) {
        config!.headers.Authorization = 'Bearer ' + loginStore.token
      }
      return config
    },
    responseSuccessFn(res) {
      if (res instanceof AxiosError) {
        if (skipError) {
          skipError = false
          return res
        }
        if (ElLoadingInstance) {
          ElLoadingInstance.close()
        }
        //如果是401，则跳转到登录页面
        if (res.response?.status == 401) {
          ElMessage.error({
            key: '401',
            grouping: true,
            message: res.response?.data?.message
          })

          router.replace('/login')
          return res
        }
        ElMessage.error(res.response?.data?.message)

        return res
      }
      if (ElLoadingInstance) {
        ElLoadingInstance.close()
      }
      return res
    }
  }
})

export default appRequest

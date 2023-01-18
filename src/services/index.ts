/*
 * @Author: hqk
 * @Date: 2022-12-21 19:28:46
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-15 17:34:31
 * @Description:
 */
import useLoginStore from '@/store/login/login'
import { BASE_URL, TIME_OUT } from './config'
import AppRequest from './request'

let ElLoadingInstance: any = null

const appRequest = new AppRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      // console.log('实例请求成功')
      ElLoadingInstance = ElLoading.service({
        fullscreen: true,
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.5)'
      })
      //添加token
      const loginStore = useLoginStore()
      if (loginStore.token.length > 0 && config.headers) {
        config.headers.Authorization = 'Bearer ' + loginStore.token
      }
      return config
    },
    responseSuccessFn(res) {
      // console.log('实例响应成功')
      ElLoadingInstance.close()
      return res
    }
  }
})

export default appRequest

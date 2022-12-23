/*
 * @Author: hqk
 * @Date: 2022-12-21 19:28:46
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 15:10:02
 * @Description:
 */
import { BASE_URL, TIME_OUT } from './config'
import AppRequest from './request'

const appRequest = new AppRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      // console.log('实例请求成功')
      return config
    },
    responseSuccessFn(res) {
      // console.log('实例响应成功')
      return res
    }
  }
})

export default appRequest

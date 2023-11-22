/*
 * @Author: hqk
 * @Date: 2022-12-21 19:35:13
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-15 09:59:08
 * @Description:
 */
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface AppInterceptor<T> {
  requestSuccessFn?: (config: InternalAxiosRequestConfig & { showLoading?: boolean }) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export default interface AppRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AppInterceptor<T>
  showLoading?: boolean
}

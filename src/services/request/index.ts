import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type AppRequestConfig from '../config/type'

class AppRequest {
  instance: AxiosInstance
  constructor(config: AppRequestConfig) {
    this.instance = axios.create(config)

    //全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('全局请求成功')
        return config
      },
      (err) => {
        console.log('全局请求失败')

        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('全局响应成功')
        return res.data
      },
      (err) => {
        // console.log('全局响应成功')
        return err
      }
    )

    // 实例拦截器
    this.instance.interceptors.request.use(config.interceptors?.requestSuccessFn, config.interceptors?.requestFailureFn)
    this.instance.interceptors.response.use(config.interceptors?.responseSuccessFn, config.interceptors?.responseFailureFn)
  }

  request<T = any>(config: AppRequestConfig<T>) {
    //方法拦截器
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      return this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: AppRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: AppRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: AppRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: AppRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default AppRequest

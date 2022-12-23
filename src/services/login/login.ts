/*
 * @Author: hqk
 * @Date: 2022-12-23 17:35:00
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 17:53:11
 * @Description:
 */
import type { ILoginAccount, ILoginData } from '@/types'
import appRequest from '..'

export function accountLoginRequest(account: ILoginAccount) {
  return appRequest.post<ILoginData>({
    url: '/login',
    data: account
  })
}

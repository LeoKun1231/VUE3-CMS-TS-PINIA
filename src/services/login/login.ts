/*
 * @Author: hqk
 * @Date: 2022-12-23 17:35:00
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-24 14:48:03
 * @Description:
 */
import type { LoginAccount, LoginData, MenuInfoData, UserInfoData } from '@/types'
import appRequest from '..'

export function accountLoginRequest(account: LoginAccount) {
  return appRequest.post<LoginData>({
    url: '/login',
    data: account
  })
}

export function getUserInfoRequest(id: number) {
  return appRequest.get<UserInfoData>({
    url: '/users/' + id
  })
}

export function getUserMenusRequest(id: number) {
  return appRequest.get<MenuInfoData>({
    url: `/role/` + id + `/menu`
  })
}

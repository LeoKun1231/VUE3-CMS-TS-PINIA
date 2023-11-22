/*
 * @Author: hqk
 * @Date: 2022-12-23 17:35:00
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-24 14:48:03
 * @Description:
 */
import type { CheckStatus, GenerateCodeInfo, LoginAccount, LoginInfo, MenuInfo, UserInfo } from '@/types'
import appRequest from '..'

export function accountLoginRequest(account: LoginAccount) {
  return appRequest.post<LoginInfo>({
    url: '/login',
    data: account
  })
}

export function getUserInfoRequest(id: number) {
  return appRequest.get<UserInfo>({
    url: '/users/' + id
  })
}

export function getUserMenusRequest(id: number) {
  return appRequest.get<MenuInfo>({
    url: `/role/` + id + `/menu`
  })
}

export function generateQrcodeRequest() {
  return appRequest.get<GenerateCodeInfo>({
    url: '/qrcode/generate'
  })
}

export function checkStatusRequest(id: string) {
  return appRequest.get<CheckStatus>({
    url: '/qrcode/check/' + id,
    showLoading: false
  })
}

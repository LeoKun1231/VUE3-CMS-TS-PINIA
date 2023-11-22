/*
 * @Author: hqk
 * @Date: 2023-01-04 19:31:24
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 18:32:02
 * @Description:
 */
import type { CreateUser, PatchUser, SystemUserList } from '@/types'
import appRequest from '../..'

export function postUserList(data: any) {
  return appRequest.post<SystemUserList>({
    url: '/users/list',
    data
  })
}

export function createUser(data: CreateUser) {
  return appRequest.post({
    url: '/users',
    data
  })
}

export function deleteUserById(id: number) {
  return appRequest.delete({
    url: `/users/${id}`
  })
}

export function patchUserById(id: number, data: PatchUser) {
  return appRequest.patch({
    url: `/users/${id}`,
    data
  })
}

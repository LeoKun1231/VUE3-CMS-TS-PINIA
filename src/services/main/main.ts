/*
 * @Author: hqk
 * @Date: 2023-01-05 14:21:06
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-11 21:23:50
 * @Description:
 */
import appRequest from '..'
import type { DepartmentListData, MenuListData, RoleListData } from '@/types'

export function postRoleList() {
  return appRequest.post<RoleListData>({
    url: '/role/list',
    data: {
      offset: 0,
      size: 1000
    }
  })
}

export function postDepartmentList() {
  return appRequest.post<DepartmentListData>({
    url: '/department/list',
    data: {
      offset: 0,
      size: 1000
    }
  })
}

export function postMenuList() {
  return appRequest.post<MenuListData>({
    url: '/menu/list'
  })
}

export function createNewData(pageName: string, data: any) {
  return appRequest.post({
    url: `/${pageName}`,
    data
  })
}

export function patchData(pageName: string, id: number, data: any) {
  return appRequest.patch({
    url: `/${pageName}/${id}`,
    data
  })
}

export function queryDataList(pageName: string, data: any) {
  return appRequest.post({
    url: `/${pageName}/list`,
    data
  })
}

export function deleteDataById(pageName: string, id: number) {
  return appRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function queryDataById(pageName: string, id: number) {
  return appRequest.get({
    url: `/${pageName}/${id}`
  })
}

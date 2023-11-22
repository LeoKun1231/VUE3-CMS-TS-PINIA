/*
 * @Author: hqk
 * @Date: 2023-01-05 14:21:06
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-11 21:23:50
 * @Description:
 */
import type { DepartmentList, ICategoryListItem, MenuList, RoleList } from '@/types'
import appRequest from '..'

export function postRoleList() {
  return appRequest.post<RoleList>({
    url: '/role/list',
    data: {
      offset: 0,
      size: 1000
    }
  })
}

export function postDepartmentList() {
  return appRequest.post<DepartmentList>({
    url: '/department/list',
    data: {
      offset: 0,
      size: 1000
    }
  })
}

export function postMenuList() {
  return appRequest.post<MenuList>({
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

export function queryCategoryList() {
  return appRequest.get<ICategoryListItem[]>({
    url: '/category/all'
  })
}

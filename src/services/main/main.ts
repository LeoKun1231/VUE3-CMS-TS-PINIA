/*
 * @Author: hqk
 * @Date: 2023-01-05 14:21:06
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 14:53:20
 * @Description:
 */
import appRequest from '..'
import type { DepartmentListData, RoleListData } from '@/types'

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

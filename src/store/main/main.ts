/*
 * @Author: hqk
 * @Date: 2022-12-26 13:28:47
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 15:03:38
 * @Description:
 */
import { postDepartmentList, postRoleList } from '@/services/main/main'
import type { RoleInfo } from '@/types'
import { defineStore } from 'pinia'

const useMainStore = defineStore('main', () => {
  //判断菜单是否展开
  const isMenuExpand = ref(false)

  //请求角色列表
  const roleList = ref<RoleInfo[]>()
  //角色列表
  const departmentList = ref()
  async function postRoleAndDepartmentListAction() {
    const roleListRes = await postRoleList()
    const departmentListRes = await postDepartmentList()
    roleList.value = roleListRes.data?.list
    departmentList.value = departmentListRes.data?.list
  }

  return {
    isMenuExpand,
    roleList,
    departmentList,
    postRoleAndDepartmentListAction
  }
})

export default useMainStore

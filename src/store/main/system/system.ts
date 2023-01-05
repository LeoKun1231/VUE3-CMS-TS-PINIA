/*
 * @Author: hqk
 * @Date: 2023-01-05 10:59:46
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 17:47:59
 * @Description:
 */
import { createUser, deleteUserById, patchUserById, postUserList } from '@/services/main/system/system'
import type { SystemUserInfo, CreateUser, PatchUser } from '@/types'
import { defineStore } from 'pinia'

const useSystemStore = defineStore('system', () => {
  const userList = ref<SystemUserInfo[]>()
  const userCounts = ref(0)
  const pageSize = ref<number>(10)
  const currentPage = ref<number>(1)

  //请求用户列表
  async function postUserListAction(data: any = { size: 10, offset: 0 }) {
    const {
      data: { list, totalCount }
    } = await postUserList(data)
    userList.value = list
    userCounts.value = totalCount
  }

  //创建用户
  async function createUserAction(data: CreateUser) {
    const res = await createUser(data)
    refreshUserList(res)
  }

  //删除用户
  async function deleteUserAction(id: number) {
    const res = await deleteUserById(id)
    refreshUserList(res)
  }

  //修改用户
  async function patchUserAction(id: number, userInfo: PatchUser) {
    const res = await patchUserById(id, userInfo)
    refreshUserList(res)
  }

  //刷新用户列表
  function refreshUserList(res: any) {
    if (res.code == 0) {
      ElMessage.success(res.data)
      //删除成功，则重新请求列表
      postUserListAction()
    } else {
      ElMessage.error(res.data)
    }
  }

  return {
    pageSize,
    currentPage,
    userList,
    userCounts,
    postUserListAction,
    deleteUserAction,
    createUserAction,
    patchUserAction
  }
})

export default useSystemStore

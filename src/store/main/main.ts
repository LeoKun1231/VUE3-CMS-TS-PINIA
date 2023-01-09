/*
 * @Author: hqk
 * @Date: 2022-12-26 13:28:47
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:16:23
 * @Description:
 */
import { createNewData, deleteDataById, patchData, postDepartmentList, postRoleList, queryDataList } from '@/services/main/main'
import type { RoleInfo, DepartmentInfo } from '@/types'
import { defineStore } from 'pinia'

const useMainStore = defineStore('main', () => {
  //判断菜单是否展开
  const isMenuExpand = ref(false)

  //请求角色列表
  const roleList = ref<RoleInfo[]>()
  //角色列表
  const departmentList = ref<DepartmentInfo[]>()
  async function postRoleAndDepartmentListAction() {
    const roleListRes = await postRoleList()
    const departmentListRes = await postDepartmentList()
    roleList.value = roleListRes.data?.list
    departmentList.value = departmentListRes.data?.list
  }

  //通用信息
  const dataList = ref([])
  const count = ref(0)
  const pageSize = ref(10)
  const currentPage = ref(1)

  //创建新的数据
  async function createNewDataAction(pageName: string, data: any) {
    const res = await createNewData(pageName, data)
    showMessage(res)
    queryDataListAction(pageName)
  }

  //修改数据
  async function patchDataAction(pageName: string, id: number, data: any) {
    const res = await patchData(pageName, id, data)
    showMessage(res)
    queryDataListAction(pageName)
  }

  //查询数据
  async function queryDataListAction(pageName: string, data?: any) {
    const res = await queryDataList(pageName, {
      size: pageSize.value,
      offset: (currentPage.value - 1) * pageSize.value,
      ...data
    })
    dataList.value = res.data.list
    count.value = res.data.totalCount
  }

  //删除数据
  async function deleteDataByIdAction(pageName: string, id: number) {
    const res = await deleteDataById(pageName, id)
    showMessage(res)
    queryDataListAction(pageName)
  }

  function showMessage(res: any) {
    if (res.code == 0) {
      ElMessage.success(res.data)
    } else {
      ElMessage.error(res.data)
    }
  }

  function resetPageAction() {
    pageSize.value = 10
    currentPage.value = 1
  }

  return {
    isMenuExpand,
    roleList,
    departmentList,
    postRoleAndDepartmentListAction,
    dataList,
    count,
    pageSize,
    currentPage,
    createNewDataAction,
    patchDataAction,
    queryDataListAction,
    deleteDataByIdAction,
    resetPageAction
  }
})

export default useMainStore

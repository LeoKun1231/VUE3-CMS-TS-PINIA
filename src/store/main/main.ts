/*
 * @Author: hqk
 * @Date: 2022-12-26 13:28:47
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-15 10:39:16
 * @Description:
 */
import {
  createNewData,
  deleteDataById,
  patchData,
  postDepartmentList,
  postMenuList,
  postRoleList,
  queryCategoryList,
  queryDataList
} from '@/services/main/main'
import type { DepartmentInfo, RoleInfo } from '@/types'
import type { ICategoryListItem, MenuInfo } from '@/types/main/main'
import { defineStore } from 'pinia'

const useMainStore = defineStore('main', () => {
  //判断菜单是否展开
  const isMenuExpand = ref(false)

  const isLoading = ref(false)

  //请求角色列表
  const roleList = ref<RoleInfo[]>()
  //角色列表
  const departmentList = ref<DepartmentInfo[]>()

  const categoryList = ref<ICategoryListItem[]>([])

  //菜单列表
  const menuList = ref<MenuInfo[]>()

  async function postAllListAction() {
    const [roleListRes, departmentListRes, menuListRes, categoryListRes] = await Promise.all([
      postRoleList(),
      postDepartmentList(),
      postMenuList(),
      queryCategoryList()
    ])
    roleList.value = roleListRes.data?.list
    departmentList.value = departmentListRes.data?.list
    menuList.value = menuListRes.data?.list
    categoryList.value = categoryListRes.data
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
    resetPageAction()
    queryDataListAction(pageName)
    queryAgain(pageName)
  }

  //修改数据
  async function patchDataAction(pageName: string, id: number, data: any) {
    const res = await patchData(pageName, id, data)
    showMessage(res)
    queryDataListAction(pageName)
    queryAgain(pageName)
  }

  //查询数据
  async function queryDataListAction(pageName: string, data?: any) {
    isLoading.value = true
    const res = await queryDataList(pageName, {
      size: pageSize.value,
      offset: (currentPage.value - 1) * pageSize.value,
      ...data
    })
    dataList.value = res.data?.list
    count.value = res.data?.totalCount
    isLoading.value = false
  }

  //删除数据
  async function deleteDataByIdAction(pageName: string, id: number) {
    const res = await deleteDataById(pageName, id)
    showMessage(res)
    queryDataListAction(pageName)
    queryAgain(pageName)
  }

  //提示信息
  function showMessage(res: any) {
    if (res.code == 200) {
      ElMessage.success(res.message)
    }
  }

  //重置页码和大小
  function resetPageAction() {
    pageSize.value = 10
    currentPage.value = 1
  }

  async function postMenuListDataAction() {
    const menuListRes = await postMenuList()
    menuList.value = menuListRes.data?.list
  }

  async function queryCategoryListAction() {
    const categoryListRes = await queryCategoryList()
    categoryList.value = categoryListRes.data
  }

  async function postRoleListAction() {
    const roleListRes = await postRoleList()
    roleList.value = roleListRes.data?.list
  }

  async function postDepartmentListAction() {
    const departmentListRes = await postDepartmentList()
    departmentList.value = departmentListRes.data?.list
  }

  async function queryAllUserNameAction() {}

  //根据页面名称判断是否重新请求列表
  function queryAgain(pageName: string) {
    switch (pageName) {
      case 'department':
        postDepartmentListAction()
        break
      case 'role':
        postRoleListAction()
        break
      case 'menu':
        postMenuListDataAction()
        break
      case 'category':
        queryCategoryListAction()
        break
      default:
        break
    }
  }

  return {
    isLoading,
    isMenuExpand,
    roleList,
    departmentList,
    menuList,
    categoryList,
    postAllListAction,
    postMenuListDataAction,
    queryCategoryListAction,
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

/*
 * @Author: hqk
 * @Date: 2023-01-02 15:32:58
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-12 16:50:17
 * @Description:
 */

import type { RouteRecordRaw } from 'vue-router'

/**
 * @description:获取某路径下的所有route对象
 */
export function getLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', { eager: true })
  for (const file in files) {
    const module = files[file]
    localRoutes.push(module.default)
  }
  return localRoutes
}

export let firstShowMenu: any = null

/**
 * @description:将菜单数组转换成路由对象
 * @param {any} menuInfo
 * @return {*}
 */
export default function mapMenu2Routes(menuInfo: any[]) {
  // 1.获取router文件夹里的route对象
  const localRoutes = getLocalRoutes()

  // 2.根据用户菜单url匹配本地route对象 注册路由
  const mainRoutes: RouteRecordRaw[] = []

  let firstLevelRoute: any = null
  function recursionMenuInfo(menuInfo: any[], localRoutes: RouteRecordRaw[]) {
    for (const menuInfoItem of menuInfo) {
      // 1.获取当前匹配的路由
      const route = localRoutes.find((localRoutesItem) => localRoutesItem.path == menuInfoItem.url)
      // 2.记录当前的一级路由
      if (menuInfoItem.type == 1) {
        firstLevelRoute = menuInfoItem.url
      }
      // 3.找到匹配的路由
      if (route) {
        mainRoutes.push(route)
        if (!mainRoutes.find((item) => item.path === firstLevelRoute)) {
          //将一级路由添加到mainRoutes中，并重定向到默认的第一个子路由
          mainRoutes.push({ path: firstLevelRoute, redirect: route.path })
        }
      }

      //记录第一次进来所要展示的默认路由
      if (!firstShowMenu && route) firstShowMenu = menuInfoItem

      if (menuInfoItem.children?.length > 0) {
        recursionMenuInfo(menuInfoItem.children, localRoutes)
      }
    }
  }
  recursionMenuInfo(menuInfo, localRoutes)

  return mainRoutes
}

/**
 * @description:根据指定的路径匹配对应的菜单
 * @param {string} path
 * @param {any} routes
 * @return {*}
 */
export function mapPath2Menu(path: string, menus: any[]): any {
  let firstMenu: any = null
  function recursionMenu(menus: any[]) {
    for (const menu of menus) {
      if (menu.url == path && !firstMenu) {
        firstMenu = menu
      }
      if (menu.children?.length > 0) {
        recursionMenu(menu.children)
      }
    }
  }
  recursionMenu(menus)
  return firstMenu
}

/**
 * @description: 获取当前路径的菜单以及父菜单
 * @param {string} path
 * @param {any} menus
 * @return {*}
 */
export function mapPath2Breadcrumb(path: string, menus: any[]) {
  const breadcrumb: any[] = []
  for (const menu of menus) {
    for (const subMenu of menu.children) {
      if (subMenu.url == path) {
        breadcrumb.push({
          name: menu.name,
          url: menu.url
        })
        breadcrumb.push({
          name: subMenu.name
        })
      }
    }
  }
  return breadcrumb
}

export function mapMenuInfo2Tree(menuInfo: any[]) {
  function recursionMenuInfo(items: any[]) {
    for (const item of items) {
      if (item.children) {
        item.value = item.id
        item.label = item.name
        recursionMenuInfo(item.children ?? [])
      } else {
        item.value = item.id
        item.label = item.name
      }
    }
  }
  recursionMenuInfo(menuInfo)
  return menuInfo
}

export function mapMenuChecked(menuList: any[]) {
  const checkedId: number[] = []

  function recursionMenuList(items: any[]) {
    for (const item of items) {
      if (item.children) {
        recursionMenuList(item.children ?? [])
      } else {
        checkedId.push(item.id)
      }
    }
  }
  recursionMenuList(menuList)
  return checkedId
}

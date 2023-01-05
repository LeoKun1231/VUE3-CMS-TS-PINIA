/*
 * @Author: hqk
 * @Date: 2022-12-23 15:11:15
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-24 21:39:34
 * @Description:
 */
export interface LoginAccount {
  name: string
  password: string
}

export interface LoginInfo {
  id: number
  name: string
  token: string
}

export interface LoginData {
  code: number
  data: LoginInfo
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface Department {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface UserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}

export interface UserInfoData {
  code: string
  data: UserInfo
}

export interface MenuInfo {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: MenuInfoChildren[]
}

export interface MenuInfoChildren {
  id: number
  url: null | string
  name: string
  sort: number | null
  type: number
  children?: MenuInfoChildren[] | null
  parentId: number
  permission?: string
}

export interface MenuInfoData {
  code: string
  data: MenuInfo[]
}

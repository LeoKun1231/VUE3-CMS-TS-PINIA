export * from './system/system'

export interface RoleList {
  list: RoleInfo[]
  totalCount: number
}

export interface RoleInfo {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
  menuList: any[]
}

export interface DepartmentList {
  list: DepartmentInfo[]
  totalCount: number
}

export interface DepartmentInfo {
  id: number
  name: string
  parentId?: number
  createAt: string
  updateAt: string
  leader: string
}

export interface MenuList {
  list: MenuInfo[]
}

export interface MenuInfo {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  createAt: string
  updateAt: string
  children: MenuChildren[]
}

export interface MenuChildren {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children?: MenuChildren[]
  createAt: string
  parentId: number
  updateAt: string
  permission?: string
}

export interface ICategoryListItem {
  id: number
  name: string
}

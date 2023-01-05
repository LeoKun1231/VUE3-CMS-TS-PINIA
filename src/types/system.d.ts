export interface UserInfo {
  id: number
  name: string
  realname: string
  cellphone: any
  enable: number
  departmentId: number
  roleId: number
  createAt: Date
  updateAt: Date
}

export interface UserList {
  list: UserInfo[]
  totalCount: number
}

export interface UserListData {
  code: number
  data: UserList
}

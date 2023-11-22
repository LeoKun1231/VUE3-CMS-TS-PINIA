export interface SystemUserInfo {
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

export interface SystemUserList {
  list: SystemUserInfo[]
  totalCount: number
}

export interface CreateUser {
  name: string
  realname: string
  password: string
  cellphone: string
  departmentId: string
  roleId: string
}

export interface PatchUser extends Partial<Omit<CreateUser, 'password'>> {}

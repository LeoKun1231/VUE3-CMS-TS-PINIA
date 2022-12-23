/*
 * @Author: hqk
 * @Date: 2022-12-23 15:11:15
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 17:53:47
 * @Description:
 */
export interface ILoginAccount {
  name: string
  password: string
}

export interface ILoginData {
  code: number
  data: {
    id: number
    name: string
    token: string
  }
}

import { defineStore } from 'pinia'

import type { ILoginAccount } from '@/types'

import { accountLoginRequest } from '@/services/login/login'

const useLoginStore = defineStore('login', {
  state: () => {
    return {
      id: 0,
      name: '',
      token: ''
    }
  },
  actions: {
    async accountLoginAction(account: ILoginAccount) {
      const { data } = await accountLoginRequest(account)
      this.$patch(data)
    }
  },
  persist: {
    paths: ['token']
  }
})

export default useLoginStore

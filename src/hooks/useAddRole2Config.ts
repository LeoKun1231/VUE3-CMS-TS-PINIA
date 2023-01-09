import useMainStore from '@/store/main/main'

const useAddRole2Config = (modalConfig: any) => {
  const mainStore = useMainStore()

  const modalConfigRef = computed(() => {
    const roleList = mainStore.roleList!.map((item: any) => {
      return {
        label: item.name,
        value: item.id
      }
    })
    for (const item of modalConfig.formItems) {
      if (item.prop == 'roleId') {
        item.options?.push(...roleList)
      }
    }

    return modalConfig
  })
  return {
    modalConfigRef
  }
}

export default useAddRole2Config

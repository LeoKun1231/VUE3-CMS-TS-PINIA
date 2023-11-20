import useMainStore from '@/store/main/main'

const useAddRole2Config = (config: any) => {
  const mainStore = useMainStore()

  const configRef = computed(() => {
    const roleList =
      mainStore.roleList?.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        }
      }) || []
    for (const item of config.formItems) {
      if (item.prop == 'roleId') {
        item.options = [...roleList]
      }
    }
    return config
  })
  return {
    configRef
  }
}

export default useAddRole2Config

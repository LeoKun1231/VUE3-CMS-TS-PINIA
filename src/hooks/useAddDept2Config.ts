/*
 * @Author: hqk
 * @Date: 2023-01-09 17:20:04
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 19:14:00
 * @Description:
 */
import useMainStore from '@/store/main/main'

const useAddDept2Config = (modalConfig: any) => {
  const mainStore = useMainStore()

  const modalConfigRef = computed(() => {
    const departmentList = mainStore.departmentList!.map((item: any) => {
      return {
        label: item.name,
        value: item.id
      }
    })
    for (const item of modalConfig.formItems) {
      if (item.prop == 'parentId' || item.prop == 'departmentId') {
        item.options?.push(...departmentList)
      }
    }
    return modalConfig
  })
  return {
    modalConfigRef
  }
}

export default useAddDept2Config

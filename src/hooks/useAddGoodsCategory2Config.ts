/*
 * @Author: hqk
 * @Date: 2023-01-09 17:20:04
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-15 10:22:47
 * @Description:
 */
import useMainStore from '@/store/main/main'

const useAddGoodsCategoryConfig = (config: any) => {
  const mainStore = useMainStore()

  const configRef = computed(() => {
    const categoryList =
      mainStore.categoryList?.map((item: any) => {
        return {
          label: item.name,
          value: item.id
        }
      }) || []
    for (const item of config.formItems) {
      if (item.prop == 'categoryId') {
        item.options = [...categoryList]
      }
    }
    return config
  })
  return {
    configRef
  }
}

export default useAddGoodsCategoryConfig

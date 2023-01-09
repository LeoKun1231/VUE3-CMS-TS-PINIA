/*
 * @Author: hqk
 * @Date: 2023-01-09 11:52:19
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 11:57:52
 * @Description:
 */
import type PageContent from '@/components/page-content/page-content.vue'

const usePageContent = () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  function handleQuery(searchData: any) {
    pageContentRef.value?.queryDataList(searchData)
  }

  function handleReset() {
    pageContentRef.value?.resetDataList()
  }

  return {
    pageContentRef,
    handleQuery,
    handleReset
  }
}

export default usePageContent

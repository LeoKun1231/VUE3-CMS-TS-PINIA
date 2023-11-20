/*
 * @Author: hqk
 * @Date: 2023-01-09 11:52:19
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-09 11:57:52
 * @Description:
 */
import type PageContent from '@/components/page-content/page-content.vue'
import type { MaybeRef } from 'vue'
import { useToValueDeep } from './useToValueDeep'

type ResetCallback = () => void
const usePageContent = (otherSearch?: Record<string, MaybeRef>, resetCallback?: ResetCallback) => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  function handleQuery(searchData: any) {
    pageContentRef.value?.queryDataList({ ...searchData, ...useToValueDeep(otherSearch) })
  }

  function handleReset() {
    resetCallback && resetCallback()
    pageContentRef.value?.resetDataList()
  }

  return {
    pageContentRef,
    handleQuery,
    handleReset
  }
}

export default usePageContent

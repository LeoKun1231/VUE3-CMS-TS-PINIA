/*
 * @Author: hqk
 * @Date: 2023-01-09 11:52:29
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-11 17:57:19
 * @Description:
 */
import type PageModal from '@/components/page-modal/page-modal.vue'

type CreateCallBack = (data?: any) => void
type EditCallBack = (data?: any) => void

const usePageModal = (createCallBack?: CreateCallBack, editCallBack?: EditCallBack) => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  function handleCreate() {
    createCallBack && createCallBack()
    pageModalRef.value?.setDialogVisible()
  }

  function handleEdit(info: any) {
    editCallBack && editCallBack(info)
    pageModalRef.value?.setDialogVisible(false, info)
  }

  return {
    pageModalRef,
    handleCreate,
    handleEdit
  }
}

export default usePageModal

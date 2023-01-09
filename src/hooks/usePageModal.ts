import type PageModal from '@/components/page-modal/page-modal.vue'

const usePageModal = () => {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  function handleCreate() {
    pageModalRef.value?.setDialogVisible()
  }

  function handleEdit(info: any) {
    pageModalRef.value?.setDialogVisible(false, info)
  }

  return {
    pageModalRef,
    handleCreate,
    handleEdit
  }
}

export default usePageModal

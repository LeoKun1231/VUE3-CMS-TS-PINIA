<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:40
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-05 17:38:59
 * @Description:
-->
<script setup lang="ts">
import userSearch from './c-cpns/user-search.vue'
import userContent from './c-cpns/user-content.vue'
import userModal from './c-cpns/user-modal.vue'

const userModalRef = ref<InstanceType<typeof userModal>>()
function handleCreate() {
  userModalRef.value?.setDialogVisible()
}

function handleEdit(userInfo: any) {
  userModalRef.value?.setDialogVisible(false, userInfo)
}
</script>

<template>
  <div class="user">
    <user-search />
    <user-content class="mt-5" @create="handleCreate" @edit="handleEdit" />
    <user-modal ref="userModalRef" />
  </div>
</template>
<style scoped lang="less"></style>

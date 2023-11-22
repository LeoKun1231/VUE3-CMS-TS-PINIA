<!--
 * @Author: hqk
 * @Date: 2022-12-23 12:22:53
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-24 13:04:07
 * @Description:
-->
<script setup lang="ts">
import QRCODE from '@/assets/img/qrcode.png'
import { ScanStatusEnum } from '@/enums/scan-status.enum'
import { checkStatusRequest, generateQrcodeRequest } from '@/services/login/login'
import useLoginStore from '@/store/login/login'
const props = defineProps<{
  activeTabName: string
}>()

const id = ref('')
const url = ref('')
generateCode()

const refresh = () => {
  generateCode()
}

const loginStore = useLoginStore()
const currentStatus = ref<ScanStatusEnum>(ScanStatusEnum.NotScan)
const isLogin = ref(false)

async function checkStatus() {
  const { data } = await checkStatusRequest(id.value)
  const { status } = data
  currentStatus.value = status
  if (status == ScanStatusEnum.Confirmed) {
    clearInterval(timer)
    if (isLogin.value) return
    loginStore.accountLoginAction({
      name: 'admin1',
      password: '123456'
    })
    isLogin.value = true
  } else if (status == ScanStatusEnum.Expired) {
    clearInterval(timer)
  } else if (status == ScanStatusEnum.Canceled) {
    clearInterval(timer)
  }
}

let timer: any = null

watch(
  () => props.activeTabName,
  (val) => {
    if (val !== 'code') {
      if (timer) clearInterval(timer)
    } else {
      generateCode()
    }
  }
)

async function generateCode() {
  const { data } = await generateQrcodeRequest()
  id.value = data.id
  url.value = data.url

  if (timer) clearInterval(timer)
  timer = setInterval(() => {
    checkStatus()
  }, 1500)
}

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <div class="flex justify-center items-center flex-col w-250px h-205px">
    <div class="flex justify-end w-full"></div>
    <div class="w-full flex justify-center items-center">
      <div class="w-[70%] relative flex justify-center items-center flex-col">
        <img class="w-full cursor-pointer" :src="url || QRCODE" title="扫码登录" alt="QRcode" />
        <template v-if="currentStatus == ScanStatusEnum.Expired || currentStatus == ScanStatusEnum.Canceled">
          <div class="absolute w-full h-full bg-black opacity-50"></div>
          <div class="absolute w-full h-full text-white cursor-pointer text-lg flex justify-center items-center flex-col" @click="refresh">
            <template v-if="currentStatus == ScanStatusEnum.Expired">
              <div class="relative">二维码已过期</div>
              <div class="relative flex items-center">
                <span class="i-ep-refresh inline-block text-[16px] text-white cursor-pointer mr-4px"></span>
                <span>点击刷新</span>
              </div>
            </template>
            <template v-else>
              <div class="relative">已取消登录</div>
              <div class="relative flex items-center">
                <span class="i-ep-refresh inline-block text-[16px] text-white cursor-pointer mr-4px"></span>
                <span>点击刷新</span>
              </div>
            </template>
          </div>
        </template>
        <template v-else-if="currentStatus == ScanStatusEnum.Confirmed || currentStatus == ScanStatusEnum.Scanned">
          <div class="absolute w-full h-full bg-white opacity-80"></div>
          <div class="absolute w-full h-full text-black text-lg font-bold flex justify-center items-center flex-col">
            <template v-if="currentStatus == ScanStatusEnum.Confirmed">
              <div class="relative flex items-center">
                <span class="i-ep-select inline-block text-[12px] text-black cursor-pointer mr-4px"></span>
                <span>登录成功</span>
              </div>
            </template>
            <template v-else>
              <div class="relative flex items-center">
                <span class="i-ep-select inline-block text-[12px] text-black cursor-pointer mr-4px"></span>
                <span>扫码成功</span>
              </div>
              <div class="relative">
                <span>请用手机授权登录</span>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

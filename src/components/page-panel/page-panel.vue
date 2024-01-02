<!--
 * @Author: hqk
 * @Date: 2023-01-12 20:04:09
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-13 17:21:43
 * @Description:
-->
<script setup lang="ts">
import type { GoodsAmountInfo } from '@/types/main/analysis/analysis'
import { useTransition, TransitionPresets } from '@vueuse/core'
import { formatIntNumber } from '@/utils/format-number'

interface Prop {
  goodsAmount: GoodsAmountInfo
}

const props = defineProps<Prop>()

const number1Ref = ref(0)
const number2Ref = ref(0)

watch(
  () => props.goodsAmount.number1,
  () => {
    nextTick(() => {
      number1Ref.value = props.goodsAmount.number1
    })
  },
  {
    immediate: true
  }
)
watch(
  () => props.goodsAmount.number2,
  () => {
    nextTick(() => {
      number2Ref.value = props.goodsAmount.number2
    })
  },
  {
    immediate: true
  }
)

const number1 = useTransition(number1Ref, { transition: TransitionPresets.easeInOutCubic, duration: 1000 })
const number2 = useTransition(number2Ref, { transition: TransitionPresets.easeInOutCubic, duration: 1000 })
</script>

<template>
  <div class="panel w-full bg-white py-4 px-8 shadow-lg">
    <div class="flex justify-between items-center">
      <div class="text-[#999] text-sm">{{ goodsAmount.title }}</div>
      <el-popover placement="top" width="auto" trigger="hover">
        <div class="text-center">{{ goodsAmount.tips }}</div>
        <template #reference>
          <el-icon>
            <i-ep-warning />
          </el-icon>
        </template>
      </el-popover>
    </div>
    <div class="text-2xl my-2">{{ '￥' + formatIntNumber(number1.toFixed(0)) }}</div>
    <el-divider />
    <div class="flex items-center h-7.5 text-[#666] text-xs">
      <div class="mr-4">{{ goodsAmount.subtitle }}</div>
      <div>{{ formatIntNumber(number2.toFixed(0)) }}</div>
      <div></div>
    </div>
  </div>
</template>
<style scoped lang="less">
.panel {
  .el-divider--horizontal {
    margin: 0;
  }
}
</style>

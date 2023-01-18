<!--
 * @Author: hqk
 * @Date: 2023-01-13 21:04:15
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-14 14:43:03
 * @Description:
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import BaseEchart from '..'
import type EchartValueType from '../type'

interface Prop {
  roseData: EchartValueType[]
}
const props = defineProps<Prop>()

const option = computed<EChartsOption>(() => ({
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: false, readOnly: false },
      restore: { show: false },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [30, 180],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 14
      },
      data: props.roseData
    }
  ]
}))
</script>

<template>
  <div class="rose-echart">
    <base-echart :echart-option="option" title="分类商品数量(玫瑰图)" />
  </div>
</template>
<style scoped lang="less"></style>

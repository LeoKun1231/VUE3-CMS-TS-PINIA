<!--
 * @Author: hqk
 * @Date: 2023-01-13 21:13:25
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-14 14:45:11
 * @Description:
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import BaseEchart from '..'

interface Prop {
  XData: string[]
  YData: number[]
}

const props = defineProps<Prop>()

const option = computed<EChartsOption>(() => ({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.XData
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.YData,
      type: 'line',
      areaStyle: {}
    }
  ]
}))
</script>

<template>
  <div class="rose-echart">
    <base-echart :echart-option="option" title="分类商品的销量" />
  </div>
</template>
<style scoped lang="less"></style>

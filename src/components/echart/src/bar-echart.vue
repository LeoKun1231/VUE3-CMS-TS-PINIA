<!--
 * @Author: hqk
 * @Date: 2023-01-13 21:13:45
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-16 13:28:57
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
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: props.XData,
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: props.XData.length
  },
  series: [
    {
      realtimeSort: true,
      name: '商品',
      type: 'bar',
      data: props.YData,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 6000,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
}))
</script>

<template>
  <div class="rose-echart">
    <base-echart :echart-option="option" title="分类商品的收藏" />
  </div>
</template>
<style scoped lang="less"></style>

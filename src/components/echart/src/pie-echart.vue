<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import BaseEchart from '..'
import type EchartValueType from '../type'

interface Prop {
  pieData: EchartValueType[]
}
const props = defineProps<Prop>()

const option = computed<EChartsOption>(() => ({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'horizontal',
    top: 8
  },
  series: [
    {
      name: '分类商品数量',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}))
</script>

<template>
  <div class="pie-echart">
    <base-echart :echart-option="option" title="分类商品数量(饼图)" />
  </div>
</template>
<style scoped lang="less"></style>

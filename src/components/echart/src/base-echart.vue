<!--
 * @Author: hqk
 * @Date: 2023-01-13 17:42:32
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-16 14:25:34
 * @Description:
-->
<script setup lang="ts">
import type { EChartsOption } from 'echarts'
import * as echarts from 'echarts'
import ChinaJSON from '../data/china.json'

interface Prop {
  echartOption: EChartsOption
  height?: string
  width?: string
  title: string
}

// 基于准备好的dom，初始化echarts实例
const echartRef = ref<HTMLElement>()

//注册地图
echarts.registerMap('china', ChinaJSON as any)

const props = withDefaults(defineProps<Prop>(), {
  height: '500px'
})

onMounted(() => {
  const myChart = echarts.init(echartRef.value!, 'light', {
    height: props.height,
    width: props.width
  })
  // 绘制图表
  watchEffect(() => {
    myChart.setOption(props.echartOption)
  })

  //监听窗口大小进行缩放
  useEventListener(window, 'resize', () => {
    myChart.resize()
  })
})
</script>

<template>
  <div class="bg-white p-4 shadow-lg">
    <div class="h-8 border-b">{{ title }}</div>
    <div class="echart w-full center h-fit rounded-xl" ref="echartRef"></div>
  </div>
</template>
<style scoped lang="less"></style>

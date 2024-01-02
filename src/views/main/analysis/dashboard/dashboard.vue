<!--
 * @Author: hqk
 * @Date: 2023-01-02 13:10:39
 * @LastEditors: Leo l024983409@qq.com
 * @LastEditTime: 2023-11-15 10:10:09
 * @Description:
-->
<script setup lang="ts">
import { BarEchart, LineEchart, MapEchart, PieEchart, RoseEchart } from '@/components/echart'
import PagePanel from '@/components/page-panel/page-panel.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'

const analysisStore = useAnalysisStore()

analysisStore.getDashBoardDataAction()

const goodsAddressSaleComputed = computed(() => {
  return (
    analysisStore.goodAddressSale?.map((item) => {
      return {
        value: item.count,
        name: item.address
      }
    }) || []
  )
})

const goodsCategoryCount = computed(() => {
  return (
    analysisStore.goodsCategoryCount?.map((item) => ({
      name: item.name,
      value: item.goodsCount
    })) || []
  )
})

const goodsCategorySale = computed(() => {
  const X = analysisStore.goodsCategorySale?.map((item) => item.name) || []
  const Y = analysisStore.goodsCategorySale?.map((item) => item.goodsCount) || []
  return { X, Y }
})
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-panel flex justify-between">
      <el-row class="w-full" :gutter="10">
        <template v-for="(item, index) in analysisStore.goodsAmountList" :key="index">
          <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
            <page-panel :goods-amount="item" :prefix="index == analysisStore.goodsAmountList.length - 1 ? '￥' : ''" />
          </el-col>
        </template>
      </el-row>
    </div>

    <div class="dashboard-echart mt-4">
      <el-row :gutter="10">
        <el-col :span="8"><pie-echart :pie-data="goodsCategoryCount" /> </el-col>
        <el-col :span="8"> <map-echart :map-data="goodsAddressSaleComputed" /></el-col>
        <el-col :span="8"> <rose-echart :rose-data="goodsCategoryCount" /></el-col>
        <el-col :span="12"> <line-echart :XData="goodsCategorySale.X" :YData="goodsCategorySale.Y" class="mt-4" /></el-col>
        <el-col :span="12"> <bar-echart :XData="goodsCategorySale.X" :YData="goodsCategorySale.Y" class="mt-4" /></el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

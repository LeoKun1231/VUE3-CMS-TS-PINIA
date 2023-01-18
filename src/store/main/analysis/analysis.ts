/*
 * @Author: hqk
 * @Date: 2023-01-13 13:26:23
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-13 21:39:24
 * @Description:
 */

import {
  getGoodAddressSale,
  getGoodsAmountList,
  getGoodsCategoryCount,
  getGoodsCategorySale,
  getGoodsCategoryFavor,
  getGoodsSaleTop10
} from '@/services/main/analysis/analysis'
import type { GoodsAddressSale, GoodsAmountInfo, GoodsCategory, GoodsCategoryFavor, GoodsSaleTop10 } from '@/types/main/analysis/analysis'
import { defineStore } from 'pinia'

const useAnalysisStore = defineStore('analysis', () => {
  const goodsAmountList = ref<GoodsAmountInfo[]>([])
  const goodAddressSale = ref<GoodsAddressSale[]>([])
  const goodsCategoryCount = ref<GoodsCategory[]>([])
  const goodsCategorySale = ref<GoodsCategory[]>([])
  const goodsCategoryFavor = ref<GoodsCategoryFavor[]>([])
  const goodsSaleTop10 = ref<GoodsSaleTop10[]>([])

  async function getGoodsAmountListAction() {
    const res = await getGoodsAmountList()
    goodsAmountList.value = res.data
  }
  async function getGoodsAddressSaleAction() {
    const res = await getGoodAddressSale()
    goodAddressSale.value = res.data
  }
  async function getGoodsCategoryCountAction() {
    const res = await getGoodsCategoryCount()
    goodsCategoryCount.value = res.data
  }
  async function getGoodsCategorySaleAction() {
    const res = await getGoodsCategorySale()
    goodsCategorySale.value = res.data
  }
  async function getGoodsCategoryFavorAction() {
    const res = await getGoodsCategoryFavor()
    goodsCategoryFavor.value = res.data
  }
  async function getGoodsSaleTop10Action() {
    const res = await getGoodsSaleTop10()
    goodsSaleTop10.value = res.data
  }

  async function getDashBoardDataAction() {
    getGoodsAmountListAction()
    getGoodsAddressSaleAction()
    getGoodsCategoryCountAction()
    getGoodsCategorySaleAction()
    getGoodsCategoryFavorAction()
    getGoodsSaleTop10Action()
  }

  return {
    goodsAmountList,
    goodAddressSale,
    goodsCategoryCount,
    goodsCategorySale,
    goodsCategoryFavor,
    goodsSaleTop10,
    getDashBoardDataAction
  }
})

export default useAnalysisStore

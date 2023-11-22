/*
 * @Author: hqk
 * @Date: 2023-01-13 13:26:23
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-13 21:30:25
 * @Description:
 */
import appRequest from '@/services'
import type { GoodsAddressSale, GoodsAmountInfo, GoodsCategory, GoodsCategoryFavor, GoodsSaleTop10 } from '@/types/main/analysis/analysis'

export function getGoodsAmountList() {
  return appRequest.get<GoodsAmountInfo>({
    url: '/goods/amount/list'
  })
}

export function getGoodAddressSale() {
  return appRequest.get<GoodsAddressSale>({
    url: '/goods/address/sale'
  })
}

export function getGoodsCategoryCount() {
  return appRequest.get<GoodsCategory>({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return appRequest.get<GoodsCategory>({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return appRequest.get<GoodsCategoryFavor>({
    url: '/goods/category/favor'
  })
}

export function getGoodsSaleTop10() {
  return appRequest.get<GoodsSaleTop10>({
    url: '/goods/sale/top10'
  })
}

/*
 * @Author: hqk
 * @Date: 2023-01-13 13:26:23
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-13 21:30:25
 * @Description:
 */
import appRequest from '@/services'
import type {
  GoodsAmountListData,
  GoodsAddressSaleData,
  GoodsCategoryData,
  GoodsCategoryFavorData,
  GoodsSaleTop10Data
} from '@/types/main/analysis/analysis'

export function getGoodsAmountList() {
  return appRequest.get<GoodsAmountListData>({
    url: '/goods/amount/list'
  })
}

export function getGoodAddressSale() {
  return appRequest.get<GoodsAddressSaleData>({
    url: '/goods/address/sale'
  })
}

export function getGoodsCategoryCount() {
  return appRequest.get<GoodsCategoryData>({
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return appRequest.get<GoodsCategoryData>({
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return appRequest.get<GoodsCategoryFavorData>({
    url: '/goods/category/favor'
  })
}

export function getGoodsSaleTop10() {
  return appRequest.get<GoodsSaleTop10Data>({
    url: '/goods/sale/top10'
  })
}

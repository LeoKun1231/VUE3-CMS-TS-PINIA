export interface GoodsAmountListData {
  code: number
  data: GoodsAmountInfo[]
}

export interface GoodsAmountInfo {
  amount: string
  title: string
  tips: string
  subtitle: string
  number1: number
  number2: number
}

export interface GoodsAddressSaleData {
  code: number
  data: GoodsAddressSale[]
}

export interface GoodsAddressSale {
  address: string
  count: number
}

export interface GoodsCategoryData {
  code: number
  data: GoodsCategory[]
}

export interface GoodsCategory {
  id: number
  name: string
  goodsCount: number
}

export interface GoodsCategoryFavorData {
  code: number
  data: GoodsCategoryFavor[]
}

export interface GoodsCategoryFavor {
  id: number
  name: string
  goodsFavor: number
}

export interface GoodsSaleTop10Data {
  code: number
  data: GoodsSaleTop10[]
}

export interface GoodsSaleTop10 {
  id: number
  name: string
  saleCount: number
}

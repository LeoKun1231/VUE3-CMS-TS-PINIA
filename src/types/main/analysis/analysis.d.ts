export interface GoodsAmountInfo {
  amount: string
  title: string
  tips: string
  subtitle: string
  number1: number
  number2: number
}

export interface GoodsAddressSale {
  address: string
  count: number
}

export interface GoodsCategory {
  id: number
  name: string
  goodsCount: number
}

export interface GoodsCategoryFavor {
  id: number
  name: string
  goodsFavor: number
}

export interface GoodsSaleTop10 {
  id: number
  name: string
  saleCount: number
}

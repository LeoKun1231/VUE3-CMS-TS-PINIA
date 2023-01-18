/*
 * @Author: hqk
 * @Date: 2023-01-13 16:28:06
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-13 16:48:41
 * @Description:
 */
/**
 * @description:  如23122332 格式化成 23,122,332.00
 * @param {number} number
 * @return {*}
 */
export function formatDoubleNumber(number: string) {
  if (!number) return '0.00'
  const val = parseFloat(number).toFixed(2)
  const str = String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const arrTemp = str.split('.')
  if (arrTemp.length < 2) arrTemp.push('00')
  arrTemp[1] = arrTemp[1].padEnd(2, '00')
  return arrTemp.join('.')
}

/**
 * @description: 格式化整型数钱 如23122332 格式化成 23,122,332
 * @param {number} number
 * @return {*}
 */
export function formatIntNumber(number: string) {
  if (!number) return number
  const str = String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const arrTemp = str.split('.')
  return arrTemp[0]
}

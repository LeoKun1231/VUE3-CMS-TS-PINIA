/*
 * @Author: hqk
 * @Date: 2022-12-22 10:52:08
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-22 11:15:43
 * @Description:
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [
    // 解决tailwind css与element-plus 样式冲突
    function ({ addBase }) {
      addBase({
        '.el-button': {
          'background-color': 'var(--el-button-bg-color,var(--el-color-white))'
        }
      })
    }
  ]
}

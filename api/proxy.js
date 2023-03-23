/*
 * @Author: hqk
 * @Date: 2023-01-18 16:12:46
 * @LastEditors: hqk
 * @LastEditTime: 2023-01-18 16:16:44
 * @Description:
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = '' // 如果请求以/proxy开头，则将代理转发的目标设为需要请求的http接口
  if (req.url.startsWith('/proxy')) {
    target = 'http://111.230.245.205:8880'
  } // 创建代理对象并转发请求

  createProxyMiddleware({
    // 具体接口的拼接和字段替换操作
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/proxy/': '/'
    }
  })(req, res)
}

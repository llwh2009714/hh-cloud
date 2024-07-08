const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 80,
    open: true,
    // proxy: {
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: 'http://39.107.115.201/',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
    proxy: {
      '/prod-api': {
        target: 'http://47.95.66.70',
        changeOrigin: true,
        pathRewrite: {
          '^prod-api': ''
        }
      }
    },
  },
})

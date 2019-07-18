const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      fileName: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: 'error',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  },
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: '8081',
    hotOnly: true
  }
}

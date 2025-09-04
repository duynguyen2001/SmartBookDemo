module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/SmartBookDemo/'
    : '/',
  outputDir: 'dist',
  assetsDir: '',
  indexPath: 'index.html',
  filenameHashing: true,
  productionSourceMap: false
}

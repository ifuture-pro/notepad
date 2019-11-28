const { resolve }  = require('path')

module.exports = {
  name:'@ifuture/vuepress-plugin-analytics',
  enhanceAppFiles: resolve(__dirname, 'bin/enhanceAppFiles.js')
}

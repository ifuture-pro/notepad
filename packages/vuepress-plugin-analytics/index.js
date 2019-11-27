const { path } = require('@vuepress/shared-utils')

module.exports = (options, ctx) => ({
  name: '@ifuture/vuepress-plugin-analytics',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})

const glob = require('glob')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://raw.githubusercontent.com/caoyongzheng/web-demos/gh-pages' : '',
  exportPathMap() {
    const pathMap = {}
    glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
      const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
      pathMap[path] = { page: path }
    })
    return pathMap
  }
}
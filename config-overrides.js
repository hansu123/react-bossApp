const { override, fixBabelImports,addWebpackAlias,addDecoratorsLegacy } = require('customize-cra');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    "@": resolve("src")
  }),
  addDecoratorsLegacy()//使用装饰器
 )
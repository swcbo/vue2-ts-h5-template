/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 09:02:10
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-25 09:02:28
 */ 
module.exports = {
    devServer: {
      port: 8080,
      disableHostCheck: true,
    },
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require("postcss-px-to-viewport")({
              unitToConvert: "px",
              viewportWidth: 750,
              unitPrecision: 3,
              propList: [
                "*"
              ],
              viewportUnit: "vw",
              fontViewportUnit: "vw",
              selectorBlackList: [],
              minPixelValue: 1,
              mediaQuery: false,
              replace: true,
              exclude: /(\/|\\)(node_modules)(\/|\\)/,
            })
          ]
        }
      }
    }
  }
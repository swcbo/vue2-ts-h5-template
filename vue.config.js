/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 09:02:10
 * @LastEditors: 小白
 * @LastEditTime: 2020-08-15 13:54:20
 */
const IS_PROD = process.env.NODE_ENV === 'production';
const path = require('path');
console.log(`🚀当前环境${process.env.NODE_ENV}`);
console.log(`🔥当前环境${process.env.VUE_APP_BASE_API}`);
console.log(`🔥当前自定义环境${process.env.VUE_APP_EVN}`);
const CND = {
	css: [],
	js: [
		'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
		'https://cdn.bootcss.com/vue-router/3.2.0/vue-router.min.js',
		'https://cdn.bootcss.com/axios/0.19.2/axios.min.js',
		'https://cdn.bootcss.com/vuex/3.5.1/vuex.min.js'
	]
};
function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	productionSourceMap: process.env.VUE_APP_EVN !== 'production', //取消sorcemap
	configureWebpack: (config) => {
		if (IS_PROD) {
			const externals = {
				axios: 'axios',
				vue: 'Vue',
				vuex: 'Vuex',
				'vue-router': 'VueRouter'
			};
			console.log(`🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀当前cnd引用${JSON.stringify(externals)}`);
			config.externals = externals;
		}
		config.plugins = [ ...config.plugins ];
	},
	chainWebpack: (config) => {
		if (IS_PROD) {
			console.log(`🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀当前cnd引用地址${JSON.stringify(CND)}`);
			config.plugin('html').tap((args) => {
				args[0].cdn = CND;
				return args;
			});
		}
		config.resolve.alias
			.set('@', resolve('src'))
            .set('@images', resolve('src/assets/images'))
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "~@/assets/css/variables.scss";`
			},
			postcss: {
				plugins: [
					require('postcss-px-to-viewport')({
						unitToConvert: 'px',
						viewportWidth: 750,
						unitPrecision: 3,
						propList: [ '*' ],
						viewportUnit: 'vw',
						fontViewportUnit: 'vw',
						selectorBlackList: [],
						minPixelValue: 1,
						mediaQuery: false,
						replace: true,
						exclude: /(\/|\\)(node_modules)(\/|\\)/
					})
				]
			}
		}
	},
	devServer: {
		open: true,
		host: '0.0.0.0',
		port: 8089,
		https: false,
		hotOnly: false
	}
};

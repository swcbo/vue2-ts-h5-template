/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-25 13:32:39
 */
module.exports = {
	presets: [ '@vue/cli-plugin-babel/preset' ],
	plugins: [
		[
			'import',
			{
				libraryName: 'vant',
				libraryDirectory: 'es',
				style: true
			},
			'vant'
		]
	]
};

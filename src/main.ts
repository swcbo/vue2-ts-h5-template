/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-23 14:02:44
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import './assets/css/common.scss';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
router.beforeEach(async ({ meta: { title } }, from, next) => {
	title && (document.title = title);
	next();
});

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');

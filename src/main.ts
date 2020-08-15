/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-08-15 13:56:21
 */
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/common.scss';
Vue.config.productionTip = false;
Vue.prototype.$testprotorype = "样式"
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');

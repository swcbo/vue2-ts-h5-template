/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-07-26 22:08:36
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/common.scss';
import FastClick from 'fastclick';
FastClick.attach(document.body);
Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');

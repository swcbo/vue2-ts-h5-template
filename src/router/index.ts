/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-23 13:42:44
 */

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
		redirect: '/index',
		children: [
			{
				path: '/index',
				name: 'Index',
				meta: {
					title: '首页'
				},
				component: () => import(/* webpackChunkName: "Index" */ '@/views/Index.vue')
			},
			{
				path: '/search',
				name: 'Search',
				meta: {
					title: '搜索'
				},
				component: () => import(/* webpackChunkName: "Search" */ '@/views/Search.vue')
			},
			{
				path: '/detail',
				name: 'Detail',
				meta: {
					title: '活动详情'
				},
				component: () => import(/* webpackChunkName: "Detail" */ '@/views/Detail.vue')
			},
			{
				path: '/list',
				name: 'List',
				meta: {
					title: '排行榜'
				},
				component: () => import(/* webpackChunkName: "List" */ '@/views/List.vue')
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});
router.beforeEach((to, from, next) => {
	next();
});
export default router;

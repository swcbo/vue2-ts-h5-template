/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-07-25 08:06:14
 * @LastEditors: 小白
 * @LastEditTime: 2020-09-23 21:31:04
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
				component: () => import(/* webpackChunkName: "Index" */ '@/views/Index.vue')
			},
			{
				path: '/search',
				name: 'Search',
				component: () => import(/* webpackChunkName: "Search" */ '@/views/Search.vue')
			},
			{
				path: '/detail',
				name: 'Detail',
				component: () => import(/* webpackChunkName: "Detail" */ '@/views/Detail.vue')
			},
			{
				path: '/list',
				name: 'List',
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

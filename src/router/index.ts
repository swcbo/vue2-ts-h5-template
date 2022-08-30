import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
});
router.beforeEach((to, from, next) => {
	next();
});
export default router;

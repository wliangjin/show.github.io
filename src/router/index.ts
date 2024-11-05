import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/home',
		component: Layout,
		children: [
			{
				path: 'home',
				component: () => import('@/views/home/Home.vue')
			},
			{
				path: 'works',
				component: () => import('@/views/works/Works.vue')
			},
			{
				path: 'hxk',
				component: () => import('@/views/hxk/Hxk.vue')
			},
			{
				path: 'price',
				component: () => import('@/views/price/Price.vue')
			},
			{
				path: '404',
				component: () => import('@/views/404/Notfound.vue')
			}
		]
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	}
]

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes
})

export default router
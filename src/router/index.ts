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
				component: () => import('@/views/home/Home.vue'),
				meta: {
					title: '在线设计平台'
				}
			},
			{
				path: 'jzsj',
				component: () => import('@/views/jzsj/Jzsj.vue'),
				meta: {
					title: '家装设计'
				}
			},
			{
				path: 'works',
				component: () => import('@/views/works/Works.vue'),
				meta: {
					title: '作品'
				}
			},
			{
				path: 'hxk',
				component: () => import('@/views/hxk/Hxk.vue'),
				meta: {
					title: '户型库'
				}
			},
			{
				path: 'price',
				component: () => import('@/views/price/Price.vue'),
				meta: {
					title: '定价'
				}
			},
			{
				path: '404',
				component: () => import('@/views/404/Notfound.vue'),
				meta: {
					title: '404'
				}
			}
		]
	},
	{
		path: '/manage',
		component: () => import('@/views/manage/Manage.vue'),
		meta: {
			title: '管理后台'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/404'
	}
]

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
	document.title = '心居设计 - ' + (to.meta.title as string) || '首页';
	next();
})
export default router
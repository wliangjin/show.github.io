<template>
	<header class="container bg-gray-50 h-14 flex items-center justify-between px-6 sticky top-0 z-[100]">
		<div class="left-nav flex items-center">
			<div class="logo w-40 flex items-center" @click="() => router.push({ path: 'home' })">
				<a href="../page/index.html"><img src="@/assets/img/logo.png" alt="" class="inline-block w-11" />
					<span class="text-blue-800/70 font-bold text-lg">心居设计</span></a>
			</div>
			<ul class="menu flex">
				<li>
					<a href="../page/index.html"><span></span></a>
				</li>
				<li v-for="item in navitems">
					<router-link :to="item.path">{{ item.label }}<span v-show="item.children">&gt;</span></router-link>
					<ul v-if="item.children" class="submenu">
						<li v-for="submenu in item.children"><router-link :to="submenu.path">{{ submenu.label }}</router-link></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="right-action" v-if="!alredyLogin">
			<button class="btn" @click="() => { dialogVisible = true, authType = 1 }">登录</button>
			<button class="btn" @click="() => { dialogVisible = true, authType = 2 }">注册</button>
		</div>
		<div class="profile" v-if="alredyLogin">
			<div class="avatar flex items-center">
				<el-avatar fit="contain" @error="() => true"
					src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
					<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
				</el-avatar>
			</div>
			<div class="submenu">
				<div class="flex items-center">
					<el-icon>
						<Avatar color="skyblue" />
					</el-icon>
					<span class="ml-1">{{ userInfo.username }}</span>
				</div>
				<div @click="handleExit" class="flex items-center">
					<el-icon>
						<Promotion color="red" />
					</el-icon>
					<span class="ml-1">退出登录</span>
				</div>
			</div>

		</div>
		<el-dialog v-if="dialogVisible" v-model="dialogVisible" :close-on-click-modal="false" :z-index="999">
			<Login :type="authType" @close-dialog="dialogVisible = false"></Login>
		</el-dialog>
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Login from '@/views/login/Login.vue';
import { RouterLink, useRouter } from 'vue-router';
import { localData } from '@/utils/storage';
const router = useRouter()
const authType = ref(1)
const userInfo = ref(localData.get('userInfo'))
// const getUserProfile = () => {
// 	userInfo.value = localData.get('userInfo')
// }
const alredyLogin = ref(localData.get('token'))
const handleExit = () => {
	localData.remove('token')
	localData.remove('userInfo')
	alredyLogin.value = false
	window.location.reload()
}
let key = 1001
const navitems = [
	{
		key: key++,
		path: '/',
		label: '首页'
	},
	{
		key: key++,
		path: '#',
		label: '产品',
		children: [
			{
				key: key++,
				path: '#',
				label: '户型设计',
			},
			{
				key: key++,
				path: '#',
				label: '硬装设计',
			},
			{
				key: key++,
				path: '#',
				label: '橱衣柜设计',
			}
		]
	},
	{
		key: key++,
		path: '/works',
		label: '作品'
	},
	{
		key: key++,
		path: '#',
		label: '资源',
		children: [
			{
				key: key++,
				path: '/hxk',
				label: '户型库',
			},
			{
				key: key++,
				path: '#',
				label: '模型库',
			},
			{
				key: key++,
				path: '#',
				label: '模型中心',
			},
			{
				key: key++,
				path: '#',
				label: '应用市场',
			}
		]
	},
	{
		key: key++,
		path: '#',
		label: '帮助',
		children: [
			{
				key: key++,
				path: '#',
				label: '帮助中心',
			},
			{
				key: key++,
				path: '#',
				label: '新人必看',
			},
			{
				key: key++,
				path: '#',
				label: '学习中心',
			}
		]
	},
	{
		key: key++,
		path: '/price',
		label: '价格'
	}
]
const dialogVisible = ref(false)
</script>

<style lang="less" scoped>
@import url(./Header.less);

header {
	:deep(.el-dialog) {
		background: transparent;
		box-shadow: none
	}

	:deep(.el-dialog__header) {
		display: none;
	}
}
@media screen and (max-width: 768px) {
	header{
		display: none;
	}
}
</style>
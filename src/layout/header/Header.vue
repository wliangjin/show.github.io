<template>
	<header class="container bg-gray-50 h-14 flex items-center justify-between px-6 sticky top-0 z-[100]">
		<div class="left-nav flex items-center">
			<div class="logo w-40 flex items-center" @click="() => router.push({ path: 'home' })">
				<a href="../page/index.html"><img src="@/assets/img/logo.png" alt="" class="inline-block w-11" />
					<span class="text-blue-800/70 font-bold text-lg">心居设计</span></a>
			</div>
			<ul class="menu">

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

		<div class="mobile-menu text-neutral-600 absolute top-0 right-5 hidden">
			<el-icon :size="32">
				<Menu />
			</el-icon>
		</div>
		<div class="profile" v-if="alredyLogin">
			<div class="avatar flex items-center">
				<el-avatar fit="cover" @error="() => true" :src="userInfo.avatar">
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
				<div v-if="hasPermissions">
					<RouterLink to="/manage" :replace="true">
						<el-icon>
							<Management color="blueviolet" />
						</el-icon>
						<button class="btn">后台管理</button>
					</RouterLink>
				</div>
				<div @click="handleExit" class="flex items-center">
					<el-icon>
						<Promotion color="red" />
					</el-icon>
					<span class="ml-1">退出登录</span>
				</div>
			</div>
		</div>
		<!-- <el-dialog v-model="dialogVisible" :close-on-click-modal="false" :z-index="999"> -->
		<Teleport to="body">
			<Transition>
				<Login v-if="dialogVisible" :type="authType" @close-dialog="dialogVisible = false"></Login>
			</Transition>
		</Teleport>
		<!-- </el-dialog> -->
	</header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Login from '@/views/login/Login.vue';
import { RouterLink, useRouter } from 'vue-router';
import { localData } from '@/utils/storage';
import { useUserStore } from "@/store/user";
import { users } from '@/store/user';
import { waitTime } from '@/utils/common';
const userStore = useUserStore()
const router = useRouter()
const authType = ref(1)
const userInfo = ref(userStore.userInfo)
const hasPermissions = ref(false)
users.forEach((user) => {
	if (user.username == userInfo.value.username) {
		hasPermissions.value = true
	}
})
// const getUserProfile = () => {
// 	userInfo.value = localData.get('userInfo')
// }
const alredyLogin = ref(localData.get('token'))

const handleExit = async () => {
	// localData.remove('token')
	// localData.remove('userInfo')
	alredyLogin.value = false
	await waitTime(600)
	userStore.logout()
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
		path: '/jzsj',
		label: '家装设计',
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

.v-enter-active,
.v-leave-active {
	transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
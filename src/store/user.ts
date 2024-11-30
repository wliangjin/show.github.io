import { localData } from "@/utils/storage";
import { defineStore } from "pinia";
import { ref, watch } from "vue";
interface LoginDto {
	userid?: number;
	username: string;
	password: string;
}
export const users = [
	{
		userid: 1001,
		username: 'admin',
		password: '999999'
	},
	{
		userid: 1002,
		username: 'wlau',
		password: '21060733'
	},
	{
		userid: 1003,
		username: 'weiqiongjian',
		password: '21060734'
	},
	{
		userid: 1004,
		username: 'liangzhong',
		password: '21060634'
	},
	{
		userid: 1004,
		username: 'liangzhong',
		password: '21060634'
	},
	{
		userid: 1005,
		username: 'xiewangfu',
		password: '21060636'
	},
	{
		userid: 1006,
		username: 'weizonglin',
		password: '21060746'
	},
	{
		userid: 1007,
		username: 'tangyinzhen',
		password: '21060720'
	},
]
// localData.get('users') || localData.set('users', users)
export const useUserStore = defineStore('user', () => {
	const token = ref(localData.get('token') || '')
	const userInfo = ref(localData.get('userInfo') || {})
	const userList = ref(localData.get('users') || users)
	const userId = ref(0)
	// 初始化
	watch(() => userList, () => {
		localData.set('users', userList.value)
	}, { immediate: true, deep: true })

	// 退出登录
	const logout = () => {
		token.value = ''
		userInfo.value = {}
		localData.remove('token')
		localData.remove('userInfo')
		document.location.reload()
	}
	const login = async (params: LoginDto) => {
		// 模拟登录
		let res = false
		try {
			userList.value.forEach((item: LoginDto, i: number) => {
				if (item.username == params.username && item.password == params.password) {
					userId.value = i
					console.log(userId.value);

					token.value = 'TOKEN_XXXXXX'
					localData.set('token', token.value)
					res = true
				}
			})
			await afterLogin()
			return res
		} catch (error) {
			return Promise.reject(error)
		}
	}
	const afterLogin = async () => {
		// 模拟登录后获取用户信息
		userInfo.value = {
			username: userList.value[userId.value].username,
			avatar: 'https://www.4kpic.cn/upload/thumbnails/2024/6/27/20240627104656739274.webp'
		}
		localData.set('userInfo', userInfo.value)
	}
	const register = async (params: LoginDto) => {
		// 模拟注册
		try {
			userList.value.push({
				userid: userList.value[userList.value.length - 1].userid + 1,
				username: params.username,
				password: params.password
			})
		} catch (error) {
			return Promise.reject(error)
		}
	}
	return {
		token,
		userInfo,
		userList,
		logout,
		login,
		register
	}
})
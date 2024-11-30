<template>
	<div class="container">
		<div class="main">
			<div class="left-content">
				<div class="topbar">
					<img src="@/assets/img/logo.png" alt="" />
					<h1>心居设计</h1>
					<div class="dec">|</div>
					<span>{{ typeName }}</span>
				</div>
			</div>
			<div class="login_box">
				<div class="content">
					<div class="title">
						<h2>账户{{ typeName }}</h2>
						<div class="circle" @click="emit('closeDialog')"><el-icon color="white">
								<Close />
							</el-icon></div>
					</div>
					<hr />
					<div class="form">
						<form action="" @submit.prevent="handleAuth">
							<div class="item">
								<span><img src="@/assets/账号.svg" alt="" class="icon" /></span>
								<input v-model.trim="form.username" type="text" name="username" placeholder="用户名为名字拼音" id="username"
									required pattern="^\w{3,20}$" title="用户名为名字拼音" />
							</div>
							<div class="item">
								<span class="icon"><img src="@/assets/密码.svg" alt="" class="icon" /></span>
								<input v-model.trim="form.password" type="password" name="password" placeholder="密码为学号" id="password"
									required pattern="^21060[678][0-9]{2}|999999$" title="密码为学号" />
							</div>
							<div class="setStat" v-if="isLogin">
								<label for="remember">
									<input type="checkbox" name="status" id="remember" v-model="remember" />
									<span>记住我</span>
								</label>
								<a href="">找回密码</a>
							</div>
							<input type="submit" :value="typeName" id="" class="submit" />
							<div class="login-info" v-if="isLogin">
								<el-tooltip class="box-item" effect="dark" placement="right">
									<template #content>点击一键填入管理员账户<br /> 用户名：admin 密码：999999</template>
									<el-button size="small" @click="autoInput">管理员账户<el-icon>
											<WarningFilled />
										</el-icon></el-button>
								</el-tooltip>
							</div>
						</form>
					</div>
					<div class="register">
						<div>
							{{ isLogin ? '没有账号？' : '已有账号？' }}
							<a @click.prevent="isLogin = !isLogin" href="./register.html">
								{{ isLogin ? '免费注册' : '立即登录' }}
							</a>
						</div>
						<!-- <span>已有账号？<a @click.prevent="isLogin = false" href="./register.html">立即登录</a></span> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { localData } from '@/utils/storage';
import { ElMessage } from 'element-plus';
import { useUserStore } from "@/store/user";
import { waitTime } from '@/utils/common';
const { login, register } = useUserStore()
const userStore = useUserStore()
const prop = defineProps({
	type: Number
})

const emit = defineEmits<{
	(e: 'closeDialog'): void
}>()
const typeName = ref('')
// 1登录 2注册
const isLogin = ref(prop.type == 1)
// interface User {
// 	userid?: number
// 	username: String
// 	password: String
// }
let form = reactive({
	username: '',
	password: '',
})
const initForm = {
	username: '',
	password: '',
}
Object.assign(form, initForm)
const remember = ref(false)

const fromRegister = ref(false)
const autoInput = () => {
	Object.assign(form, { username: 'admin', password: '999999' })
}
watch(() => isLogin.value, (newValue) => {
	if (newValue) {
		typeName.value = '登录'
		const loginInfo = localData.get('loginInfo')
		if (!fromRegister.value && loginInfo) {
			remember.value = loginInfo.remember
			Object.assign(form, localData.get('loginInfo'))
		}
	} else {
		typeName.value = '注册'
		Object.assign(form, initForm)
	}
}, { immediate: true })

// const verify = [{
// 	username: { pattern: '^\w{4,12}$', message: '用户名为名字拼音' },
// 	password: { pattern: '^21060[678][0-9]{2}$', message: '密码为学号' },
// }]
const handleAuth = async () => {
	const users = userStore.userList
	if (isLogin.value) {
		//登录操作
		let isValid = false
		await login({ username: form.username, password: form.password }) && (isValid = true)
		//根据校验是否通过提示相应信息
		ElMessage({
			type: isValid ? 'success' : 'error',
			message: isValid ? '登录成功' : '用户名或密码错误',
			duration: 1500
		})
		//如果校验通过或勾选了记住我执行流程，将用户登录信息存储到本地
		if (isValid) {
			remember.value ?
				localData.set('loginInfo', Object.assign({ remember: remember.value }, form))
				: localData.remove('loginInfo')
			await waitTime(600)
			window.location.reload()
		}
	} else {
		//否则为注册操作
		//检查用户名是否重复
		const userRepeat = users.find((user: { username: string; }) => {
			return user.username == form.username
		})
		if (userRepeat) {
			ElMessage({
				type: 'error',
				message: '用户名已被使用',
				duration: 1500
			})
			return
		}
		register(form)
		// Object.assign(form, initForm) //注册后是否在登录页输入框保存注册信息
		fromRegister.value = true
		ElMessage({
			type: 'success',
			message: '注册成功',
			duration: 1500
		})
		await waitTime(800)
		isLogin.value = true
	}
}
</script>

<style lang="less" scoped>
@import url(./login.less);
</style>
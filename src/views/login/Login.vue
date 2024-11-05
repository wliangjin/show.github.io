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
								<input v-model.trim="form.username" type="text" name="username" placeholder="输入用户名" id="username"
									required pattern="^.{3,10}$" title="用户名应为任意3~10位字符" />
							</div>
							<div class="item">
								<span class="icon"><img src="@/assets/密码.svg" alt="" class="icon" /></span>
								<input v-model.trim="form.password" type="password" name="password" placeholder="密码" id="password"
									required pattern="^[0-9]{6,12}$" title="输入密码长度为6~12位的数字" />
							</div>
							<div class="setStat" v-if="isLogin">
								<label for="remember">
									<input type="checkbox" name="status" id="remember" v-model="remember" />
									<span>记住我</span>
								</label>
								<a href="">找回密码</a>
							</div>
							<input type="submit" :value="typeName" id="" class="submit" />
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
const prop = defineProps({
	type: Number
})

const emit = defineEmits<{
	(e: 'closeDialog'): void
}>()
const delay = async (delayTime: number = 500) => {
	await new Promise<void>(resolve => setTimeout(resolve, delayTime))
}
const typeName = ref('')
const isLogin = ref(prop.type == 1)
// 1登录 2注册
interface User {
	userid: number
	username: String
	password: String
}
const userid = ref(1001)
let form = reactive({
	// userid: userid.value,
	// username: '',
	// password: '',
} as User)
const initForm: User = {
	userid: userid.value,
	username: '',
	password: '',
}
Object.assign(form, initForm)
const remember = ref(false)

const fromRegister = ref(false)

watch(() => isLogin.value, (newValue) => {
	if (newValue) {
		typeName.value = '登录'
		const loginInfo = localData.get('loginInfo')
		if (!fromRegister.value && loginInfo) {
			remember.value = loginInfo.remember
			Object.assign(form, localData.get('loginInfo'))
			console.log(form, initForm);
		}
	} else {
		typeName.value = '注册'
		Object.assign(form, initForm)
		console.log(initForm);
	}
}, { immediate: true })

const afterLogin = async () => {
	const userInfo = {
		userId: form.userid,
		username: form.username
	}
	const token = localData.get('token')
	return token && localData.set('userInfo', userInfo)
}

const handleAuth = async () => {
	//检测本地是否已有用户列表数据
	localData.get('users') || localData.set('users', [])
	const users: Array<User> = localData.get('users') || localData.set('users', [])
	if (isLogin.value) {
		//登录操作
		let isValid = false
		users.length > 0 && users.forEach(user => {
			const pass = user.username == form.username && user.password == form.password
			pass && (isValid = true)
		})
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
			localData.set('token', '123456')
			await delay(600)
			await afterLogin()
			window.location.reload()
		}
	} else {
		//否则为注册操作
		//检查用户名是否重复
		const userRepeat = users.find(user => {
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
		//新注册用户的id为用户列表最后一个用户的id+1
		users.length <= 0 || (form.userid = users[users.length - 1].userid + 1)
		users.push(form)
		localData.set('users', users)
		// Object.assign(form, initForm) //注册后是否在登录页输入框保存注册信息
		fromRegister.value = true
		ElMessage({
			type: 'success',
			message: '注册成功',
			duration: 1500
		})
		await delay(800)
		isLogin.value = true
	}
}
</script>

<style lang="less" scoped>
@import url(./login.less);
</style>
<template>
	<div class="custom-model">
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
						<Transition name="fade">
							<h2 v-if="isLogin">用户登录</h2>
							<h2 v-else>用户注册</h2>
						</Transition>
						<div class="circle" @click="emit('closeDialog')"><el-icon color="white">
								<Close />
							</el-icon></div>
					</div>
					<hr />
					<div class="form">
						<form action="" @submit.prevent="handleAuth">
							<el-tooltip class="box-item" effect="dark" content="以字母开头的3-15位字母数字组合，可含下划线" placement="left-end">
								<div class="item">
									<span><img src="@/assets/账号.svg" alt="" class="icon" /></span>
									<input v-model.trim="form.username" type="text" name="username" placeholder="用户名" id="username"
										required title="用户名" />
								</div>
							</el-tooltip>
							<el-tooltip class="box-item" effect="dark" content="6-8位字母数字的组合" placement="left-end">
								<div class="item">
									<span class="icon"><img src="@/assets/密码.svg" alt="" class="icon" /></span>
									<input v-model.trim="form.password" type="password" name="password" placeholder="密码" id="password"
										required title="密码" />
								</div>
							</el-tooltip>
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
// 登录/注册状态管理
const isLogin = ref(prop.type == 1)
const form = reactive({ username: '', password: '' })
const remember = ref(false)
const fromRegister = ref(false)
// 初始化表单
const initForm = { username: '', password: '' }
Object.assign(form, initForm)

// 自动填充测试数据
const autoInput = () => {
	Object.assign(form, { username: 'admin', password: '999999' })
}

// 监听登录/注册切换
watch(() => isLogin.value, (newValue) => {
	typeName.value = newValue ? '登录' : '注册'

	if (newValue) {
		// 切换到登录页，尝试恢复记住的登录信息
		const loginInfo = localData.get('loginInfo')
		if (!fromRegister.value && loginInfo) {
			remember.value = loginInfo.remember
			Object.assign(form, loginInfo)
		}
	} else {
		// 切换到注册页，清空表单
		Object.assign(form, { ...initForm })
	}
}, { immediate: true })

// 输入验证
const validateInput = (): boolean => {
	const usernameValid = /^[a-zA-Z][a-zA-Z0-9_]{2,14}$/.test(form.username)
	const passwordValid = /^(?:[a-zA-Z0-9]{6,8}|999999)$/.test(form.password)

	if (!usernameValid || !passwordValid) {
		ElMessage.error('用户名或密码格式不正确')
		return false
	}

	return true
}

// 处理登录
const handleLogin = async () => {
	const success = await login(form)

	if (success) {
		ElMessage.success('登录成功')

		// 处理记住我选项
		if (remember.value) {
			localData.set('loginInfo', { ...form, remember: true })
		} else {
			localData.remove('loginInfo')
		}

		await waitTime(600)
		window.location.reload()
		return true
	} else {
		ElMessage.error('用户名或密码错误')
		return false
	}
}

// 处理注册
const handleRegister = async () => {
	// 检查用户名是否已存在
	const usernameExists = userStore.userList.some((user: { username: string; }) => user.username === form.username)
	if (usernameExists) {
		ElMessage.error('用户名已被使用')
		return false
	}

	const success = await register(form)

	if (success) {
		fromRegister.value = true
		ElMessage.success('注册成功')
		await waitTime(600)
		isLogin.value = true
		return true
	} else {
		ElMessage.error('注册失败，请重试')
		return false
	}
}

// 主认证函数
const handleAuth = async () => {
	if (!validateInput()) return

	try {
		const success = isLogin.value
			? await handleLogin()
			: await handleRegister()

		if (success) {
			console.log(`${isLogin.value ? '登录' : '注册'}操作成功`)
		}
	} catch (error) {
		console.error('认证操作失败:', error)
		ElMessage.error('操作失败，请重试')
	}
}
</script>

<style lang="less" scoped>
@import url(./login.less);
.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-enter-from {
  opacity: 0;
	transform: translateX(30%);
}
</style>
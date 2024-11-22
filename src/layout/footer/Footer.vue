<template>
	<footer class="bg-white pt-12 container">
		<div class="footer-swipe relative text-center">
			<div class="swipe-wrap h-[174px]">
				<div v-for="(img, i) in imgs" :key="i"
					class="img-wrap  overflow-auto transition-all duration-600 absolute inset-0"
					:class="{ active: currentIndex == i }">
					<div class="title font-bold text-lg text-gray-500">{{ img.title }}</div>
					<div class="img-item">
						<img class="inline-block max-w-[1152px] h-auto w-full" :src="img.src" :alt="img.title">
					</div>
				</div>
			</div>
		</div>
		<div class="pagination flex justify-center mb-8" @mouseover="timer = null">
			<button class="w-2 h-2 bg-gray-200 rounded-full mx-2" v-for="(dot, i) in imgs" :key="i"
				:class="{ dot: currentIndex == i }" @click="currentIndex = i"></button>
		</div>
		<div class="bottom-explain h-[70px] flex flex-col justify-center items-center bg-gray-800">
			<p class="text-sm text-gray-300">&copy;2011-2024 南宁理工学院 计算机2107班-学号733-韦梁金</p>
			<p class="text-xs text-gray-200/60 mt-1">参考自<a class="underline underline-offset-4"
					href="https://www.kujiale.com/" target="_blank">酷家乐</a>网站，仅用于学习交流，无任何特殊用途</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const imgs = [
	{
		src: new URL('@/assets/Partners.webp', import.meta.url).href,
		title: '酷家乐·生态合作伙伴'
	},
	{
		src: new URL('@/assets/Partners02.webp', import.meta.url).href,
		title: '酷家乐·大家居行业的共同选择'
	},
]
const currentIndex = ref(0)
let timer: any = null
const autoPlay = () => {
	timer = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % imgs.length
	}, 2500)
	return
}
// const stop = () => {
// 	console.log('stop');
// 	clearInterval(timer)
// }
// const start = () => {
// 	console.log('start');
// 	autoPlay()
// }
onMounted(() => {
	autoPlay()
})

</script>

<style scoped lang="less">
.active {
	opacity: 0;
}

.dot {
	background: #627be0;
}
footer{
	box-shadow: 0 -1px 20px 0 rgba(116, 116, 116, 0.1);
}
// .img-wrap {
// 	display: flex;
// }
// .img-item {
// 	transition: .3s all;
// 	min-height: 0;
// 	img {
// 		display: block;
// 		height: auto;
// 	}

// 	position: absolute;
// }</style>
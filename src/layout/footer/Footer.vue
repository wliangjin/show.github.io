<template>
	<footer class="bg-white pt-8 container">
		<div class="footer-swipe relative" @mouseenter="stop()" @mouseleave="autoPlay()">
			<div class="swipe-wrap text-center" :style="{ height: swipeWrapHeight + 'px' }" ref="swipeWrap">
				<div v-for="(img, i) in imgs" :key="i" class="img-wrap absolute inset-x-0 transition-all duration-600"
					:class="{ active: currentIndex == i }">
					<div class="title font-bold text-lg text-gray-500">{{ img.title }}</div>
					<div class="img-item">
						<img class="inline-block max-w-[1152px] w-[90%]" :src="img.src" :alt="img.title" @load="setElHeight()">
					</div>
				</div>
			</div>
			<div class="pagination flex justify-center mb-8">
				<button class="w-2 h-2 bg-gray-200 rounded-full mx-2" v-for="(dot, i) in imgs" :key="i"
					:class="{ dot: currentIndex == i }" @click="currentIndex = i"></button>
			</div>
		</div>
		<div class="bottom-explain h-[70px] flex flex-col justify-center items-center bg-gray-800">
			<p class="text-sm text-gray-300">&copy;2011-2099 -----学院 计算机0000班-学号000-多吃两斤肉</p>
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

const swipeWrap = ref()

const swipeWrapHeight = ref(0)
const setElHeight = () => {
	// console.log(swipeWrap.value?.children[0].offsetHeight);
	// console.log(swipeWrapHeight.value);
	swipeWrapHeight.value = swipeWrap.value?.children[0].offsetHeight
}
window.addEventListener('resize', () => {
	setElHeight()
})
const currentIndex = ref(0)
let timer: any = null
const autoPlay = () => {
	timer = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % imgs.length
	}, 2500)
}
const stop = () => {
	clearInterval(timer)
	timer = null
}

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

footer {
	box-shadow: 0 -1px 20px 0 rgba(116, 116, 116, 0.1);
}

.swipe-wrap {
	&::after {
		content: "";
		overflow: hidden;
	}
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
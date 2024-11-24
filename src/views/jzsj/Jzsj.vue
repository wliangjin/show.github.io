<template>
	<div class="min-h-[100vh]">
		<div class="container mx-auto">
			<div class="top-main w-[94%] mx-auto mb-10">
				<div class="top-node py-5">
					<div class="baseNode flex items-center text-sm">
						<a href="../page/index.html">心居设计</a>
						<span>></span>
						<button class="cursor-auto">家装设计</button>
					</div>
				</div>

				<div class="top-wrap flex justify-between">

					<div class="design-left cursor-pointer w-[66%] pb-[28%] overflow-hidden rounded-xl relative"
						@mouseenter="stop()" @mouseleave="autoPlay()">
						<div class="title absolute left-3 top-3 px-4 py-1 bg-gray-300/10 text-white text-base rounded-md">
							<p class="font-bold">视频动画</p>
						</div>
						<div class="swipe-container">
							<div v-for="(img, i) in swipeImgs" :key="i" class="img-item absolute inset-0 opacity-0 transition-all duration-300"
								:class="{ active: currentIndex == i }">
								<img :src="img.src" alt="" srcset="" class="w-full h-full">
							</div>
						</div>
						<div class="bottom-item flex justify-center w-full absolute bottom-0 p-5">
							<button class="w-8 h-2 bg-gray-200 rounded-full mx-2" v-for="(dot, i) in swipeImgs" :key="i"
								:class="{ dot: currentIndex == i }" @click="currentIndex = i"></button>
						</div>
					</div>

					<div class="design-right flex flex-col justify-between w-[calc(34%-24px)]">
						<div class="right-img">
							<img :src="swipeImgs[0].src" alt="">
							<div class="banner-info">
								<h4>Room tour</h4>
								<p>酷家乐硬装素材上新</p>
								<button>查看详情</button>
							</div>
						</div>
						<div class="right-img">
							<img :src="swipeImgs[1].src" alt="">
							<div class="banner-info">
								<h4>功能更新</h4>
								<p>模型支持精准布置</p>
								<button>查看详情</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="main w-[94%] mx-auto mt-5">
				<!-- 图文列表项展示 -->
				<h1 class="text-3xl font-bold mb-7">优秀作品</h1>
				<div class="show2-wrap pb-5">
					<div class="show2-item columns-3 gap-6" @click.prevent="">
						<div v-for="item in showItems" :key="item.id" class="item relative">
							<div class="img-wrap"><a href="#"><img :src="getImg(item.img)" alt=""></a>
							</div>
							<div class="content-bottom flex justify-between w-full px-5 py-4 absolute bottom-0">
								<div class="bottom-left">
									<p class="tag font-bold text-sm text-yellow-600 cursor-pointer">{{ item.tag }}</p>
									<a href="#">
										<p class="desc text-gray-700 hover:text-blue-500">{{ item.desc }}</p>
									</a>
								</div>
								<div class="bottom-right self-end">
									<div class="title text-gray-500 flex items-center">
										<div class="mini-circle bg-indigo-400/50 w-3 h-3 rounded-full mr-1"></div>
										<div class="text-sm hover:text-blue-500"><a href="#">{{ item.designer }}</a></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="white-space pb-[80px]"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { showItems } from '@/data/jzsj';
import { onMounted, ref } from 'vue';
const getImg = (imgid: string) => {
	return new URL(`../../assets/img/jzsj/item${imgid}.webp`, import.meta.url).href
}
const swipeImgs = [
	{
		src: new URL('../../assets/img/jzsj/banner01.webp', import.meta.url).href,
	},
	{
		src: new URL('../../assets/img/jzsj/banner02.webp', import.meta.url).href,
	},
	{
		src: new URL('../../assets/img/jzsj/banner03.webp', import.meta.url).href,
	},
	{
		src: new URL('../../assets/img/jzsj/banner04.webp', import.meta.url).href,
	},
	{
		src: new URL('../../assets/img/jzsj/banner05.webp', import.meta.url).href,
	},
]
const currentIndex = ref(0)
let timer: any = null
const autoPlay = () => {
	timer = setInterval(() => {
		currentIndex.value = (currentIndex.value + 1) % swipeImgs.length
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

<style lang="less" scoped>
@import url(./Jzsj.less);

:is(.design-left) {
	&:hover button {
		display: block;
	}

	.active {
		opacity: 1;
	}

	.dot {
		background: white;
		box-shadow: inset 0 3px 10px 0 rgba(5, 128, 250, 0.2);
		border: 1px solid #c5d3f4;
		width: 60px;
		filter: contrast(80%);
	}
}

.slideAnimate {
	// transform: translateX(-200%)
	transition: all ease-in-out .5s;
}
</style>
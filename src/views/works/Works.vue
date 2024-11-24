<template>
	<div class="min-h-[100vh]">
		<div class="container mx-auto">
			<div class="top-main w-[94%] mx-auto mb-10">
				<div class="top-node py-5">
					<div class="baseNode flex items-center text-sm">
						<a href="../page/index.html">心居设计</a>
						<span>></span>
						<a href="#">优秀设计</a>
						<span>></span>
						<button class="cursor-auto">全部推荐</button>
					</div>
				</div>

				<div class="top-wrap flex justify-between">
					<div class="design-left box-border flex flex-col py-5 px-5 bg-white rounded-xl w-[calc(25%-24px)]">
						<!-- 左侧导航区域 -->
						<div class="nav-aside flex flex-col flex-1 justify-between flex-grow-1">
							<!-- 循环导航标签 -->
							<div v-for="item in category" :key="item.cid" class="list-row-wrap whitespace-nowrap flex-1">
								<div class="list-row h-10 flex pl-2 items-center text-sm rounded-lg hover:bg-gray-100/70">
									<div class="nav-list-title font-semibold">{{ item.name }}</div>
									<span class="text-gray-300 mx-3 scale-75">|</span>
									<ul
										class="nav-list-tags flex flex-1 overflow-hidden [&>li]:mr-3 [&>li>a]:text-gray-600 [&>li>a:hover]:text-blue-600">
										<li v-for="navtag in item.types" :key="navtag.tid"><a href="#">{{ item.name == '面积' ?
											navtag.tname + `m&sup2;` : navtag.tname }}
											</a></li>
									</ul>
									<div class="tags-right-arrow text-gray-300 scale-y-125 scale-x-50 font-bold">></div>
								</div>
							</div>
						</div>
						<div class="gaps"></div>
						<div class="search h-10 rounded-lg bg-gray-100 flex items-center text-sm px-3">
							<input class="bg-transparent flex-1 outline-none tracking-wider" type="text" placeholder="共 462507 套方案">
							<div class="search-icon text-lg cursor-pointer px-2">
								<svg t="1718986334421" class="icon" viewBox="0 0 1024 1024" version="1.1"
									xmlns="http://www.w3.org/2000/svg" p-id="1481" width="200" height="200">
									<path
										d="M432.965818 868.189091c-238.103273 0-431.825455-193.722182-431.825455-431.848727S194.839273 4.514909 432.965818 4.514909s431.848727 193.722182 431.848727 431.825455c0 49.338182-8.261818 97.745455-24.576 143.918545-21.224727 59.997091-56.296727 115.642182-101.422545 160.930909C657.198545 823.086545 548.584727 868.189091 432.965818 868.189091zM432.965818 51.060364c-212.433455 0-385.28 172.846545-385.28 385.28 0 212.456727 172.846545 385.303273 385.28 385.303273 103.168 0 200.075636-40.238545 272.896-113.314909 40.261818-40.401455 71.563636-90.065455 90.507636-143.569455 14.522182-41.169455 21.899636-84.363636 21.899636-128.418909C818.245818 223.906909 645.399273 51.060364 432.965818 51.060364z"
										fill="#666666" p-id="1482"></path>
									<path
										d="M242.455273 594.688c-5.957818 0-11.915636-2.280727-16.453818-6.818909-83.549091-83.549091-83.549091-219.508364 0-303.057455 9.099636-9.099636 23.808-9.099636 32.907636 0 9.099636 9.076364 9.099636 23.808 0 32.907636-65.419636 65.419636-65.419636 171.845818 0 237.242182 9.099636 9.099636 9.099636 23.808 0 32.907636C254.370909 592.430545 248.413091 594.688 242.455273 594.688z"
										fill="#666666" p-id="1483"></path>
									<path
										d="M999.610182 1019.485091c-5.957818 0-11.915636-2.280727-16.453818-6.818909L708.701091 738.234182c-9.099636-9.099636-9.099636-23.808 0-32.907636s23.808-9.099636 32.907636 0l274.455273 274.432c9.099636 9.099636 9.099636 23.808 0 32.907636C1011.525818 1017.204364 1005.568 1019.485091 999.610182 1019.485091z"
										fill="#666666" p-id="1484"></path>
								</svg>
							</div>
						</div>
						<div class="gaps"></div>
						<div class="bottom-btn">
							<div class="vbtn left-btn cursor-pointer">
								<span class="hidden">&nbsp;⇀</span>
							</div>
							<div class="vbtn ritht-btn cursor-pointer ml-5">
								<span class="hidden">&nbsp;⇀</span>
							</div>
						</div>
					</div>
					<div class="design-right w-[75%] pb-[30%] overflow-hidden rounded-xl relative" @mouseenter="stopSlide()"
						@mouseleave="autoplay()">
						<div class="title absolute left-3 top-3 px-4 py-1 bg-gray-300/10 text-white text-base rounded-md">
							<p class="font-bold">视频动画</p>
						</div>
						<div class="swipe-container flex absolute inset-0" :class="{ slideAnimate: !stopAnimate }"
							:style="{ transform: `translateX(${currentIdx * -100}%)` }">
							<img v-for="(img, i) in swipeImgs" :key="i" :src="img.src" alt="" srcset="" class="w-full">
							<!-- <video class="absolute inset-0 w-full h-full object-cover" autoplay loop muted
								src="../../assets/img/works/works-video02.mp4"></video> -->
						</div>
						<div class="bottom-item flex justify-between w-full absolute bottom-0 p-5">
							<div class="bottom-left">
								<div class="title text-white [&>p]:leading-7">
									<p class="font-bold text-sm text-gray-200">今日推荐<span class="idx">
											{{ currentIdx == swipeImgs.length - 1 ? 1 : currentIdx + 1 }}
										</span>/<span class="total">{{ swipeImgs.length - 1 }}</span>
									</p>
									<p class="font-bold text-lg">{{ swipeImgs[currentIdx].title }}
									</p>
								</div>
							</div>
							<div class="bottom-right self-end">
								<div class="title text-white/90 flex items-center">
									<div class="mini-circle bg-indigo-300 w-3 h-3 rounded-full mr-1 opacity-50"></div>
									<div class="font-bold text-sm"><span>设计师：</span><a href="#">TSdesignLLL</a></div>
								</div>
							</div>
						</div>

						<button class="bt-prev" @click="prev()">&#8636;</button>
						<button class="bt-next" @click="next()">&#8640;</button>
					</div>
				</div>
			</div>

			<div class="node-wrap h-[56px] w-full flex justify-center items-center text-sm">
				<div class="node-item"><button type="button">我的关注</button></div>
				<div class="node-item font-bold"><button type="button">全部推荐</button></div>
				<div class="node-item"><button type="button">大咖秀</button></div>
				<div class="node-item"><button type="button">新锐力量</button></div>
				<div class="node-item"><button type="button">精选专题</button></div>
				<div class="node-item"><button type="button">公装场景</button></div>
				<div class="node-item"><button type="button">别墅设计</button></div>
				<div class="node-item"><button type="button">猜你喜欢</button></div>
			</div>

			<div class="main w-[94%] mx-auto mt-5" @click.prevent="">
				<div class="show1-wrap flex justify-between mb-6">
					<div class="show1-left relative w-[calc(66.666%-8px)] pb-[26%] overflow-hidden rounded-xl">
						<div class="show1-left-inner absolute inset-0">
							<div class="title absolute left-3 top-3 px-3 py-2 bg-gray-800/80 text-white text-base rounded-md">
								<p class="font-bold text-sm">大咖秀</p>
							</div>
							<video autoplay loop muted :src="vedios[vedioIdx].src"
								class="w-full h-full object-cover absolute inset-0"></video>
							<button class="bt-prev" @click="debounceVedio('left')">&#8636;</button>
							<button class="bt-next" @click="debounceVedio('right')">&#8640;</button>
							<div class="bottom-item absolute w-full bottom-0 p-5">
								<div class="bottom-left text-white/90">
									<div class="title flex items-center">
										<div class="mini-circle bg-indigo-300 w-3 h-3 rounded-full mr-1 opacity-50"></div>
										<div class="font-bold"><a href="#">{{ vedios[vedioIdx].designer }}</a></div>
										<div class="w-[50px] h-[20px] ml-2 bg-cover"
											style="background: url(../img/works/xinshou.webp) no-repeat;background-size: cover;">
										</div>
									</div>
									<p class="text-sm">{{ vedios[vedioIdx].common }}</p>
								</div>
							</div>
						</div>
					</div>
					<div class="show1-right relative bg-white w-[calc(33.666%-16px)] rounded-xl">
						<a href="#" class="absolute inset-0">
							<div class="img-wrap m-2"><img src="../../assets/img/works/show1-right.webp" alt=""></div>
							<div class="content-bottom flex justify-between absolute bottom-0 w-full p-5">
								<div class="bottom-left">
									<p class="main-title font-bold text-lg inline-block cursor-pointer hover:text-blue-500">方案热榜</p>
									<div class="subtitle text-gray-500 text-sm">热卖方案 | 业主人气 | 新作抢鲜</div>
								</div>
								<p class="self-center shadow-md rounded-md cursor-pointer text-sm p-2 hover:text-blue-500">
									<span style="vertical-align: middle;">点击查看&nbsp;&gt;</span>
								</p>
							</div>
						</a>
					</div>
				</div>

				<!-- 图文列表项展示 -->
				<div class="show2-wrap pb-5">
					<div class="show2-item columns-3 gap-6">
						<div v-for="item in showItems" :key="item.id" class="item">
							<div class="img-wrap"><a href="#"><img :src="getImg(item.img)" alt=""></a>
							</div>
							<div class="content-bottom flex justify-between w-full px-5 py-4">
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
import { category, showItems } from '@/data/works';
import { ref } from 'vue';
const getImg = (imgid: string) => {
	return new URL(`../../assets/img/works/item${imgid}.webp`, import.meta.url).href
}
const swipeImgs = [
	{
		src: new URL('../../assets/img/works/swipe-right01.webp', import.meta.url).href,
		title: '水岸蓝桥中古风'
	},
	{
		src: new URL('../../assets/img/works/swipe-right02.webp', import.meta.url).href,
		title: '一江两岸'
	},
	{
		src: new URL('../../assets/img/works/swipe-right03.webp', import.meta.url).href,
		title: '福州帝景苑公寓128㎡1室'
	},
	{
		src: new URL('../../assets/img/works/swipe-right01.webp', import.meta.url).href,
		title: '水岸蓝桥中古风'
	},
]
const currentIdx = ref(0)
const stopAnimate = ref(false)
const goNext = () => {
	currentIdx.value = (currentIdx.value + 1) % swipeImgs.length
	currentIdx.value >= swipeImgs.length - 1 && setTimeout(() => {
		currentIdx.value = 0
		stopAnimate.value = true
	}, 500);
	stopAnimate.value = false
}
const goPrev = () => {
	currentIdx.value--
	if (currentIdx.value < 0) {
		handleOver()
		stopAnimate.value = true
		setTimeout(() => {
			currentIdx.value--
			stopAnimate.value = false
		}, 0);
	}
}
const handleOver = () => {
	if (currentIdx.value < 0) {
		currentIdx.value = swipeImgs.length - 1
	}
	if (currentIdx.value >= swipeImgs.length) {
		currentIdx.value = 0
	}
}
let timer: any = null
const autoplay = () => {
	timer = setInterval(() => {
		next()
	}, 3000)
}
autoplay()
const stopSlide = () => {
	clearInterval(timer)
	timer = null
}
const debounce = function (this: any, fn: Function, wait: number) {
	let timer: any = null
	return (...args: any) => {
		// const context = this
		!timer && fn(args)
		timer = setTimeout(function () {
			clearTimeout(timer)
			timer = null
		}, wait)
	}
}
const next = debounce(goNext, 800)
const prev = debounce(goPrev, 800)
const vedioIdx = ref(0)
const switchVedio = function (direction: 'left' | 'right') {
	direction == 'left' ?
		vedioIdx.value = (vedioIdx.value - 1 < 0 ? 1 : vedioIdx.value - 1) % vedios.length :
		vedioIdx.value = (vedioIdx.value + 1) % vedios.length
}
const debounceVedio = debounce(switchVedio, 800)
const vedios = [
	{
		src: new URL('../../assets/img/works/show1-left.mp4', import.meta.url).href,
		designer: 'Minthqpc',
		common: '丝绒馥语-法式中古166㎡'
	},
	{
		src: new URL('../../assets/img/works/works-video02.mp4', import.meta.url).href,
		designer: 'Pandy',
		common: '金域华庭现代简约104㎡3室'
	},
]
</script>

<style lang="less" scoped>
@import url(./Works.less);

:is(.design-right,
	.show1-wrap) {
	&:hover button {
		display: block;
	}

	button {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		font-size: 20px;
		position: absolute;
		background: rgb(232, 232, 232);
		color: rgba(72, 72, 72, 0.797);
		display: none;

		&:hover {
			color: rgb(58, 95, 233);
			background: rgb(230, 230, 230);
		}

		&:nth-of-type(1) {
			top: 50%;
			left: 3%;
		}

		&:nth-of-type(2) {
			top: 50%;
			right: 2%;
		}

	}
}

.slideAnimate {
	// transform: translateX(-200%)
	transition: all ease-in-out .5s;
}
</style>
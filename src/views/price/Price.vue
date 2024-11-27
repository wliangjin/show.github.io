<template>
	<div class="container w-[80%] mx-auto">
		<div class="topbar mt-7 mb-12">
			<ul class="flex justify-center text-2xl font-bold text-gray-500">
				<li :class="{ active: k == version }" v-for="(v, k) of price" :key="k" @click.prevent="() => {
					(version as any) = k, boxIdx = 0
				}"><a href="#">{{ v.title }}</a>
				</li>
				<!-- <li><a href="#">{{ price.personal.title }}</a></li>
				<li class="active"><a href="#">{{ price.enterprise.title }}</a></li> -->
				<!-- <li><a href="#">教育版</a></li> -->
			</ul>
		</div>
		<h1 class="text-4xl text-center font-bold text-gray-700 mb-12">{{ getPropertyValue(price, version).common }}</h1>

		<div class="main">
			<div class="main-inner flex justify-center pb-[100px]">
				<div v-for="(item, i) in price[version].version" :key="item.id" class="box flex flex-col mx-3"
					:class="{ active: i == boxIdx, boxbg: version == 'personal' && i == boxIdx }"
					:style="{ width: version == 'personal' ? '284px' : '320px' }" @mouseenter="() => boxIdx = i">
					<div class="title text-xl font-bold text-gray-700">{{ item.title }}</div>
					<div class="desc">{{ item.common }}</div>
					<button>{{ version == 'personal' ? item.btnText : '立即咨询' }}</button>
					<div class="advantage px-3">
						<div v-for="a in item.advantage" :key="a.aid" class="item flex text-xs tracking-wider">
							<div class="left-icon mr-2 text-blue-300">
								<el-icon>
									<CircleCheckFilled />
								</el-icon>
							</div>
							<div class="text align-middle">{{ a.title }}</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>

<script setup lang="ts">
import { price } from '@/data/price';
import { ref } from 'vue';
const version = ref('personal')
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}
const boxIdx = ref(0)
// const switchType = (e: Event) => {
// 	const target = e.target as HTMLElement
// 	const currentTarget = e.currentTarget as HTMLElement
// 	if (target.tagName == 'A') {
// 		e.preventDefault()
// 		let lis = currentTarget.children
// 		Array.from(lis).forEach((li) => {
// 			li.classList.remove('active')
// 		})
// 		target.parentElement?.classList.add('active')
// 	}
// }
//处理鼠标移入效果
// const handleOver = (e: Event) => {
// 	const target = e.target as HTMLElement
// 	const currentTarget = e.currentTarget as HTMLElement
// 	if (target.classList.contains('box')) {
// 		let boxs = currentTarget.children

// 		Array.from(boxs).forEach(box => {
// 			box.classList.remove('active')
// 		})
// 		target.classList.add('active')
// 	}
// }

</script>

<style lang="less" scoped>
@import url(./Price.less);

@media screen and (max-width: 1024px) {
	.container {
		width: 90%;
	}

	.main-inner {
		flex-flow: wrap;

		.box {
			width: 48%;
		}
	}
}
</style>
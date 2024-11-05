<template>
	<div class="container min-h-[100vh] w-[70%] mx-auto">
		<div class="topbar mt-7 mb-12">
			<ul @click="(e) => switchType(e)" class="flex justify-center text-2xl font-bold text-gray-500">
				<li><a href="#">个人版</a></li>
				<li class="active"><a href="#">企业版</a></li>
				<li><a href="#">教育版</a></li>
			</ul>
		</div>
		<h1 class="text-4xl text-center font-bold text-gray-700 mb-12">全链路协作各行业覆盖，打造专业解决方案</h1>

		<div class="main">
			<div class="main-inner flex justify-between pb-[100px]" @mouseover="(e) => handleOver(e)">
				<div v-for="(item, i) in price" :key="item.id" class="box flex flex-col" :class="{ active: i == 0 }">
					<div class="title text-xl font-bold text-gray-700">{{ item.title }}</div>
					<div class="desc">{{ item.common }}</div>
					<button>立即咨询</button>
					<div class="advantage px-3">
						<div v-for="a in item.advantage" :key="a.aid" class="item flex text-xs tracking-wider">
							<div class="icon mr-2">
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
const switchType = (e: Event) => {
	const target = e.target as HTMLElement
	const currentTarget = e.currentTarget as HTMLElement
	if (target.tagName == 'A') {
		e.preventDefault()
		let lis = currentTarget.children
		Array.from(lis).forEach((li) => {
			li.classList.remove('active')
		})
		target.parentElement?.classList.add('active')
	}
}
//处理鼠标移入效果
const handleOver = (e: Event) => {
	const target = e.target as HTMLElement
	const currentTarget = e.currentTarget as HTMLElement
	if (target.classList.contains('box')) {
		let boxs = currentTarget.children

		Array.from(boxs).forEach(box => {
			box.classList.remove('active')
		})
		target.classList.add('active')
	}
}

</script>

<style lang="less" scoped>
@import url(./Price.less);
</style>
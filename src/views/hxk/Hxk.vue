<template>
	<div id="app">
		<div class="container mx-auto">
			<!-- 顶部标题logo及简介 -->
			<div class="top-wrap">
				<div class="logo"></div>
				<div class="desc text-center text-xs text-white mb-[40px]">
					<span>超千万户型资源&nbsp;&nbsp;</span>
					<span>轻松搜索去设计</span>
				</div>
			</div>
			<!-- 搜索框 -->
			<div class="search-wrap flex justify-center">
				<div class="search overflow-hidden rounded-lg bg-gray-100 flex items-center">
					<div class="region w-[60px] text-center">
						<span class="text-gray-800">桂林</span>
					</div>
					<span class="scale-75 text-gray-300 mr-3">|</span>
					<input class="bg-transparent w-[425px] flex-1 h-full outline-none tracking-wider" type="text"
						placeholder="请输入小区名称" />
					<button class="search-btn px-5 py-2 h-[48px] flex items-center">
						<span class="icon">
							<svg focusable="false" aria-hidden="false" viewBox="0 0 1024 1024" class="icon">
								<path
									d="M480.896 790.87c171.2 0 309.973-138.774 309.973-309.974 0-171.19-138.773-309.973-309.973-309.973-171.19 0-309.973 138.784-309.973 309.973 0 171.2 138.784 309.973 309.973 309.973zM832.8 742.111l148.533 148.523-90.698 90.698L742.112 832.8a436.277 436.277 0 0 1-261.216 86.325c-242.027 0-438.23-196.202-438.23-438.229s196.203-438.23 438.23-438.23c242.027 0 438.23 196.203 438.23 438.23 0 97.877-32.086 188.267-86.326 261.216z">
								</path>
							</svg>
						</span>
						<span class="ml-2">搜索</span>
					</button>
				</div>
			</div>
			<!-- 主体内容 -->
			<div class="main-content w-[80%] mx-auto" @click.prevent="">
				<!-- 图标文字导航条 -->
				<div class="navbar bg-white mt-[42px] rounded-xl flex justify-between items-center text-center">
					<a href="#">
						<span class="icon"> </span>
						<span>户型工具</span>
					</a>
					<a href="#">
						<span class="icon"> </span>
						<span>装修工具</span>
					</a>
					<a href="#">
						<span class="icon"> </span>
						<span>优秀设计</span>
					</a>
					<a href="#">
						<span class="icon"> </span>
						<span>户型改造</span>
					</a>
				</div>
				<!-- 展示区 -->
				<div class="center flex justify-between mt-8  items-stretch mb-12">
					<div class="left w-[72%]">
						<div class="title mb-3">
							<h2 class="font-bold text-lg text-gray-800">最新户型</h2>
						</div>

						<div class="show-wrap whitespace-nowrap flex justify-between">

							<div class="show-type relative bg-white w-[calc(33.666%-16px)] rounded-xl">
								<div class="img-wrap m-2"><img src="@/assets/img/hxk/type01.png" alt=""></div>
								<div class="content-bottom flex justify-between w-full px-5 pb-3">
									<div class="bottom-left flex-1">
										<p class="main-title font-bold text-lg inline-block cursor-pointer hover:text-blue-500">兰乔圣菲-15号
										</p>
										<div class="subtitle text-gray-500 text-sm mt-2">3室2厅1厨2卫 125.00m²</div>
									</div>
									<p class="self-center cursor-pointer text-gray-500 text-xs p-2 hover:text-blue-500">
										<span>全部&nbsp;&gt;</span>
									</p>
								</div>
							</div>
							<div class="show-type relative bg-white w-[calc(33.666%-16px)] rounded-xl">
								<div class="img-wrap m-2"><img src="@/assets/img/hxk/type01.png" alt=""></div>
								<div class="content-bottom flex justify-between w-full px-5 pb-3">
									<div class="bottom-left flex-1">
										<p class="main-title font-bold text-lg inline-block cursor-pointer hover:text-blue-500">兰乔圣菲-15号
										</p>
										<div class="subtitle text-gray-500 text-sm mt-2">3室2厅1厨2卫 125.00m²</div>
									</div>
									<p class="self-center cursor-pointer text-gray-500 text-xs p-2 hover:text-blue-500">
										<span>全部&nbsp;&gt;</span>
									</p>
								</div>
							</div>
							<div class="show-type relative bg-white w-[calc(33.666%-16px)] rounded-xl">
								<div class="img-wrap m-2"><img src="@/assets/img/hxk/type01.png" alt=""></div>
								<div class="content-bottom flex justify-between w-full px-5 pb-3">
									<div class="bottom-left flex-1">
										<p class="main-title font-bold text-lg inline-block cursor-pointer hover:text-blue-500">兰乔圣菲-15号
										</p>
										<div class="subtitle text-gray-500 text-sm mt-2">3室2厅1厨2卫 125.00m²</div>
									</div>
									<p class="self-center cursor-pointer text-gray-500 text-xs p-2 hover:text-blue-500">
										<span>全部&nbsp;&gt;</span>
									</p>
								</div>
							</div>

						</div>
					</div>
					<!-- 展示区右方热门推荐 -->
					<div class="right w-[calc(28%-16px)] text-sm flex flex-col justify-stretch">
						<div class="title mb-3">
							<h2 class="font-bold text-lg text-gray-800">热门小区</h2>
						</div>
						<div class="hot bg-white p-3 w-full rounded-xl h-full">
							<ul class="flex flex-col flex-1">
								<li v-for="(item, i) of hotRank" :key="item.id">
									<a href="#">{{ item.name }}</a>
									<span :class="['sort', 'text-gray-500', [1, 2, 3].includes(i + 1) && className[i]]">
										{{ i + 1 }}
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { hotRank } from "@/data/hxk";
const className = ['first', 'second', 'third']

</script>

<style lang="less" scoped>
@import url(./hxk.less);
</style>
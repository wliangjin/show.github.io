<template>
	<!-- 视频简介容器高度100vh，视频填满容器 -->
	<div class="container min-h-[100vh] -mt-16">
		<div class="poster">
			<video autoplay loop muted src="@/assets/video.mp4"></video>
		</div>
		<!-- 顶部部件介绍语 -->
		<div class="partTop w-4/5 container mx-auto relative">
			<div class="portTop-wrap absolute top-[28vh] flex flex-col whitespace-nowrap w-125">
				<div class="partTop-title mb-4"></div>
				<br />
				<div class="partTop-desc text-2xl tracking-wider text-blue-900/90">
					让设计更简单、更高效。
				</div>
				<!-- 部件按钮 -->
				<div class="bottom-btn mt-10">
					<div class="vbtn left-btn cursor-pointer">
						<span class="hidden">&nbsp;⇀</span>
					</div>
					<div class="vbtn ritht-btn cursor-pointer ml-5">
						<span class="hidden">&nbsp;⇀</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="main bg-gray-100">
		<!-- 下方展示列表，内容：介绍优势 -->
		<div class="service min-h-[100vh]">
			<div class="service-contnet w-[76%] mx-auto py-20">
				<div class="title-wrap text-center font-bold tracking-[2px]">
					<p class="text-[48px]">一站式</p>
					<p class="text-[48px]"><span class="text-blue-500">云设计服务</span><span>平台。</span></p>
				</div>
				<p class="desc text-center text-base text-gray-500 tracking-[3px] mb-14">提供全空间创作和全链路设计、营销以及管理服务</p>
				<div class="items">
					<ul class="flex justify-between flex-wrap">
						<li>
							<a href="#">
								<div class="top">
									<div class="left-tag">
										<i class="type-en">01 DESIGN </i>
										<span class="type-zh">设计</span>
									</div>
									<div class="icon"></div>
								</div>
								<div class="title">
									<p>模袋云别墅设计</p>
								</div>
								<div class="desc">
									<p>模块化快速别墅设计，贯穿“别墅设计-装饰-渲染-展示营销全链路”。</p>
								</div>
								<div class="bottom">了解更多 ⇀</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="top">
									<div class="left-tag">
										<i class="type-en">02 DESIGN </i>
										<span class="type-zh">设计</span>
									</div>
									<div class="icon"></div>
								</div>
								<div class="title">
									<p>美间家居提案设计</p>
								</div>
								<div class="desc">
									<p>10秒搞定提案设计PPT，助力设计谈单与汇报。</p>
								</div>
								<div class="bottom">了解更多 ⇀</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="top">
									<div class="left-tag">
										<i class="type-en">03 DESIGN </i>
										<span class="type-zh">设计</span>
									</div>
									<div class="icon"></div>
								</div>
								<div class="title">
									<p>酷空间公装设计系统</p>
								</div>
								<div class="desc">
									<p>为公装、商装领域专门打造的智能3D云设计工具。百万公装素材，多项公装行业场景化工具。</p>
								</div>
								<div class="bottom">了解更多 ⇀</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="top">
									<div class="left-tag">
										<i class="type-en">04 MANAGEMENT </i>
										<span class="type-zh">管理</span>
									</div>
									<div class="icon"></div>
								</div>
								<div class="title">
									<p>企业数字化资产管理</p>
								</div>
								<div class="desc">
									<p>解析“设计-营销-下单”全场景数据，精准定位业务问题，让数据赋能决策，释放商业价值。</p>
								</div>
								<div class="bottom">了解更多 ⇀</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="top">
									<div class="left-tag">
										<i class="type-en">05 MARKETING </i>
										<span class="type-zh">营销</span>
									</div>
									<div class="icon"></div>
								</div>
								<div class="title">
									<p>线上线下全渠道营销</p>
								</div>
								<div class="desc">
									<p>多种数字化营销工具打通线上线下全链路，拓展多渠道流量，盘活门店私域流量，玩转家居新零售。</p>
								</div>
								<div class="bottom">了解更多 ⇀</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="top">
									<div class="left-tag">
										<i class="type-en">07 MARKETING </i>
										<span class="type-zh">营销</span>
									</div>
									<div class="icon"></div>
								</div>
								<div class="title">
									<p>酷咖名片小程序</p>
								</div>
								<div class="desc">
									<p>酷家乐微信生态营销工具，个性化方案名片，通过微信传播分享，让获客更简单、更高效。</p>
								</div>
								<div class="bottom">了解更多 ⇀</div>
							</a>
						</li>
						<li>
							<a href="#">
								<div class="top">
									<div class="left-tag">
										<i class="type-en">01 DESIGN </i>
										<span class="type-zh">设计</span>
									</div>
									<div class="icon"></div>
								</div>
								<div class="title">
									<p>模袋云别墅设计</p>
								</div>
								<div class="desc">
									<p>模块化快速别墅设计，贯穿“别墅设计-装饰-渲染-展示营销全链路”。</p>
								</div>
								<div class="bottom">了解更多 ⇀</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
@import url(./Home.less);
</style>
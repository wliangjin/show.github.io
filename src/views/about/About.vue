<template>
	<div class="about py-8">
		<h1 class="text-3xl">关于我们</h1>

		<div id="group-info">
			<h2>小组信息</h2>
			<p>前端开发:韦梁金</p>
			<p>项目经理:梁众</p>
			<p>UI设计:韦宗林</p>
			<p>素材收集:韦琼健</p>
			<p>内容编辑:谢王福</p>
			<p>项目测试:唐寅真</p>
		</div>

		<h2>小组成员</h2>

		<div id="member1" class="member-info">
			<span id="student-id-2">学号: 21060733</span>
			<span id="name-2">姓名: 韦梁金</span>
			<span id="class-2">班级: 计算机2107</span>
			<span id="career-2">职业规划: 学习当下热门前端技术，包括vue、react、vite等流行技术，成为前端开发工程师</span>
			<span id="summary-2">课程总结: 开发使用前端主流技术，vuejs框架，vite构建工具，less，element-plus组件库等，
				经过本次前端开发，解决问题能力得到不错的提升，编码也更加熟练。</span>
		</div>

		<div id="member2" class="member-info">
			<span id="student-id-2">学号: 21060634</span>
			<span id="name-1">姓名: 梁众</span>
			<span id="class-1">班级: 计算机2106</span>
			<span id="career-1">职业规划:
				我的职业规划主要集中在为将来成为项目经理做准备。我将重点学习前端技术，通过参与项目实践来提升我的技术能力和团队协作技巧。同时，我也会学习项目管理的基础知识，为将来能够领导和管理项目团队打下坚实的基础。</span>
			<span id="summary-1">课程总结:
				在JS+jQ课程中，我掌握了JavaScript的基础知识，包括语法、数据类型和函数编程，以及DOM操作和事件处理。通过学习jQuery，我提高了开发效率，尤其是在DOM选择、事件绑定和动画效果方面。我也学习了Ajax请求和异步编程，这让我能够处理服务器与客户端之间的数据交互，提升用户体验。此外，我了解了前端性能优化的基本概念，这对于提高网站性能至关重要。通过完成实战项目，我将这些理论知识应用于实践，提升了解决实际问题的能力，并在课程结束时进行了反思和总结，为未来的学习和发展打下了坚实的基础。</span>
		</div>

		<div id="member3" class="member-info">
			<span id="student-id-2">学号: 21060746</span>
			<span id="name-2">姓名: 韦宗林</span>
			<span id="class-2">班级: 计算机2107</span>
			<span id="career-2">职业规划: 掌握HTML/CSS/JS基础，熟练UI设计与交互技巧，深入理解前端框架与性能优化。通过实践项目，提升实战能力，为成为优秀前端UI工程师打下坚实基础。</span>
			<span id="summary-2">课程总结:
				在短暂的课程学习中，我系统地掌握了HTML/CSS的基础布局与样式设计，能够灵活运用JavaScript实现丰富的页面交互效果。这些宝贵的经验为我成为一名优秀的前端UI工程师打下了坚实的基础，也让我对未来充满了信心与期待。</span>
		</div>

		<div id="member4" class="member-info">
			<span id="student-id-2">学号: 21060734</span>
			<span id="name-2">姓名: 韦琼健</span>
			<span id="class-2">班级: 计算机2107</span>
			<span id="career-2">职业规划: 成为一名前端开发工程师，能够在前端和后端之间架起桥梁，提供完整的技术解决方案。在前端方面，我将继续深入学习 JavaScript 及其相关框架（如
				React、Vue），并提升自己在用户体验和界面设计方面的能力。</span>
			<span id="summary-2">课程总结: 在前端开发课程的学习中，我掌握了 HTML、CSS 和 JavaScript 的基本知识，并了解了它们在网页开发中的应用。通过学习不同的前端框架和工具，如 jQuery.js
				和 Bootstrap，我更加深入地理解了现代前端开发的流程和最佳实践。</span>
		</div>

		<div id="member5" class="member-info">
			<span id="student-id-2">学号: 21060736</span>
			<span id="name-2">姓名: 谢王福</span>
			<span id="class-2">班级: 计算机2107</span>
			<span id="career-2">职业规划: 基础技能的掌握和不断的项目实践是成功的关键。通过系统的学习、积极的实践和持续的职业发展，将能够在这个快速发展的领域中脱颖而出，成为一名优秀的前端内容编辑。</span>
			<span id="summary-2">课程总结:
				这门课程让我对前端开发有了全新的认识。前端开发不仅仅是编写HTML和CSS来构建页面的外观，更是通过JavaScript和JQuery来赋予页面交互性和动态性。一个好的前端页面应该具有良好的用户体验，这需要对JavaScript和JQuery有深入的理解和熟练的运用。</span>
		</div>

		<div id="member6" class="member-info">
			<span id="student-id-2">学号: 21060720</span>
			<span id="name-2">姓名: 唐寅真</span>
			<span id="class-2">班级: 计算机2107</span>
			<span id="career-2">职业规划: 成为后端开发工程师</span>
			<span id="summary-2">课程总结: 学习了后端开发的基础技术，包括数据库和服务器配置。</span>
		</div>

	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
h1,
h2 {
	text-align: center;
	color: #333;
}

.about div:nth-of-type(n-1) {
	& span:nth-of-type(-n+2) {
		color: #6227ba;
	}
}

/* 小组信息部分 */
#group-info {
	background-color: #fff;
	border-radius: 8px;
	padding: 20px;
	margin: 30px auto;
	max-width: 900px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#group-info p {
	font-size: 18px;
	line-height: 1.6;
	color: #555;
}

/* 小组成员列表 */
.member-info {
	background-color: #fff;
	border-radius: 8px;
	padding: 15px;
	margin: 15px auto;
	max-width: 900px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	gap: 10px;
}

/* 每个成员信息 */
.member-info span {
	font-size: 16px;
	color: #333;
}

.member-info span strong {
	color: #2d87f0;
}

/* 页面按钮和交互 */
#group-info,
.member-info {
	transition: all 0.3s ease-in-out;
}

#group-info:hover,
.member-info:hover {
	transform: translateY(-5px);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 小标题样式 */
h2 {
	margin-top: 40px;
	font-size: 24px;
	font-weight: bold;
	color: #333;
}

/* 让信息显示更加紧凑 */
#group-info p,
.member-info span {
	margin: 5px 0;
}
</style>
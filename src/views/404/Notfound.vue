<template>
	<div class="notfound min-h-[100vh] flex flex-col justify-center items-center -mt-14">
		<div class="info flex items-center text-lg mb-5">
			<p class="text-lg">你好像迷路了！！没关系，</p>
			<RouterLink class="text-lg text-green-500 underline underline-offset-[5px]" :to="{ path: '/', replace: true }">
				>点我前往主页< </RouterLink>
		</div>
		<div class="flex">
			<img src="../../assets/404-02.svg" alt="">
			<img src="../../assets/404.svg" alt="">
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
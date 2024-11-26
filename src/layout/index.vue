<template>
	<Header></Header>
		<router-view v-slot="{ Component }">
			<transition name="slide-fade">
				<component :is="Component" />
			</transition>
		</router-view>
	<Footer></Footer>
</template>

<script setup lang="ts">
import Header from './header/Header.vue';
import Footer from './footer/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.3s ease;
} */

.slide-fade-enter-from/* ,
.slide-fade-leave-to */ {
	opacity: .7;
  transform: translateX(-20px);
}
</style>
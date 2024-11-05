<template>
	<Header></Header>
	<router-view></router-view>
	<Footer></Footer>
</template>

<script setup lang="ts">
import Header from './header/Header.vue';
import Footer from './footer/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped></style>
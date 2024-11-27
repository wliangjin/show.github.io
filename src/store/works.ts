import { defineStore } from 'pinia'
import { showItems } from "@/data/works";
import { localData } from "@/utils/storage";
import { waitTime } from '@/utils/common';
import { watch } from 'vue';
// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
const getImg = (imgid: string) => {
	return new URL(`../assets/img/works/item${imgid}.webp`, import.meta.url).href
}
showItems.forEach((item) => {
	item.img = getImg(item.img)
})
const works = Object.assign([], showItems)
export const useWorksStore = defineStore('works', {
	state: () => {
		return {
			works: localData.get('works') || works
		}
	},
	getters: {
		getWorks: (state: { works: any; }) => {
			return state.works
		}
	},
	actions: {
		// 方法
		async setWorks() {
			localData.set('works', this.works)
		},
		async create(item: {}) {
			const works = {
				id: this.works[this.works.length - 1].id + 1,
				...item
			}
			this.works.push(works)
			return works
		},
		async update(id: number, item: {}) {
			let index = this.works.findIndex((i: any) => i.id == id)
			if (index != -1) {
				const works = {
					id: this.works[index].id,
					...item
				}
				await waitTime(500)
				this.works[index] = { ...this.works[index], ...works } /* Object.assign(this.works[index], works) */
			}
			return index >= 0 ? true : false
		},
		async remove(id: number) {
			let index = this.works.findIndex((i: any) => i.id == id)
			if (index != -1) {
				await waitTime(500)
				this.works.splice(index, 1)
			}
			return index ? true : false
		},
		async resetData() {
			await waitTime(500)
			this.works = Object.assign([], showItems)
		}
	}
})
watch(() => useWorksStore().works, () => {
	localData.set('works', useWorksStore().works)
}, { immediate: true, deep: true })
function useLocalData() {
	class Storage {
		storage
		length
		constructor() {
			this.storage = localStorage
			this.length = localStorage.length
		}
		get(k: string) {
			const data: any = this.storage.getItem(k.toUpperCase())
			return JSON.parse(data)
		}
		set(k: string, v: any) {
			const data = JSON.stringify(v)
			this.storage.setItem(k.toUpperCase(), data)
		}
		remove(k: string) {
			this.storage.removeItem(k.toUpperCase())
		}
		clear() {
			this.storage.clear()
		}
	}
	return new Storage()
}
export const localData = useLocalData()
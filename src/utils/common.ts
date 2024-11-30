export const randomNum = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
export const waitTime = (time: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time)
	})
}
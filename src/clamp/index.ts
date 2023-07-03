export const clamp = (number: number, lower?: number, upper?: number) => {
	// if (upper === undefined) {
	// 	upper = lower
	// 	lower = undefined
	// }

	if (upper) {
		upper = Number(upper)
		upper = upper === upper ? upper : 0
		number = number <= upper ? number : upper
	}
	if (lower) {
		lower = Number(lower)
		lower = isNaN(lower) ? 0 : lower
		number = number >= lower ? number : lower
	}
	return number
}

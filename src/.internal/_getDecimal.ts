/** 获取数字的小数部分 */
export const _getDecimal = (num: number, digit?: number) => {
	return +(num % 1).toFixed(digit || 2)
}

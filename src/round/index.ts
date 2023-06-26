/**
 * 对数字四舍五入，保留精确小数
 * @param num 数字
 * @param precision 精确小数位，不传默认0，返回整数
 * @returns
 */
export const round = (num: number, precision?: number): number => {
	precision = precision ? Math.min(precision, 292) : 0
	if (precision) {
		const power: any = +num + 'e' + precision
		return Math.round(power) / Math.pow(10, precision)
	}
	// 为0返回整数
	return Math.round(num)
}

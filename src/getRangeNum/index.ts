/**
 * 指定范围内的随机整数
 * @param min 小值
 * @param max 大值
 * @returns 指定范围内的随机整数
 */
export const getRangeNum = (min: number, max: number) => {
	if (typeof min !== 'number' && typeof max !== 'number') return max
	return +(Math.random() * Math.abs(max - min) + Math.min(min, max)).toFixed()
}

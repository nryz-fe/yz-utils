/**
 * 是否是假值
 * @param value any 需要判断的值
 * @returns boolean
 */
export const isFalsy = (value: any) => {
	// null undefined 0 '' false NaN
	return !value
}

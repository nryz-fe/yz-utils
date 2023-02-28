/**
 * 判断传入的值是否满足types的类型之一
 * @param types 由typeof 的值组成的数组
 * @param value 需要判断的值
 */
export const _typeError = (value: any, types: string[]) => {
	if (!types.includes(typeof value)) {
		throw new TypeError(
			`传入的值类型为${typeof value}，与参数类型${types.join(' | ')}不匹配`
		)
	}
}

import { isFalsy } from '../isFalsy'

/**
 * 是否是真值
 * @param value any 需要判断的值
 * @returns boolean
 */
export const isTruthy = (value: any) => {
	return !isFalsy(value)
}

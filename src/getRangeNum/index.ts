import { _typeError } from '@/.errors/_typeError'

/**
 * 获取指定范围内的随机整数(左包右不包)
 * @param min 小值
 * @param max 大值
 * @returns 指定范围内的随机整数
 */
export const getRangeNum = (min: number, max: number) => {
	_typeError(min, ['number'])
	_typeError(max, ['number'])

	return +(Math.random() * Math.abs(max - min) + Math.min(min, max)).toFixed()
}

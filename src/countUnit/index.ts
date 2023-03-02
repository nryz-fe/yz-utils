import { round } from 'lodash'
import { _typeError } from '../.errors/_typeError'

/**
 * 将数字转换为带单位的格式，最大单位万亿
 * @param num 需要转换的数字
 * @param len 保留小数位数
 * @param isK 千位是否转为k
 * @returns
 */
export const countUnit = (num: number, len = 2, isK = false) => {
	_typeError(num, ['number'])

	const ONE_THOUSAND = 1000
	const TEN_THOUSAND = ONE_THOUSAND * 10
	const ONE_HUNDRED_MILLION = TEN_THOUSAND * TEN_THOUSAND
	const TRILLION = ONE_HUNDRED_MILLION * TEN_THOUSAND
	const currentNum = Math.abs(num)
	if (currentNum >= TRILLION) return `${round(num / TRILLION, len)}万亿`
	if (currentNum >= ONE_HUNDRED_MILLION)
		return `${round(num / ONE_HUNDRED_MILLION, len)}亿`
	if (currentNum >= TEN_THOUSAND) return `${round(num / TEN_THOUSAND, len)}w`
	if (currentNum >= ONE_THOUSAND && isK)
		return `${round(num / ONE_THOUSAND, len)}k`
	return round(num, len)
}

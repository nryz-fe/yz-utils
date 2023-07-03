import { round } from '../round'

/**
 * 处理成百分比数据
 * @param {number} number 要转换的值
 * @param {number} precision 保留精确小数位
 * @param {boolean} unit 返回值是否带百分号
 */
export function toPercent(number: number): number
// eslint-disable-next-line no-redeclare
export function toPercent(number: number, precision: number): number
// eslint-disable-next-line no-redeclare
export function toPercent(
	number: number,
	precision: number,
	unit: boolean
): string
// eslint-disable-next-line no-redeclare
export function toPercent(number: number, precision = 2, unit?: boolean) {
	if (typeof number !== 'number') return number

	if (unit) {
		return round(number * 100, precision) + '%'
	}

	return round(number * 100, precision)
}

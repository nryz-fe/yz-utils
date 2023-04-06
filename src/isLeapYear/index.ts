import _typeError from '@/.errors/_typeError'

/**
 * 是否是闰年
 * @param year 时间 - 年
 * @returns boolean
 */
export const isLeapYear = (year: number) => {
	_typeError(year, ['number'])

	const date = new Date(+year, 1, 28 + 2)
	return !!(date.getDate() & 1)
}

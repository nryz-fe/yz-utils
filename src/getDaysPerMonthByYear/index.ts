import { _typeError } from '../.errors/_typeError'

/**
 * 获取指定年份的每个月的天数 返回天数的数组
 * @param year number 指定年份
 * @returns []
 */
export const getDaysPerMonthByYear = (year?: number) => {
	// if (typeof year !== 'number' && typeof year !== 'undefined') return
	_typeError(year, ['number', 'undefined'])
	const dayList: number[] = []
	const currentDate = new Date()
	const cYear = year ?? currentDate.getFullYear()
	const tDate = new Date(cYear + 1, 0, 1)
	while (dayList.length < 12) {
		tDate.setDate(0)
		dayList.unshift(tDate.getDate())
	}
	return dayList
}

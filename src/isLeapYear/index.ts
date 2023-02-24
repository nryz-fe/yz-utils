/**
 * 是否是润年
 * @param year 时间 - 年
 * @returns boolean
 */
export const isLeapYear = (year: number | string) => {
	const date = new Date(+year, 1, 28 + 2)
	return !!(date.getDate() & 1)
}

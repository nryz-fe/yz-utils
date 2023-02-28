interface GetDateInfo {
	year: number
	month: number
	day: number
	hour: number
	minute: number
	second: number
}

/**
 * 获取指定时间在当年已过去的时间和剩余的时间(year,month,day.hour,minute,second)
 * @param date {year?: number month?: number day?: number hour?: number minute?: number second?: number}
 * @returns {month,day,hour,minute,second,restMonth,restDay,restHour,restMinute,restSecond}
 */
export const getDateInfo = (date?: Partial<GetDateInfo>) => {
	// 当前时间
	const currentDate = new Date()
	if (date?.year) {
		currentDate.setFullYear(date?.year)
	}
	if (date?.month) {
		currentDate.setMonth(date?.month)
	}
	if (date?.day) {
		currentDate.setDate(date?.day)
	}
	if (date?.hour) {
		currentDate.setHours(date?.hour)
	}
	if (date?.minute) {
		currentDate.setMinutes(date?.minute)
	}
	if (date?.second) {
		currentDate.setSeconds(date?.second)
	}
	const currentYear = currentDate.getFullYear()
	const currentMonth = currentDate.getMonth()
	const currentDay = currentDate.getDate()
	const currentHour = currentDate.getHours()
	const currentMinute = currentDate.getMinutes()
	const currentSecond = currentDate.getSeconds()

	let varyMonth = currentMonth
	const dayList: number[] = []
	const tDate = new Date(currentYear + 1, 0, 1)
	while (dayList.length < 12) {
		tDate.setDate(0)
		dayList.unshift(tDate.getDate())
	}
	// 处理天数
	let day = currentDay - 1
	while (varyMonth--) {
		day += dayList[varyMonth]
	}
	// 处理小时数
	const hour = day * 24 + currentHour
	// 处理分钟数
	const minute = hour * 60 + currentMinute
	// 处理秒数
	const second = minute * 60 + currentSecond - 1

	// 处理剩下的天数 包含当天
	const restDay =
		dayList.reduce((accumulator: number, item: number) => accumulator + item) -
		day
	// 处理剩下的小时数 包含当小时
	const restHour = restDay * 24 - currentHour
	// 处理剩下的分钟数 包含当分钟
	const restMinute = restHour * 60 - currentMinute
	// 处理剩下的秒数 包含当秒
	const restSecond = restMinute * 60 - currentSecond + 1

	return {
		month: currentMonth,
		day,
		hour,
		minute,
		second,
		restMonth: 12 - currentMonth,
		restDay,
		restHour,
		restMinute,
		restSecond
	}
}

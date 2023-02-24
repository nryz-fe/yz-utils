/**
 * 根据传入的时间(秒)来返回对应的格式字符
 * @param originTime number 秒数
 * @returns { originTime, second, minute, hour, day }
 */
export const formatSecond = (originTime: number) => {
	if (typeof originTime === 'number') {
		if (originTime < 0) return { originTime }
		const day = Math.floor(originTime / (60 * 60 * 24))
		const hour = Math.floor(originTime / (60 * 60)) - day * 24
		const minute = Math.floor(originTime / 60) - hour * 60 - day * 24 * 60
		const second = originTime % 60
		return { originTime, second, minute, hour, day }
	}
	return { originTime }
}

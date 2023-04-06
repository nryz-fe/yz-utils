import _typeError from '@/.errors/_typeError'

/**
 * 根据传入的时间(秒)返回解析为天时分秒的对象
 * @param originTime number 秒数
 * @returns { originTime, second, minute, hour, day }
 */
export const formatSecond = (originTime: number) => {
	_typeError(originTime, ['number'])

	if (originTime < 0) {
		throw new RangeError('参数超出限制范围')
	}

	const day = Math.floor(originTime / (60 * 60 * 24))
	const hour = Math.floor(originTime / (60 * 60)) - day * 24
	const minute = Math.floor(originTime / 60) - hour * 60 - day * 24 * 60
	const second = originTime % 60
	return { originTime, second, minute, hour, day }
}

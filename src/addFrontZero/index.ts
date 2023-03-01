// 小数点和符号是否要考虑进指定的位数？
/**
 * 给一个数字添加前置0，返回一个指定位数数字的字符串
 * @param num 修改的数字
 * @param digit 保留的位数 default 2
 * @returns 返回一个指定位数数字的字符串
 */
export const addFrontZero = (num: number, digit = 2) => {
	if (digit < 0) {
		throw new RangeError('参数超出限制范围')
	}

	const str = '0'.repeat(digit) + num
	if (num >= 0) {
		return str.slice(-digit)
	} else {
		return str.replace('-', '').slice(-digit).replace('0', '-')
	}
}

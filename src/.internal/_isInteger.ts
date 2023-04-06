/**
 * 是否是整数
 * @param n 数字
 * @returns
 */
const _isInteger = (n: number) => {
	return n << 0 === n
}

export default Number.isInteger || _isInteger

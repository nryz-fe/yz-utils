/** 获取数字的整数部分 */
const _getInteger = (num: number) => {
	return num >= 0 ? Math.floor(num) : Math.ceil(num)
}

export default _getInteger

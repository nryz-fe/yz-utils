/**
 * 为指定的数字添加千分位分隔符
 * @param num number 待处理的数字
 * @returns 处理之后的字符串
 */
export const getThousandBitSeparatorStr = (num: number) => {
	if (typeof num !== 'number') return num
	const numList = num.toString().split('.')
	numList[0] = numList[0].replace(
		/(\d)(?=(\d{3})+$)/g,
		($1: string) => `${$1},`
	)
	return numList.join('.')
}

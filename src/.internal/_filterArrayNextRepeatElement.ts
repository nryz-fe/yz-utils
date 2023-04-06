/**
 * 去除一个数组中当前位置的值的紧挨着的后面若干个与当前值相同的方法，返回一个处理后的数组
 * @param list string[]
 * @param isClean boolean 是否清除处理过程中产生的空字符串
 * @returns string[]
 */
const _filterArrayNextRepeatElement = (list: string[], isClean?: boolean) => {
	if (!Array.isArray(list)) return []
	const indexList: number[] = []
	const resultList = [...list]
	for (let i = 0; i < resultList.length; i++) {
		if (resultList[i] === resultList[i + 1]) {
			resultList[i] = ''
			indexList.push(i)
		}
	}
	if (isClean) {
		indexList.reverse().forEach((i: number) => {
			resultList.splice(i, 1)
		})
	}
	return resultList
}

export default _filterArrayNextRepeatElement

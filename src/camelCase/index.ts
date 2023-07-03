import { _createCompounder } from '../.internal/_createCompounder'
import { isString } from '../is'
import { deburredLetters, reUnicodeWord } from './sourceData'

/** 转化第一个字符为大写, 其他字符为小写 */
const capitalize = (str: string): string => {
	const chr = str.charAt(0)
	const trailing = str.slice(1)
	return chr.toUpperCase() + trailing
}

export const camelCase = _createCompounder(
	(prev: string, cur: string, curIndex: number) => {
		cur = cur.toLowerCase()
		return prev + (curIndex ? capitalize(cur) : cur)
	}
)

import { _typeError } from '@/.errors/_typeError'

/**
 * 去掉字符串中的html部分(包含注释，文档类型) 只获取textContent
 * @param str 待处理的字符串
 * @returns 去掉html标签后的字符串
 */
export const getTextContent = (str: string) => {
	_typeError(str, ['string'])

	const reg =
		/<!DOCTYPE.*?>|<!--.*?-->|<([a-z]+|h[1-6]|)( [a-z-]+(=(?<quote>['"]).*?\k<quote>)?)? ?\/?>|<\/([a-z]+|h[1-6]| *)>/gis
	return str.replace(reg, '')
	// return str.replace(reg, '').replace(/[\r\n]/g, '')
}

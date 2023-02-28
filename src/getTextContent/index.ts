/**
 * 去掉字符串中的html部分(包含注释，文档类型) 只获取textContent
 * @param str 待处理的字符串
 * @returns 去掉html标签后的字符串
 */
export const getTextContent = (str: string) => {
	if (typeof str !== 'string') return str
	// 文档类型
	const reg8 = /(<!DOCTYPE.*?>)/gis
	// html 注释
	const reg9 = /(<!--.*?-->)/gis
	// 前标签
	const reg5 = /<([a-z]+|h[1-6]|) ?\/?>/gis
	// 加上属性的前标签
	const reg7 =
		/<([a-z]+|h[1-6]|)( [a-z-]+(=(?<quote>['"]).*?\k<quote>)?)? ?\/?>/gis
	// 后标签
	const reg6 = /<\/([a-z]+|h[1-6]| *)>/gis
	const reg =
		/<!DOCTYPE.*?>|<!--.*?-->|<([a-z]+|h[1-6]|)( [a-z-]+(=(?<quote>['"]).*?\k<quote>)?)? ?\/?>|<\/([a-z]+|h[1-6]| *)>/gis
	return str.replace(reg, '')
	// return str.replace(reg, '').replace(/[\r\n]/g, '')
}

import { _getDecimal } from "../.internal/_getDecimal"
import { _getInteger } from "../.internal/_getInteger"

export const TEN_THOUSAND = 100 * 100
export const ONE_HUNDRED_MILLION = TEN_THOUSAND * TEN_THOUSAND

/**
 * 阿拉伯数字转换为大写汉字金额 只处理小于一万亿的值
 * @param num 阿拉伯数字
 * @returns 大写汉字金额
 */
export const numberToChinese = (num: number) => {
	// 只处理小于一万亿的值
	if (typeof num !== 'number' && num >= ONE_HUNDRED_MILLION * TEN_THOUSAND) return num
	// 繁体 traditional
	const tlist = ['零', '壹', '貳', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
	const bList = ['拾', '佰', '仟', '万', '亿']
	const unitList = ['元', '角', '分']
	const aList = ['整']
	let integer_result = ''
	let decimal_result = ''
	const integer = _getInteger(num)
	const decimal = _getDecimal(num)

	// 处理千位级别的数字
	const _getStr = (n: number) => {
		let resultStrList:string[] = []
		let index = -1
		while (n >= 1) {
			resultStrList.unshift(tlist[n % 10] + (~index ? bList[index] : ''))
			n = _getInteger(n / 10)
			index++
		}
		return resultStrList.join('')
	}
	// 处理整数
	const qian = integer % TEN_THOUSAND
	const wan = Math.floor((integer % ONE_HUNDRED_MILLION) / TEN_THOUSAND)
	const yi = Math.floor(integer / ONE_HUNDRED_MILLION)
	if (yi >= 1) {
		integer_result += _getStr(yi) + bList[5]
	}
	if (wan >= 1) {
		integer_result += _getStr(wan) + bList[4]
	}
	if (qian >= 1) {
		integer_result += _getStr(qian) + unitList[0]
	}
	// 处理小数
	if (decimal) {
		decimal_result += tlist[_getInteger(decimal * 10) % 10] + unitList[1]
		decimal_result += tlist[_getInteger(decimal * 100) % 10] + unitList[2]
	} else {
		decimal_result = aList[0]
	}
	return integer_result + decimal_result
}

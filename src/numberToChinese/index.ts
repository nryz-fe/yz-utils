import { _filterArrayNextRepeatElement } from "../.internal/_filterArrayNextRepeatElement"
import { _getDecimal } from "../.internal/_getDecimal"
import { _getInteger } from "../.internal/_getInteger"

export const TEN_THOUSAND = 100 * 100
export const ONE_HUNDRED_MILLION = TEN_THOUSAND * TEN_THOUSAND

/** 去除一个数组中当前位置的值的紧挨着的后面若干个与当前值相同的方法，返回一个处理后的数组 原始数据类型数组
 * isClean 是否清除处理过程中产生的空字符串
 */
const _qu = (list: string[],isClean?:boolean) => {
  const indexList:number[] = []
  const resultList = [...list]
  for(let i = 0;i<resultList.length;i++){
    if(resultList[i] === resultList[i+1]){
      resultList[i] = ''
      indexList.push(i)
    }
  }
  if(isClean){
    indexList.forEach((i:number)=>{
      resultList.splice(i,1)
    })
  }
  console.log(resultList);
  return resultList
}

// 101010005

/**
 * 阿拉伯数字转换为大写汉字金额 只处理小于一万亿的值
 * @param num 阿拉伯数字
 * @returns 大写汉字金额
 */
export const numberToChinese = (num: number) => {
	// 只处理小于一万亿的值
	if (typeof num !== 'number' || num >= ONE_HUNDRED_MILLION * TEN_THOUSAND) return num
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
	const _getStr = (n:number,isZero?:boolean) => {
		let resultStrList:string[] = []
		let index = -1
    if(n===0) resultStrList.unshift(tlist[0])
		while (n >= 1) {
			resultStrList.unshift(n % 10 ?(tlist[n % 10] + (~index ? bList[index] : '')) : tlist[0])
			n = _getInteger(n / 10)
			index++
		}
    if(isZero) resultStrList.unshift(tlist[0])
    resultStrList = _filterArrayNextRepeatElement(resultStrList)
    if(resultStrList[resultStrList.length-1] === tlist[0]) {
      resultStrList.splice(resultStrList.length-1,1)
  }
		return resultStrList.join('')
	}
	// 处理整数
	const qian = integer % TEN_THOUSAND
	const wan = Math.floor((integer % ONE_HUNDRED_MILLION) / TEN_THOUSAND)
	const yi = Math.floor(integer / ONE_HUNDRED_MILLION)
    console.log('qian',qian,wan,yi)
	if (yi >= 1) {
		integer_result += _getStr(yi) + bList[4]
	}
	if (wan >= 1) {
		integer_result += _getStr(wan,yi>=1 && wan<1000) + bList[3]
	} else if(qian >= 1) {
        integer_result +=tlist[0]
    }
	if (qian >= 1) {
		integer_result += _getStr(qian,wan>=1&& qian<1000)
	}
    integer_result += unitList[0]
	// 处理小数
	if (decimal) {
		decimal_result += tlist[_getInteger(decimal * 10) % 10] + unitList[1]
		decimal_result += tlist[_getInteger(decimal * 100) % 10] + unitList[2]
	} else {
		decimal_result = aList[0]
	}
	return integer_result + decimal_result
}

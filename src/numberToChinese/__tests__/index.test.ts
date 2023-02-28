import { numberToChinese } from '../index'

test('589624.525', () => {
	expect(numberToChinese(589624.525)).toStrictEqual(
		'伍拾捌万玖仟陆佰贰拾肆元伍角叁分'
	)
})

test('109999995.2122564', () => {
	expect(numberToChinese(109999995.2122564)).toStrictEqual(
		'壹亿零玖佰玖拾玖万玖仟玖佰玖拾伍元贰角壹分'
	)
})

test('109999995.01', () => {
	expect(numberToChinese(109999995.01)).toStrictEqual(
		'壹亿零玖佰玖拾玖万玖仟玖佰玖拾伍元壹分'
	)
})

test('20', () => {
	expect(numberToChinese(20)).toStrictEqual('贰拾元整')
})

test('100000000000000', () => {
	expect(numberToChinese(100000000000000)).toStrictEqual(100000000000000)
})

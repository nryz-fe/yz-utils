import { numberToChinese } from '../index'

describe('numberToChinese', () => {
	test('0', () => {
		expect(numberToChinese(0)).toStrictEqual('零元整')
	})

	test('100000000000000', () => {
		expect(numberToChinese(100000000000000)).toStrictEqual(100000000000000)
	})

	test('20', () => {
		expect(numberToChinese(20)).toStrictEqual('贰拾元整')
	})

	test('109999995.01', () => {
		expect(numberToChinese(109999995.01)).toStrictEqual(
			'壹亿零玖佰玖拾玖万玖仟玖佰玖拾伍元壹分'
		)
	})

	test('109999995.01', () => {
		expect(numberToChinese(109999995.1)).toStrictEqual(
			'壹亿零玖佰玖拾玖万玖仟玖佰玖拾伍元壹角'
		)
	})

	test('500000085.26548', () => {
		expect(numberToChinese(500000085.26548)).toStrictEqual(
			'伍亿零捌拾伍元贰角柒分'
		)
	})
})

console.log('test')

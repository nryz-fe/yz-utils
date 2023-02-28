import { formatSecond } from '../index'

describe('seconds to time', () => {
	test('input is a number', () => {
		expect(formatSecond(500)).toMatchObject({
			day: 0,
			hour: 0,
			minute: 8,
			originTime: 500,
			second: 20
		})
	})
	test('input < 0', () => {
		expect(formatSecond(-1)).toBe(-1)
	})
	test('input is not a number', () => {
		expect(formatSecond('notNumber' as any)).toBe('notNumber')
	})
})

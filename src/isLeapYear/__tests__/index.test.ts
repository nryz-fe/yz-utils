import { isLeapYear } from '../index'

describe.each([
	[2023, false],
	['YEAR', false],
	[2028, true],
	['2028', true]
])('a is b', (a, b) => {
	test('is leapYear', () => {
		expect(isLeapYear(a)).toBe(b)
	})
})

import { isLeapYear } from '../index'

const table: [number | string, boolean | string][] = [
	[2023, false],
	[2028, true],
	['YEAR', 'YEAR']
]

describe.each(table)('LeapYear', (a, expected) => {
	if (typeof a !== 'number') {
		test('input is not a number', () => {
			expect(() => {
				isLeapYear(a as any)
			}).toThrow()
		})
	} else {
		test(`returns ${expected}`, () => {
			expect(isLeapYear(a as any)).toBe(expected)
		})
	}
})

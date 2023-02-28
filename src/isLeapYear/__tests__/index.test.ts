import { isLeapYear } from '../index'

const table: [string | number, boolean][] = [
	[2023, false],
	['YEAR', false],
	[2028, true],
	['2028', true]
]

describe('is a LeapYear?', () =>
	test.concurrent.each(table)('a is b', (a, b) => {
		expect(isLeapYear(a)).toBe(b)
	}))

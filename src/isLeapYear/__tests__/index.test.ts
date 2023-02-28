import { isLeapYear } from '../index'

const table: [number, boolean][] = [
	[2023, false],
	[2028, true]
]

describe('LeapYear', () =>
	test.concurrent.each(table)('return isLeapYear', (a, expected) => {
		expect(isLeapYear(a)).toBe(expected)
	}))

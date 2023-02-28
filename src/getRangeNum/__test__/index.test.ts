import { getRangeNum } from '../index'

const table = [
	[5, 100],
	[100, 5],
	[100, 100]
]

describe.each(table)('a integer between min and max', (a, b) => {
	if (a === b) {
		test('only one integer', () => {
			expect(getRangeNum(a, b)).toBe(a)
		})
	} else {
		const min = a > b ? b : a
		const max = a > b ? a : b
		test('less than max', () => {
			expect(getRangeNum(a, b)).toBeLessThan(max)
		})
		test('more than min', () => {
			expect(getRangeNum(a, b)).toBeGreaterThan(min)
		})
		test('only one integer', () => {
			expect(getRangeNum(a, b) % 1).toBe(0)
		})
	}
})

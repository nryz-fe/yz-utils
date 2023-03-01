import { getRangeNum } from '../index'

const table: [any, any][] = [
	[5, 100],
	[100, 5],
	[100, 100],
	[null, null]
]

describe.each(table)('a integer between min and max', (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		test('input is not a number', () => {
			expect(() => {
				getRangeNum(a, b)
			}).toThrow()
		})
	} else if (a === b) {
		test('equal a or b', () => {
			expect(getRangeNum(a, b)).toBe(a)
		})
	} else {
		const [min, max] = a > b ? [b, a] : [a, b]
		test('less than max', () => {
			expect(getRangeNum(a, b)).toBeLessThan(max)
		})
		test('more than min', () => {
			expect(getRangeNum(a, b)).toBeGreaterThanOrEqual(min)
		})
		test('only one integer', () => {
			expect(getRangeNum(a, b) % 1).toBe(0)
		})
	}
})

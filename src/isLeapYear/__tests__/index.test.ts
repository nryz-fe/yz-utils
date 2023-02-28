import { isLeapYear } from '../index'

test('isLeap2023', () => {
	expect(isLeapYear(2023)).toBe(false)
})

test('isLeap2028', () => {
	expect(isLeapYear('2028')).not.toBe(false)
})

test('isLeapYEAR', () => {
	expect(isLeapYear('YEAR')).toBe(false)
})

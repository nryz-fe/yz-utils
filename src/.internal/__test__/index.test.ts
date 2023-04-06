import _isEmail from '../_isEmail'
import _filterArrayNextRepeatElement from '../_filterArrayNextRepeatElement'

describe('_isEmail', () =>
	test.concurrent.each([
		{ email: '', expected: false },
		{ email: '123456@163.com', expected: true },
		{ email: 'username@domain.com', expected: true },
		{ email: 'teshidhf@163.com', expected: true }
	])('email should be expected', ({ email, expected }) => {
		expect(_isEmail(email)).toBe(expected)
	}))

describe('_filterArrayNextRepeatElement', () =>
	test.concurrent.each([
		{
			list: ['1', '2', '2', '3', '4', '5', '4', '4'],
			expected1: ['1', '', '2', '3', '4', '5', '', '4'],
			expected2: ['1', '2', '3', '4', '5', '4']
		},
		{ list: 0, expected1: [], expected2: [] }
	])('filter Same', ({ list, expected1, expected2 }: Record<string, any>) => {
		expect(_filterArrayNextRepeatElement(list)).toMatchObject(expected1)
		expect(_filterArrayNextRepeatElement(list, true)).toMatchObject(expected2)
	}))

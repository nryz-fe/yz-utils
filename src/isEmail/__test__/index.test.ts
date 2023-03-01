import { isEmail } from '../index'

const table = [
	{ email: '', expected: false },
	{ email: '123456@163.com', expected: true },
	{ email: 'username@domain.com', expected: true },
	{ email: 'teshidhf@163.com', expected: true }
]

describe('isEmail', () =>
	test.concurrent.each(table)(
		'email should be expected',
		({ email, expected }) => {
			expect(isEmail(email)).toBe(expected)
		}
	))

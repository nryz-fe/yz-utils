import _isEmail from '../.internal/_isEmail'

/**
 * 是否是电子邮件
 * @param email string
 * @returns boolean
 */
export const isEmail = (email: string) => {
	const input = document.createElement('input')
	input.type = 'email'
	input.required = true
	input.value = email
	return typeof input.checkValidity === 'function'
		? input.checkValidity()
		: _isEmail(email)
}

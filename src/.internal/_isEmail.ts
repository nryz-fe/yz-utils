// 验证字符串是否是邮箱
const _isEmail = (email: string) => {
	// const reg1= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
	const reg = /^([\w+.])+@\w+([.]\w+)+$/
	return reg.test(email)
}

export default _isEmail

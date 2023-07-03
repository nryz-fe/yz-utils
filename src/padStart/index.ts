/**
 * 给输入字符添加前缀，支持数字或字符串，例如8 -> 08
 * @param input string | number 输入字符/数字
 * @param length number 返回字符串的长度
 * @param pad 前缀字符
 * @returns
 */
export function padStart(
	input: string | number,
	length: number,
	pad: number | string
): string | number {
	if (typeof input === 'number' && input < 0) {
		return input
	}
	const padStr = String(pad) // 要添加的前缀字符串
	const retainLen = Math.trunc(length) // 规定字符串最终长度，只取整数
	let maxLen = Math.ceil(retainLen / padStr.length) // 可以添加的前缀个数
	const chars: string[] = []
	const before = String(input)
	while (maxLen--) {
		chars.push(padStr)
	}
	return chars.join('').substring(0, retainLen - before.length) + before
}

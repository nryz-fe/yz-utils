type RefererValue =
	| 'no-referrer'
	| 'no-referrer-when-downgrade'
	| 'same-origin'
	| 'origin'
	| 'strict-origin'
	| 'origin-when-cross-origin'
	| 'strict-origin-when-cross-origin'
	| 'unsafe-url'

/**
 *创建a链接下载资源
 * @param {string} url 下载模板
 * @param referrer referrerPolicy报头的值
 */
export const download = (url: string, referrer?: RefererValue) => {
	const a = document.createElement('a')
	a.style.display = 'none'
	a.href = url
	referrer && (a.referrerPolicy = referrer)
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)
	// URL.revokeObjectURL(url)
}

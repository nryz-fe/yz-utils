import { isString } from '../is'

export const cookiesToObj = (cookies: string) => {
	if (isString(cookies)) {
		const result = {}
		const arr = cookies.split(';')
		arr.forEach(item => {
			const tags = item.match(/([^=]+)=(.+)/)
			if (tags) {
				const [, key, value] = tags
				const newKey = key.trim()
				result[newKey] = value
			}
		})
		return result
	}
}

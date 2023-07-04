import { isObject } from '../is'

export const cloneDeep = <T>(obj: T): T => {
	let newObj: any
	if (Array.isArray(obj)) {
		newObj = []
	} else if (isObject(obj)) {
		newObj = {}
	} else {
		return obj
	}
	for (const attr in obj) {
		if (typeof obj[attr] === 'object') {
			newObj[attr] = cloneDeep(obj[attr])
		} else {
			newObj[attr] = obj[attr]
		}
	}
	return newObj
}

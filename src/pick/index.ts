import { isFunction, isString } from '../is'

export const pick = (
	obj: Record<string, any>,
	iteratee?: Function | string[]
) => {
	if (!iteratee) return obj

	const newObj: Record<string, any> = {}

	if (Array.isArray(iteratee)) {
		iteratee.forEach(item => {
			newObj[item] = obj[item]
		})
	}

	if (isFunction(iteratee)) {
		for (const key in obj) {
			const val = obj[key]
			if (iteratee(val)) {
				newObj[key] = val
			}
		}
	}

	if (isString(iteratee)) {
		return { iteratee: obj[iteratee] }
	}

	return newObj
}

import { isFunction, isString } from '../is'

export const countBy = (collection: any[], iteratee: Function | string) => {
	const calculate = {}
	collection.forEach(item => {
		if (iteratee) {
			if (isFunction(iteratee)) {
				item = iteratee(item)
			} else if (isString(iteratee)) {
				item = item[iteratee]
			}
		}

		const ext = calculate[item]
		calculate[item] = ext ? ext + 1 : 1
	})

	return calculate
}

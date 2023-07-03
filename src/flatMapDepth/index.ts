import { isFunction } from '../is'

export const flatMap = (collection: any[], iteratee?: Function): any[] => {
	if (Array.isArray(collection)) {
		collection = collection.reduce((prev, cur) => {
			if (isFunction(iteratee)) {
				cur = iteratee(cur)
			}
			if (Array.isArray(cur)) {
				return [...prev, ...cur]
			} else {
				return [...prev, cur]
			}
		}, [])
	}
	return collection
}

export const flatMapDepth = (
	collection: any[],
	depth = 1,
	iteratee?: Function
) => {
	if (!Array.isArray(collection)) {
		return collection
	}
	let count = 1
	while (count <= depth) {
		collection = flatMap(collection, iteratee)
		count++
	}
}

export const sumBy = (collection: any[], iteratee: Function) => {
	if (!Array.isArray(collection)) return collection
	if (!collection.length) return 0
	const total = collection.reduce((prev, cur) => {
		if (iteratee) {
			cur = iteratee(cur)
		}
		return cur + prev
	}, 0)
	return total
}

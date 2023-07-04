import { baseRandom } from '../.internal/_baseRandom'
import { clamp } from '../clamp'

export const sample = (array: any[], n = 1) => {
	const length = array.length
	const lastIndex = length - 1
	let index = -1
	let size = clamp(n, 0, length)
	size = size === undefined ? length : size
	while (++index < size) {
		const rand = baseRandom(index, lastIndex)
		const value = array[rand]

		array[rand] = array[index]
		array[index] = value
	}
	array.length = size
	return array
}

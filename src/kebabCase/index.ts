import { _createCompounder } from '../.internal/_createCompounder'
import { isString } from '../is'

export const kebabCase = _createCompounder(
	(prev: string, cur: string, curIndex: number) => {
		return prev + (curIndex ? '-' : '') + cur.toLowerCase()
	}
)

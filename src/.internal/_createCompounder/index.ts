import { isString } from '../../is'
import { deburredLetters, reUnicodeWord } from './sourceData'

export function _createCompounder(
	callback: (
		previousValue: string,
		currentValue: string,
		currentIndex: number,
		array: string[]
	) => string
) {
	return (word: string) => {
		if (!isString(word)) {
			return word
		}

		const reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g

		/** Used to compose unicode character classes. */
		const rsComboMarksRange = '\\u0300-\\u036f'
		const reComboHalfMarksRange = '\\ufe20-\\ufe2f'
		const rsComboSymbolsRange = '\\u20d0-\\u20ff'
		const rsComboRange =
			rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange

		/** Used to compose unicode capture groups. */
		const rsCombo = '[' + rsComboRange + ']'

		/**
		 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
		 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
		 */
		const reComboMark = RegExp(rsCombo, 'g')

		/** Used to compose unicode capture groups. */
		const rsApos = "['\u2019]"

		/** Used to match apostrophes. */
		const reApos = RegExp(rsApos, 'g')

		function basePropertyOf(object) {
			return function (key) {
				return object == null ? undefined : object[key]
			}
		}
		const deburrLetter = basePropertyOf(deburredLetters)
		word = word
			.replace(reLatin, deburrLetter)
			.replace(reComboMark, '')
			.replace(reApos, '')

		const wordArr: string[] = word.match(reUnicodeWord) || []

		return wordArr.reduce(callback, '')
	}
}

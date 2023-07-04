/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
	nativeRandom = Math.random

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
export function baseRandom(lower: number, upper: number): number {
	return lower + nativeFloor(nativeRandom() * (upper - lower + 1))
}

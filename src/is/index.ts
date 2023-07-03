const toString = Object.prototype.toString

/** 检查类型 */
type InputType =
	| 'Function'
	| 'undefined'
	| 'Object'
	| 'Date'
	| 'Number'
	| 'AsyncFunction'
	| 'Promise'
	| 'String'
	| 'Boolean'

/**
 * @description: 判断值是否为某个类型
 * @returns boolean
 */
function is(val: unknown, type: InputType) {
	return toString.call(val) === `[object ${type}]`
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
	return is(val, 'Function')
}

/**
 * @description: 是否已定义
 */
export const isDef = <T>(val?: T): val is T => {
	return typeof val !== 'undefined'
}

export const isUnDef = <T>(val?: T): val is T => {
	return !isDef(val)
}

/**
 * @description: 是否为对象
 */
export const isObject = (val: any): val is Record<any, any> => {
	return val !== null && is(val, 'Object')
}

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
	return is(val, 'Date')
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
	return is(val, 'Number')
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
	return is(val, 'AsyncFunction')
}

/**
 * @description:  是否为promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
	return (
		is(val, 'Promise') &&
		isObject(val) &&
		isFunction(val.then) &&
		isFunction(val.catch)
	)
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): val is string {
	return is(val, 'String')
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: unknown): val is boolean {
	return is(val, 'Boolean')
}

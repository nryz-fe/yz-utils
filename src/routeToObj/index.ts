import { isObject } from '../is'

const obj = {
	f: {
		a: {
			b: {
				c: 'cache'
			},
			z: 1
		},
		h: {
			g: 234
		}
	}
}
export const objToRoute = (obj: string) => {
	const flatObj = (e: any) => {
		if (isObject(e)) {
			for (const i in e) {
				const val = e[i]
			}
		}
	}
	// const routeArr = route.split('/').filter(item => item)
	// console.log(routeArr)
}

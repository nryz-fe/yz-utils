// example
import { MyType } from './type'
export const sum = (...args: MyType): number => {
	return args.reduce((prev, total) => total + prev, 0)
}

declare const enum Numbers {
	Zero = 0,
	One = 1
}
console.log(Numbers.Zero + Numbers.One)

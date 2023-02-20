// example
export const sum = (...args: number[]): number => {
	return args.reduce((prev, total) => total + prev, 0)
}

declare const enum Numbers {
	Zero = 0,
	One = 1
}
console.log(Numbers.Zero + Numbers.One)

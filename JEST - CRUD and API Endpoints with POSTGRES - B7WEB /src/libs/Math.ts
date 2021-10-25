export const Math = {
	sum: (n1: number, n2: number) => {
		return n1+n2
	},

	sub: (n1: number, n2: number) => {
		return n1-n2
	},

	div: (n1: number, n2: number) => {
		if(n2 > 0) return n1/n2
		return false
	},

	mult: (n1: number, n2: number) => {
		return n1*n2
	}
}
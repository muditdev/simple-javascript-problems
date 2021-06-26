// console.log(this)
// sum(1)(2)(4)(5)......(n) //return sum of all ex.10

const result = sum(1)(2);

function sum(a) {
	return function (b) {
		return a + b
	}
}

console.log(result)
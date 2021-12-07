// console.log(this)
// sum(1)(2)(4)(5)......(n) //return sum of all ex.10
//call recursively sum

// test 1. sum(1)(2)(3)(4)()
// test 2. sum(1)(2)(3)(4)


const total = sum(1)(2);
function sum(a) {
	return function (b) {
		if (typeof b === 'undefined') return a
		return sum(a + b)
	}
}

const output = typeof total === 'function' ? total() : total;
console.log(output)


// with ES6

// const sum = (a) => (b) => (typeof b === 'undefined') ? a : sum(a + b)
// console.log(sum(1)(2)())
/*Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

	Examples
	"()"              =>  true
	")(()))"          =>  false
	"("               =>  false
	"(())((()())())"  =>  true
	Constraints
	0 <= input.length <= 100

*/

console.log(validParentheses("()))))))(()()()()()"))
function validParentheses(parens) {
	return trimValid(parens) === '';
}

function trimValid(pren) {
	let res = trim(pren)
	if(!res.includes('()')) return res;
	return res !== '' ? trimValid(res) : res;
}
function trim(str) {
	return str.includes('()') ? str.replace(/\(\)/g, '') : str;
}
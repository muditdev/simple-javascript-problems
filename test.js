function solution(A) {
	let sum = A.reduce((acc, i) => acc + i, 0);
	let target = sum / 2;
	console.log(sum, target);
	let counter = 0;
	const tmp = A;
	while (sum > target) {
		tmp.sort((a, b) => a - b);
		const lastLargestItem = tmp[tmp.length - 1]
		tmp[tmp.length - 1] = lastLargestItem / 2;
		counter = counter + 1;
		// update total sum
		sum = tmp.reduce((acc, i) => acc + i, 0);
		console.log('t', sum)
	}
	return counter;
}
console.log(solution([15, 5]))
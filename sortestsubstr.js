// Write a function  that, given a string S of length N, returns the length of the shortest unique  substring of S, that is, the length of the shortest word which occurs in S exactly once.
function solution(S) {
	let a1 = [];
	for (let i = 0; i < S.length; i++) {
		for (let j = i + 1; j <= S.length; j++) {
			if (i != j)
				a1.push(S.substring(i, j));
		}
	}
	let a2 = new Map();
	for (let s = 0; s < a1.length; s++) {
		if (a2.has(a1[s])) {
			a2.set(a1[s], a2.get(a1[s]) + 1);
		}
		else { a2.set(a1[s], 1); }
	}

	let freshlist = [];
	for (let s of a2.keys()) {
		if (a2.get(s) == 1)
			freshlist.push(s);
	}
	let dictionary = new Map();

	for (let s = 0; s < freshlist.length; s++) {
		dictionary.set(freshlist[s],
			freshlist[s].length);
	}
	let newlist = [];
	for (let s of dictionary.keys())
		newlist.push(dictionary.get(s));
	let ans = Number.MAX_VALUE;
	for (let i = 0; i < newlist.length; i++)
		ans = Math.min(ans, newlist[i]);
	return ans == Number.MAX_VALUE ? 0 : ans;
}

console.log(solution("zyzyzyz"))
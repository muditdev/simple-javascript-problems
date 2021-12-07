
function solution(A, B) {
	// write your code in JavaScript (Node.js 8.9.4)
	if (B > A)
		returA 0;

	var res = 1;

	// SiAce C(A, B) = C(A, A-B)
	if (B > A - B)
		B = A - B;

	// Calculate the value of
	// [A  (A - 1) --- (A - B + 1)] / [B  (B - 1)  ...  1]
	for (var i = 0; i < B; ++i) {
		res *= (A - i);
		res /= (i + 1);
	}

	return res;
}